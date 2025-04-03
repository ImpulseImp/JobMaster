import { useQuizStore } from '@/store/store';
import { FetchedQuiz } from '@/utils/types';

function QuizBegin() {
  const quiz = useQuizStore((state) => state.currentQuiz);
  const { questions } = quiz as FetchedQuiz;
  console.log(questions);

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-md'>
        <p className='text-gray-700 text-sm mb-2'>Вопрос 1 из 10</p>
        <h1 className='text-2xl font-bold text-gray-800'>
          {questions[0].question}
        </h1>
      </div>
      <ul className='mt-6 space-y-4'>
        {questions[0].options.map((option, idx) => (
          <li
            key={option.id}
            className='flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer'
          >
            <span className='font-semibold text-gray-600 mr-2'>{idx + 1}.</span>
            <span className='text-gray-800'>{option.choice}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default QuizBegin;
