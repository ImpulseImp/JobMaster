import { useQuizStore } from '@/store/store';
import { Button } from '../ui/button';
import Link from 'next/link';

function QuizFinished() {
  const originalQuestions = useQuizStore((state) => state.originalQuestions);
  const answeredQuestions = useQuizStore((state) => state.answeredQuestions);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const setCurrentIndex = useQuizStore((state) => state.setCurrentIndex);
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const correctCount = answeredQuestions.filter((q) => q.isCorrect).length;
  const totalQuestions = originalQuestions.length;

  const currentQuestion = originalQuestions[currentIndex];
  const userAnswer = answeredQuestions.find(
    (answer) => answer.questionID === currentQuestion.id
  );

  return (
    <div className=' p-6 rounded-xl shadow-xl max-w-xs sm:max-w-xl dark:border dark:border-gray-200'>
      {/* Quiz Result Summary */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-extrabold '>Ваш результат</h2>
        <p className=' mt-2 text-lg'>
          Правильные ответы: <span className=''>{correctCount}</span>/
          {totalQuestions}
        </p>
        {/* <p className='text-gray-600 text-lg'>
          Всего вопросов: <span className=''>{totalQuestions}</span>
        </p> */}
      </div>

      <p className='text-sm '>
        Вопрос {currentIndex + 1}/{totalQuestions}
      </p>
      {/* Display Current Question */}
      <div className='flex flex-col justify-center items-center  min-h-[150px] sm:min-h-[130px] p-4 px-6 rounded-lg shadow-md dark:border dark:border-gray-200'>
        <h1 className='text-xl sm:text-2xl font-bold w-full sm:text-center'>
          {currentQuestion.question}
        </h1>
      </div>

      {/* List Options for Current Question */}
      <ul className='mt-6 space-y-4 mb-6'>
        {currentQuestion.options.map((option) => {
          const isCorrect = option.isCorrect;
          const isUserSelected = userAnswer?.optionID === option.id;

          let optionClass =
            'w-full py-3 px-4 rounded-lg text-lg sm:text-lg font-semibold transition-colors duration-300 p-3 rounded-lg border border-gray-300 text-lg w-full'; // Default neutral styling

          if (isCorrect) {
            optionClass +=
              ' bg-green-100 text-green-700 font-bold border-green-400';
          } else if (isUserSelected) {
            optionClass += ' bg-red-100 text-red-700 font-bold border-red-400';
          } else {
            optionClass += ' hover:bg-gray-50';
          }

          return (
            <li key={option.id} className={`${optionClass}`}>
              {option.choice}
            </li>
          );
        })}
      </ul>

      {/* Track Answered Questions */}
      <div className='flex flex-wrap justify-center gap-2 mb-6'>
        {originalQuestions.map((question, idx) => {
          const answerStatus = answeredQuestions.find(
            (answer) => answer.questionID === question.id
          );

          const isCurrent = idx === currentIndex;

          const spanClass = !answerStatus
            ? 'bg-gray-300' // Unanswered - Gray
            : answerStatus.isCorrect
            ? 'bg-green-500' // Correct - Green
            : 'bg-red-500'; // Incorrect - Red

          const borderClass = isCurrent
            ? 'border-2 border-gray-700'
            : 'border border-transparent';

          return (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)} // Navigate to the clicked question
              className={`cursor-pointer w-10 h-10 text-center flex items-center justify-center text-white font-semibold rounded-full shadow-md ${spanClass} ${borderClass} hover:scale-110 transition-transform`}
            >
              {idx + 1}
            </span>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between mt-4'>
        <Button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          Назад
        </Button>
        <Button
          disabled={currentIndex === totalQuestions - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          Вперед
        </Button>
      </div>

      {/* Additional Buttons */}
      <div className='flex flex-col sm:flex-row sm:justify-between mt-6 gap-4'>
        <Button
          onClick={() => {
            startQuiz(); // Reset quiz to allow retaking it
          }}
        >
          Повторить экзамен
        </Button>
        <Button asChild>
          <Link href='/labor/quiz/'>Вернуться к экзаменам</Link>
        </Button>
      </div>
    </div>
  );
}

export default QuizFinished;
