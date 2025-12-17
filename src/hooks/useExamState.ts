import { useState, useEffect, useCallback } from 'react';

export type QuestionStatus = 'unattempted' | 'answered' | 'review';

export interface ExamState {
  currentQuestion: number;
  answers: Record<number, number>;
  markedForReview: Set<number>;
  timeRemaining: number;
  isSubmitted: boolean;
  violations: number;
  warningShown: boolean;
}

const EXAM_DURATION = 90 * 60; // 90 minutes in seconds

export function useExamState(totalQuestions: number) {
  const [state, setState] = useState<ExamState>({
    currentQuestion: 0,
    answers: {},
    markedForReview: new Set(),
    timeRemaining: EXAM_DURATION,
    isSubmitted: false,
    violations: 0,
    warningShown: false,
  });

  // Timer
  useEffect(() => {
    if (state.isSubmitted || state.timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setState(prev => {
        if (prev.timeRemaining <= 1) {
          return { ...prev, timeRemaining: 0, isSubmitted: true };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.isSubmitted, state.timeRemaining]);

  const selectAnswer = useCallback((questionId: number, optionIndex: number) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: optionIndex },
    }));
  }, []);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setState(prev => ({ ...prev, currentQuestion: index }));
    }
  }, [totalQuestions]);

  const nextQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.min(prev.currentQuestion + 1, totalQuestions - 1),
    }));
  }, [totalQuestions]);

  const prevQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0),
    }));
  }, []);

  const toggleReview = useCallback((questionId: number) => {
    setState(prev => {
      const newReview = new Set(prev.markedForReview);
      if (newReview.has(questionId)) {
        newReview.delete(questionId);
      } else {
        newReview.add(questionId);
      }
      return { ...prev, markedForReview: newReview };
    });
  }, []);

  const submitExam = useCallback(() => {
    setState(prev => ({ ...prev, isSubmitted: true }));
  }, []);

  const addViolation = useCallback(() => {
    setState(prev => ({
      ...prev,
      violations: prev.violations + 1,
      warningShown: true,
    }));
  }, []);

  const getQuestionStatus = useCallback((questionId: number): QuestionStatus => {
    if (state.markedForReview.has(questionId)) return 'review';
    if (state.answers[questionId] !== undefined) return 'answered';
    return 'unattempted';
  }, [state.answers, state.markedForReview]);

  const getStats = useCallback(() => {
    const answered = Object.keys(state.answers).length;
    const unattempted = totalQuestions - answered;
    const review = state.markedForReview.size;
    return { answered, unattempted, review };
  }, [state.answers, state.markedForReview, totalQuestions]);

  return {
    state,
    selectAnswer,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    toggleReview,
    submitExam,
    addViolation,
    getQuestionStatus,
    getStats,
  };
}
