import { useState, useEffect } from 'react';

const MAX_ATTEMPTS_PER_DAY = 3;
const STORAGE_KEY = 'exam_attempts';

interface AttemptData {
  date: string;
  count: number;
}

export function useAttemptLimit() {
  const [attemptsRemaining, setAttemptsRemaining] = useState(MAX_ATTEMPTS_PER_DAY);
  const [canAttempt, setCanAttempt] = useState(true);

  const getTodayDate = () => new Date().toISOString().split('T')[0];

  const getAttemptData = (): AttemptData => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { date: getTodayDate(), count: 0 };
    
    try {
      const data = JSON.parse(stored) as AttemptData;
      // Reset if it's a new day
      if (data.date !== getTodayDate()) {
        return { date: getTodayDate(), count: 0 };
      }
      return data;
    } catch {
      return { date: getTodayDate(), count: 0 };
    }
  };

  const saveAttemptData = (data: AttemptData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  useEffect(() => {
    const data = getAttemptData();
    const remaining = MAX_ATTEMPTS_PER_DAY - data.count;
    setAttemptsRemaining(remaining);
    setCanAttempt(remaining > 0);
  }, []);

  const recordAttempt = () => {
    const data = getAttemptData();
    const newData = {
      date: getTodayDate(),
      count: data.count + 1
    };
    saveAttemptData(newData);
    const remaining = MAX_ATTEMPTS_PER_DAY - newData.count;
    setAttemptsRemaining(remaining);
    setCanAttempt(remaining > 0);
  };

  return {
    attemptsRemaining,
    canAttempt,
    recordAttempt,
    maxAttempts: MAX_ATTEMPTS_PER_DAY
  };
}
