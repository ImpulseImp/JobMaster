'use client';

import { useQuizStore } from '@/store/store';
import QuizItem from './QuizItem';

function QuizList() {
  const loading = useQuizStore((state) => state.loading);
  const quizzes = useQuizStore((state) => state.quizzes);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className='flex flex-col space-y-4 bg-white shadow-sm rounded-lg p-4 border border-gray-500 primeTextColor'>
      {/* Render Quiz Items */}
      <ul>
        {quizzes?.map((quiz) => (
          <QuizItem key={quiz.id} quiz={quiz} />
        ))}
      </ul>

      {/* Start Button */}
      <div className='text-center'>
        <button
          className='w-full border rounded-lg px-4 py-2 bg-green-400 text-white'
          onClick={() => console.log('Starting quiz')} // Optional: Add behavior
        >
          Начать
        </button>
      </div>
    </div>
  );
}
export default QuizList;
