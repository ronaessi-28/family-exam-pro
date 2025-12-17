import { useEffect, useCallback, useRef } from 'react';

interface ProctorHookProps {
  onViolation: (type: string) => void;
  onAutoSubmit: () => void;
  enabled: boolean;
  warningShown: boolean;
}

export function useProctoring({ onViolation, onAutoSubmit, enabled, warningShown }: ProctorHookProps) {
  const violationCountRef = useRef(0);
  const maxViolations = 3;

  // Handle visibility change (tab switch)
  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        violationCountRef.current++;
        if (violationCountRef.current >= maxViolations) {
          onAutoSubmit();
        } else {
          onViolation('tab_switch');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [enabled, onViolation, onAutoSubmit]);

  // Handle fullscreen exit
  useEffect(() => {
    if (!enabled) return;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        violationCountRef.current++;
        if (violationCountRef.current >= maxViolations) {
          onAutoSubmit();
        } else {
          onViolation('fullscreen_exit');
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [enabled, onViolation, onAutoSubmit]);

  // Handle window blur (minimize)
  useEffect(() => {
    if (!enabled) return;

    const handleBlur = () => {
      violationCountRef.current++;
      if (violationCountRef.current >= maxViolations) {
        onAutoSubmit();
      } else {
        onViolation('window_blur');
      }
    };

    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, [enabled, onViolation, onAutoSubmit]);

  // Disable copy, paste, right-click
  useEffect(() => {
    if (!enabled) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      onViolation('right_click');
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      onViolation('copy');
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      onViolation('paste');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable common shortcuts
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'p')) ||
        e.key === 'PrintScreen' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'j' || e.key === 'c')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        onViolation('keyboard_shortcut');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, onViolation]);

  // Detect DevTools
  useEffect(() => {
    if (!enabled) return;

    const checkDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        violationCountRef.current++;
        if (violationCountRef.current >= maxViolations) {
          onAutoSubmit();
        } else {
          onViolation('devtools');
        }
      }
    };

    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, [enabled, onViolation, onAutoSubmit]);

  const requestFullscreen = useCallback(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  return {
    requestFullscreen,
    violationCount: violationCountRef.current,
  };
}
