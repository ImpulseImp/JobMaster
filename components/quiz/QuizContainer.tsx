'use client';

import { QuizCategory } from '@prisma/client';

// Updated name
import QuizList from './QuizList';
import { useQuizManager } from '@/hooks/useQuizManager';
import QuizHeader from './QuizHeader';

function QuizContainer({ quizCategories }: { quizCategories: QuizCategory[] }) {
  const { quizzes, loadQuizzes } = useQuizManager(); // Updated function name

  return (
    <form>
      <div className='border border-gray-600 rounded-lg shadow-md min-h-[500px] p-6 mt-6 bg-gray-100'>
        {/* Header Section */}
        <QuizHeader
          quizCategories={quizCategories}
          onCategorySelect={loadQuizzes}
        />
        {/* Quiz List Section */}
        <QuizList quizzes={quizzes} />
      </div>
    </form>
  );
}

export default QuizContainer;
