'use client';

import { useQuizStore } from '@/store/store';
import QuizItem from './QuizItem';

function QuizList() {
  const quizzes = useQuizStore((state) => state.quizzes);
  const quizStatus = useQuizStore((state) => state.quizStatus);

  if (quizStatus === 'loading') {
    return (
      <div className='flex justify-center items-center h-60  rounded-lg shadow-md text-lg '>
        Загрузка...
      </div>
    );
  }

  return (
    <div className='flex flex-col space-y-6 shadow-lg rounded-xl p-6 border border-gray-200'>
      {quizzes.length === 0 && (
        <div className='text-center  text-sm'>
          Пожалуйста, выберите категорию, чтобы продолжить.
        </div>
      )}
      {/* Render Quiz Items */}
      <ul className='space-y-4'>
        {quizzes.map((quiz) => (
          <QuizItem key={quiz.id} quiz={quiz} />
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
