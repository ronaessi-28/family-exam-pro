import React, { useState, useCallback } from 'react';
import { questions } from '@/data/questions';
import { useExamState } from '@/hooks/useExamState';
import { useProctoring } from '@/hooks/useProctoring';
import { useAttemptLimit } from '@/hooks/useAttemptLimit';
import { PermissionsCheck } from '@/components/exam/PermissionsCheck';
import { CameraPreview } from '@/components/exam/CameraPreview';
import { Timer } from '@/components/exam/Timer';
import { QuestionNav } from '@/components/exam/QuestionNav';
import { QuestionDisplay } from '@/components/exam/QuestionDisplay';
import { ViolationWarning } from '@/components/exam/ViolationWarning';
import { SubmitConfirmDialog } from '@/components/exam/SubmitConfirmDialog';
import { Results } from '@/components/exam/Results';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send, Menu, X, AlertTriangle } from 'lucide-react';

const ExamInterface: React.FC = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [showViolation, setShowViolation] = useState<string | null>(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { attemptsRemaining, canAttempt, recordAttempt, maxAttempts } = useAttemptLimit();

  const {
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
  } = useExamState(questions.length);

  const handleViolation = useCallback((type: string) => {
    addViolation();
    setShowViolation(type);
  }, [addViolation]);

  const handleAutoSubmit = useCallback(() => {
    submitExam();
  }, [submitExam]);

  const { requestFullscreen } = useProctoring({
    onViolation: handleViolation,
    onAutoSubmit: handleAutoSubmit,
    enabled: examStarted && !state.isSubmitted,
    warningShown: state.warningShown,
  });

  const handlePermissionsGranted = (stream: MediaStream) => {
    setMediaStream(stream);
    recordAttempt();
    requestFullscreen();
    setExamStarted(true);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  // Show attempt limit reached screen
  if (!canAttempt && !examStarted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Daily Limit Reached</h1>
            <h2 className="text-lg text-muted-foreground">दैनिक सीमा समाप्त</h2>
          </div>
          <p className="text-muted-foreground">
            You have used all {maxAttempts} attempts for today. Please come back tomorrow to try again.
          </p>
          <p className="text-sm text-muted-foreground">
            आपने आज के सभी {maxAttempts} प्रयास उपयोग कर लिए हैं। कृपया कल फिर से प्रयास करें।
          </p>
        </Card>
      </div>
    );
  }

  if (!examStarted) {
    return (
      <PermissionsCheck 
        onPermissionsGranted={handlePermissionsGranted} 
        attemptsRemaining={attemptsRemaining}
        maxAttempts={maxAttempts}
      />
    );
  }

  if (state.isSubmitted) {
    return <Results answers={state.answers} onRestart={handleRestart} />;
  }

  const currentQuestion = questions[state.currentQuestion];
  const stats = getStats();

  return (
    <div className="exam-mode min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between p-3 md:p-4 border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <h1 className="text-lg font-bold hidden sm:block">Math Mock Test</h1>
        </div>

        <div className="flex items-center gap-3">
          <Timer timeRemaining={state.timeRemaining} />
          <Button onClick={() => setShowSubmitDialog(true)} className="gap-2" size="sm">
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Submit</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Navigation */}
        <aside className="hidden md:flex w-64 flex-shrink-0 border-r border-border bg-card/50">
          <QuestionNav
            totalQuestions={questions.length}
            currentQuestion={state.currentQuestion}
            getQuestionStatus={getQuestionStatus}
            onQuestionClick={goToQuestion}
          />
        </aside>

        {/* Mobile Navigation Overlay */}
        {showMobileNav && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-background/80" onClick={() => setShowMobileNav(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-72 bg-card border-r border-border animate-slide-up">
              <QuestionNav
                totalQuestions={questions.length}
                currentQuestion={state.currentQuestion}
                getQuestionStatus={getQuestionStatus}
                onQuestionClick={(i) => {
                  goToQuestion(i);
                  setShowMobileNav(false);
                }}
              />
            </aside>
          </div>
        )}

        {/* Question Area */}
        <main className="flex-1 overflow-hidden">
          <QuestionDisplay
            question={currentQuestion}
            currentIndex={state.currentQuestion}
            totalQuestions={questions.length}
            selectedOption={state.answers[state.currentQuestion]}
            isMarkedForReview={state.markedForReview.has(state.currentQuestion)}
            onSelectOption={(opt) => selectAnswer(state.currentQuestion, opt)}
            onToggleReview={() => toggleReview(state.currentQuestion)}
            onNext={nextQuestion}
            onPrev={prevQuestion}
          />
        </main>
      </div>

      {/* Camera Preview */}
      <CameraPreview stream={mediaStream} />

      {/* Violation Warning */}
      {showViolation && (
        <ViolationWarning
          type={showViolation}
          violationCount={state.violations}
          onClose={() => setShowViolation(null)}
        />
      )}

      {/* Submit Confirmation */}
      {showSubmitDialog && (
        <SubmitConfirmDialog
          stats={stats}
          totalQuestions={questions.length}
          onConfirm={submitExam}
          onCancel={() => setShowSubmitDialog(false)}
        />
      )}
    </div>
  );
};

export default ExamInterface;
