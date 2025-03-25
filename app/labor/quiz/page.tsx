'use server';

import QuizContainer from '@/components/quiz/QuizContainer';
import prisma from '@/utils/db';

const fetchQuizCategories = async function () {
  const categories = await prisma.quizCategory.findMany({
    select: { id: true, title: true },
  });
  console.log(categories);
  return categories;
};

async function QuizPage() {
  const data = await fetchQuizCategories();
  console.log(data);
  return (
    <div className=''>
      <h1 className='text-center text-3xl'>
        Добро пожаловать на страницу Экзамена
      </h1>
      <div>
        <QuizContainer />
      </div>
    </div>
  );
}
export default QuizPage;
