'use client';

import QuizItem from './QuizItem';
import EmptyState from './EmptyState';
import { useRouter } from 'next/navigation';

type Quiz = {
  id: string;
  title: string;
  slug: string;
};

type QuizListProps = {
  quizzes: Quiz[] | null;
};

function QuizList({ quizzes }: QuizListProps) {
  const router = useRouter();
  const navigateToQuiz = (slug: string) => {
    // Updated function name
    router.push(`/labor/quiz/${slug}`);
  };
  return (
    <div className='flex flex-col space-y-4 bg-white shadow-sm rounded-lg p-4 border border-gray-500'>
      {/* Render Empty State */}
      {!quizzes && (
        <EmptyState message='Выберите категорию, чтобы увидеть доступные экзамены.' />
      )}
      {quizzes && quizzes.length === 0 && (
        <EmptyState
          message='Нет доступных экзаменов для этой категории.'
          type='error'
        />
      )}

      {/* Render Quiz Items */}
      {quizzes &&
        quizzes.map((quiz) => (
          <QuizItem key={quiz.id} quiz={quiz} onSelect={navigateToQuiz} />
        ))}

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
