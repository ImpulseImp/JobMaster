import QuizContainer from '@/components/quiz/QuizContainer';

function QuizPage() {
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
