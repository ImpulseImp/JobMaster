import QuizContainer from '@/components/quiz/QuizContainer';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizList from '@/components/quiz/QuizList';
import { fetchQuizCategories } from '@/utils/actions';

async function QuizPage() {
  const categories = await fetchQuizCategories();
  if (!categories || categories.length === 0) {
    return <p>No quiz categories available.</p>;
  }

  return (
    <QuizContainer>
      <>
        {/* Header Section */}
        <QuizHeader categories={categories} />
      </>
      {/* Quiz List Section */}
      <QuizList />
    </QuizContainer>
  );
}
export default QuizPage;
