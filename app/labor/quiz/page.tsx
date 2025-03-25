'use server';

import QuizContainer from '@/components/quiz/QuizContainer';
import prisma from '@/utils/db';

const fetchQuizCategories = async function () {
  const categories = await prisma.quizCategory.findMany({
    select: { id: true, title: true, description: true }, // Include description
  });

  return categories;
};

async function QuizPage() {
  const quizCategories = await fetchQuizCategories();

  if (!quizCategories || quizCategories.length === 0) {
    return <p>No quiz categories available.</p>;
  }

  return (
    <div className=''>
      <h1 className='text-center text-3xl'>
        Добро пожаловать на страницу Экзамена
      </h1>
      <div>
        <QuizContainer quizCategories={quizCategories} />
      </div>
    </div>
  );
}
export default QuizPage;
