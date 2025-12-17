import React from 'react';
import { QuestionStatus } from '@/hooks/useExamState';
import { cn } from '@/lib/utils';

interface QuestionNavProps {
  totalQuestions: number;
  currentQuestion: number;
  getQuestionStatus: (id: number) => QuestionStatus;
  onQuestionClick: (index: number) => void;
}

export const QuestionNav: React.FC<QuestionNavProps> = ({
  totalQuestions,
  currentQuestion,
  getQuestionStatus,
  onQuestionClick,
}) => {
  const getStatusClass = (index: number) => {
    const isCurrent = index === currentQuestion;
    const status = getQuestionStatus(index);

    if (isCurrent) return 'question-nav-current';
    
    switch (status) {
      case 'answered':
        return 'question-nav-answered';
      case 'review':
        return 'question-nav-review';
      default:
        return 'question-nav-unattempted';
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <h3 className="font-semibold text-sm text-foreground">Questions / प्रश्न</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <button
              key={i}
              onClick={() => onQuestionClick(i)}
              className={cn('question-nav-item', getStatusClass(i))}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-border space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-exam-answered/20 border-2 border-exam-answered" />
          <span className="text-muted-foreground">Answered / उत्तर दिया</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-exam-unattempted/20 border-2 border-exam-unattempted" />
          <span className="text-muted-foreground">Unattempted / अनुत्तरित</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-exam-warning/20 border-2 border-exam-warning" />
          <span className="text-muted-foreground">Review / समीक्षा</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary border-2 border-primary" />
          <span className="text-muted-foreground">Current / वर्तमान</span>
        </div>
      </div>
    </div>
  );
};
