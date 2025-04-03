import { useQuizStore } from '@/store/store';
import { FetchedQuiz } from '@/utils/types';
import { Button } from '../ui/button';

function QuizBegin() {
  const quiz = useQuizStore((state) => state.currentQuiz);
  const skipQuestion = useQuizStore((state) => state.skipQuestion);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const { questions } = quiz as FetchedQuiz;
  console.log(questions);
  const setCurrentChoice = useQuizStore((state) => state.setCurrentChoice);
  const currentChoiceID = useQuizStore((state) => state.currentChoiceID);
  console.log(currentChoiceID);
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-md'>
        <p className='text-gray-700 text-sm mb-2'>
          Вопрос {currentIndex + 1}/{questions.length}
        </p>
        <h1 className='text-2xl font-bold text-gray-800'>
          {questions[currentIndex].question}
        </h1>
      </div>
      {/* List Options */}
      <ul className='mt-6 space-y-4 mb-6'>
        {questions[currentIndex].options.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setCurrentChoice(option.id);
            }}
            className={` w-full py-3 px-4 rounded-lg text-lg font-semibold transition-colors duration-300 ${
              currentChoiceID
                ? option.isCorrect
                  ? 'bg-green-500 text-white'
                  : currentChoiceID === option.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-800'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {option.choice}
          </button>
        ))}
      </ul>
      {/* Skip Question or Next Question*/}
      <div className='flex justify-end'>
        {}
        <Button onClick={skipQuestion}>
          {currentChoiceID ? 'Дальше' : 'Пропустить'}
        </Button>
      </div>
      {/* Watch Description */}
    </>
  );
}
export default QuizBegin;
