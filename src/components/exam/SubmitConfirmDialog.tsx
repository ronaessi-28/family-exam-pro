import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Send } from 'lucide-react';

interface SubmitConfirmDialogProps {
  stats: {
    answered: number;
    unattempted: number;
    review: number;
  };
  totalQuestions: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const SubmitConfirmDialog: React.FC<SubmitConfirmDialogProps> = ({
  stats,
  totalQuestions,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-6 animate-scale-in">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold">Submit Exam? / परीक्षा सबमिट करें?</h3>
          <p className="text-muted-foreground text-sm">
            Please review your answers before submitting.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
            <span className="text-success font-medium">Answered / उत्तर दिए</span>
            <span className="text-success font-bold">{stats.answered}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10">
            <span className="text-destructive font-medium">Unattempted / अनुत्तरित</span>
            <span className="text-destructive font-bold">{stats.unattempted}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10">
            <span className="text-warning font-medium">Marked for Review / समीक्षा</span>
            <span className="text-warning font-bold">{stats.review}</span>
          </div>
        </div>

        {stats.unattempted > 0 && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-warning/10 text-warning">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">You have {stats.unattempted} unanswered questions!</p>
              <p className="text-warning/80">आपके {stats.unattempted} प्रश्न अनुत्तरित हैं!</p>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button variant="outline" onClick={onCancel} className="flex-1">
            Go Back / वापस जाएं
          </Button>
          <Button onClick={onConfirm} className="flex-1 gap-2">
            <Send className="w-4 h-4" />
            Submit / सबमिट
          </Button>
        </div>
      </div>
    </div>
  );
};
