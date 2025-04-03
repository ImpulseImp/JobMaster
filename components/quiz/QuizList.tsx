'use client';

import { useQuizStore } from '@/store/store';
import QuizItem from './QuizItem';

function QuizList() {
  const loading = useQuizStore((state) => state.loading);
  const quizzes = useQuizStore((state) => state.quizzes);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-60 bg-gray-100 rounded-lg shadow-md text-lg text-gray-600'>
        Загрузка...
      </div>
    );
  }

  return (
    <div className='flex flex-col space-y-6 bg-white shadow-md rounded-xl p-6 border border-gray-300'>
      {/* Render Quiz Items */}
      <ul className='space-y-4'>
        {quizzes?.map((quiz) => (
          <QuizItem key={quiz.id} quiz={quiz} />
        ))}
      </ul>

      {/* Start Button */}
      <div className='flex justify-center'>
        <button className='w-full sm:w-auto px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all'>
          Начать
        </button>
      </div>
    </div>
  );
}

export default QuizList;
