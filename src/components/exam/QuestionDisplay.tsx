import React from 'react';
import { Question } from '@/data/questions';
import { cn } from '@/lib/utils';
import { Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuestionDisplayProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined;
  isMarkedForReview: boolean;
  onSelectOption: (optionIndex: number) => void;
  onToggleReview: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isMarkedForReview,
  onSelectOption,
  onToggleReview,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Question Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card/50">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground rounded-lg font-semibold text-sm">
            Q {currentIndex + 1}/{totalQuestions}
          </span>
          <Button
            variant={isMarkedForReview ? "default" : "outline"}
            size="sm"
            onClick={onToggleReview}
            className={cn(
              "gap-2",
              isMarkedForReview && "bg-warning text-warning-foreground hover:bg-warning/90"
            )}
          >
            <Flag className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isMarkedForReview ? "Marked / चिह्नित" : "Mark for Review / समीक्षा"}
            </span>
          </Button>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {/* Question Text - Bilingual */}
        <div className="space-y-4">
          <div className="p-4 bg-card rounded-xl border border-border">
            <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
              <span className="text-primary font-semibold">EN:</span> {question.questionEn}
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
              <span className="text-primary font-semibold">हिं:</span> {question.questionHi}
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.en.map((optionEn, index) => (
            <button
              key={index}
              onClick={() => onSelectOption(index)}
              className={cn(
                "option-card w-full text-left",
                selectedOption === index && "option-card-selected"
              )}
            >
              <div className="flex items-start gap-3">
                <span className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm",
                  selectedOption === index 
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                )}>
                  {String.fromCharCode(65 + index)}
                </span>
                <div className="flex-1 space-y-1">
                  <p className="text-foreground">{optionEn}</p>
                  <p className="text-muted-foreground text-sm">{question.options.hi[index]}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Fixed at bottom */}
      <div className="flex items-center justify-between p-4 border-t border-border bg-card/50">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous / पिछला</span>
          <span className="sm:hidden">Prev</span>
        </Button>

        <Button
          onClick={onNext}
          disabled={currentIndex === totalQuestions - 1}
          className="gap-2"
        >
          <span className="hidden sm:inline">Next / अगला</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
