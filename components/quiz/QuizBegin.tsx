import { useQuizStore } from '@/store/store';
import { FetchedQuiz } from '@/utils/types';
import { Button } from '../ui/button';
import Link from 'next/link';

function QuizBegin() {
  const quiz = useQuizStore((state) => state.currentQuiz);
  const skipQuestion = useQuizStore((state) => state.skipQuestion);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const originalQuestions = useQuizStore((state) => state.originalQuestions);
  const { questions } = quiz as FetchedQuiz;
  const setCurrentChoice = useQuizStore((state) => state.setCurrentChoice);
  const revisitUnansweredQuestions = useQuizStore(
    (state) => state.revisitUnansweredQuestions
  );
  const currentChoiceID = useQuizStore((state) => state.currentChoiceID);
  const addAnsweredQuestionIDs = useQuizStore(
    (state) => state.addAnsweredQuestionIDs
  );
  const answeredQuestions = useQuizStore((state) => state.answeredQuestions);
  const isFinished = originalQuestions.length === answeredQuestions.length;
  const finishQuiz = useQuizStore((state) => state.finishQuiz);

  return (
    <div className=''>
      <p className=' text-sm'>
        Вопрос{' '}
        {originalQuestions.findIndex(
          (q) => q.id === questions[currentIndex].id
        ) + 1}
        /{originalQuestions.length}
      </p>
      <div className='flex flex-col justify-center items-center  min-h-[150px] sm:min-h-[130px] p-4 px-6 rounded-lg shadow-md dark:border dark:border-gray-200'>
        <h1 className='text-xl sm:text-2xl font-bold  w-full sm:text-center'>
          {questions[currentIndex].question}
        </h1>
      </div>
      {/* List Options */}
      <ul className='mt-6 space-y-4 mb-6'>
        {questions[currentIndex].options.map((option) => (
          <button
            disabled={currentChoiceID !== null}
            key={option.id}
            onClick={() => {
              const isCorrect = option.isCorrect; // Determine if the selected option is correct
              setCurrentChoice(option.id); // Update the current choice
              addAnsweredQuestionIDs(
                questions[currentIndex].id,
                option.id, // Pass the user's selected optionID
                isCorrect
              ); // Store the user's answer and correctness
            }}
            className={`w-full py-3 px-4 rounded-lg text-lg sm:text-lg font-semibold  ${
              currentChoiceID
                ? option.isCorrect
                  ? ' bg-green-100 text-green-700 font-bold border border-green-400'
                  : currentChoiceID === option.id
                  ? 'bg-red-100 text-red-700 font-bold border border-red-400'
                  : ' rounded-lg shadow-md dark:border dark:border-gray-200 '
                : 'rounded-lg shadow-md dark:border dark:border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900'
            }`}
          >
            {option.choice}
          </button>
        ))}
      </ul>
      {/* Track answered questions */}
      <div className='flex flex-col items-center sm:flex-row sm:justify-between mt-4 space-y-4 sm:space-y-0'>
        <div className='flex sm:gap-2'>
          {originalQuestions.map((question, idx) => {
            const answerStatus = answeredQuestions.find(
              (a) => a.questionID === question.id
            );

            const isCurrent = question.id === questions[currentIndex].id;

            const spanClass = !answerStatus
              ? '' // Unanswered - Gray
              : answerStatus.isCorrect
              ? 'bg-green-500' // Correct - Green
              : 'bg-red-500'; // Incorrect - Red

            const borderClass = isCurrent
              ? 'border-2 border-gray-500 '
              : 'border'; // Highlight border for the current question

            return (
              <span
                key={idx}
                className={`w-8 h-8 rounded-full flex items-center justify-center  font-semibold ${spanClass} ${borderClass}`}
              >
                {idx + 1}
              </span>
            );
          })}
        </div>

        {/* Skip Question or Next Question */}
        <div>
          {!isFinished && (
            <Button
              onClick={() => {
                if (currentIndex === questions.length - 1) {
                  revisitUnansweredQuestions();
                } else {
                  skipQuestion();
                }
              }}
            >
              {currentChoiceID ? 'Дальше' : 'Пропустить'}
            </Button>
          )}
        </div>
      </div>
      {/* Watch Description */}
      {isFinished && (
        <div className='flex flex-col sm:flex-row sm:justify-between mt-2 space-y-2 sm:space-y-0'>
          <Button asChild>
            <Link href={'/labor/quiz/'}>Вернуться к списку экзаменов</Link>
          </Button>
          <Button onClick={finishQuiz}>Посмотреть результат</Button>
        </div>
      )}
    </div>
  );
}

export default QuizBegin;
