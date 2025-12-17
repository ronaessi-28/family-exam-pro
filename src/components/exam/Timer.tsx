import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
}

export const Timer: React.FC<TimerProps> = ({ timeRemaining }) => {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const formatTime = (n: number) => n.toString().padStart(2, '0');

  const getTimerClass = () => {
    if (timeRemaining <= 300) return 'timer-urgent'; // 5 minutes
    if (timeRemaining <= 900) return 'timer-warning'; // 15 minutes
    return 'timer-safe';
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border ${getTimerClass()}`}>
      <Clock className="w-5 h-5" />
      <span className="font-mono text-lg font-bold">
        {hours > 0 && `${formatTime(hours)}:`}
        {formatTime(minutes)}:{formatTime(seconds)}
      </span>
    </div>
  );
};
