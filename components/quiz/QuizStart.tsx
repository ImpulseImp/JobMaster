'use client';

import { useQuizStore } from '@/store/store';

import { FetchedQuiz } from '@/utils/types';
import QuizStartHeader from './QuizStartHeader';
import { useEffect } from 'react';
import QuizBegin from './QuizBegin';
import QuizFinished from './QuizFinished';

function QuizStart({ quiz }: { quiz: FetchedQuiz }) {
  const setCurrentQuiz = useQuizStore((state) => state.setCurrentQuiz);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const quizStatus = useQuizStore((state) => state.quizStatus);

  useEffect(() => {
    setCurrentQuiz(quiz);
    return () => resetQuiz();
  }, [quiz, setCurrentQuiz, resetQuiz]);

  return (
    <div className='max-w-xs sm:max-w-xl '>
      {/* Quiz Header */}
      {quizStatus === 'ready' && <QuizStartHeader />}
      {/* Start the Quiz */}
      {quizStatus === 'active' && <QuizBegin />}
      {/* Watch the History */}
      {quizStatus === 'finished' && <QuizFinished />}
    </div>
  );
}
export default QuizStart;
