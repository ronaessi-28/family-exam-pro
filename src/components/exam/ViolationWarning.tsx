import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViolationWarningProps {
  type: string;
  onClose: () => void;
  violationCount: number;
}

export const ViolationWarning: React.FC<ViolationWarningProps> = ({ type, onClose, violationCount }) => {
  const getViolationMessage = (type: string) => {
    switch (type) {
      case 'tab_switch':
        return {
          en: 'You switched tabs! Please stay on the exam page.',
          hi: 'आपने टैब बदला! कृपया परीक्षा पेज पर रहें।'
        };
      case 'fullscreen_exit':
        return {
          en: 'You exited fullscreen mode! Please stay in fullscreen.',
          hi: 'आपने पूर्ण स्क्रीन मोड छोड़ा! कृपया पूर्ण स्क्रीन में रहें।'
        };
      case 'window_blur':
        return {
          en: 'You minimized or left the window! Please stay focused.',
          hi: 'आपने विंडो छोटी की! कृपया ध्यान केंद्रित रखें।'
        };
      case 'right_click':
        return {
          en: 'Right-click is disabled during the exam.',
          hi: 'परीक्षा के दौरान राइट-क्लिक अक्षम है।'
        };
      case 'keyboard_shortcut':
        return {
          en: 'Keyboard shortcuts are disabled during the exam.',
          hi: 'परीक्षा के दौरान कीबोर्ड शॉर्टकट अक्षम हैं।'
        };
      case 'devtools':
        return {
          en: 'Developer tools detected! Please close them.',
          hi: 'डेवलपर टूल्स का पता चला! कृपया उन्हें बंद करें।'
        };
      default:
        return {
          en: 'A violation was detected.',
          hi: 'उल्लंघन का पता चला।'
        };
    }
  };

  const message = getViolationMessage(type);
  const remainingWarnings = 3 - violationCount;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-card border border-destructive/50 rounded-2xl shadow-2xl p-6 space-y-4 animate-scale-in">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-destructive">Warning / चेतावनी</h3>
            <p className="text-foreground">{message.en}</p>
            <p className="text-muted-foreground text-sm">{message.hi}</p>
          </div>
        </div>

        <div className="p-3 bg-destructive/10 rounded-lg">
          <p className="text-sm text-center">
            <span className="font-semibold text-destructive">{remainingWarnings}</span>
            {' '}warning(s) remaining. Exam will auto-submit after 3 violations.
          </p>
          <p className="text-xs text-center text-muted-foreground mt-1">
            {remainingWarnings} चेतावनी शेष। 3 उल्लंघन के बाद परीक्षा स्वतः सबमिट होगी।
          </p>
        </div>

        <Button onClick={onClose} className="w-full" size="lg">
          I Understand / मैं समझता/समझती हूँ
        </Button>
      </div>
    </div>
  );
};
