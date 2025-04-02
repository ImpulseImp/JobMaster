import QuizHeader from '@/components/quiz/QuizHeader';
import QuizList from '@/components/quiz/QuizList';
import { fetchQuizCategories } from '@/utils/actions';

async function QuizPage() {
  const categories = await fetchQuizCategories();
  if (!categories || categories.length === 0) {
    return <p>No quiz categories available.</p>;
  }

  return (
    <div>
      <h1 className='text-center text-3xl'>
        Добро пожаловать на страницу Экзамена
      </h1>
      <div className='border border-gray-600 rounded-lg shadow-md min-h-[500px] p-6 mt-6 bg-gray-100'>
        <>
          {/* Header Section */}
          <QuizHeader categories={categories} />
        </>
        {/* Quiz List Section */}
        <QuizList />
      </div>
    </div>
  );
}
export default QuizPage;
