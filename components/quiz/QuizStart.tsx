'use client';

import { useQuizStore } from '@/store/store';

import { FetchedQuiz } from '@/utils/types';
import QuizStartHeader from './QuizStartHeader';
import { useEffect } from 'react';
import QuizBegin from './QuizBegin';

function QuizStart({ quiz }: { quiz: FetchedQuiz }) {
  const isQuizStarted = useQuizStore((state) => state.isQuizStarted);
  const setCurrentQuiz = useQuizStore((state) => state.setCurrentQuiz);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  useEffect(() => {
    setCurrentQuiz(quiz);

    return () => resetQuiz();
  }, [quiz, setCurrentQuiz, resetQuiz]);

  return (
    <div>
      {/* Quiz Header */}
      {!isQuizStarted && <QuizStartHeader />}
      {/* Start the Quiz */}
      {isQuizStarted && <QuizBegin />}
    </div>
  );
}
export default QuizStart;
