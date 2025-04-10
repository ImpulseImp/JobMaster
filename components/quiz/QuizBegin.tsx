import { useQuizStore } from '@/store/store';
import { FetchedQuiz } from '@/utils/types';
import { Button } from '../ui/button';

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
  // const answeredQuestionsIDs = useQuizStore(
  //   (state) => state.answeredQuestionsIDs
  // );

  const answeredQuestions = useQuizStore((state) => state.answeredQuestions);

  return (
    <div className=''>
      <div className=' flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-md'>
        <p className='text-gray-700 text-sm mb-2'>
          Вопрос{' '}
          {originalQuestions.findIndex(
            (q) => q.id === questions[currentIndex].id
          ) + 1}
          /{originalQuestions.length}
        </p>

        <h1 className='text-2xl font-bold text-gray-800 w-full'>
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
              const isCorrect = option.isCorrect;
              setCurrentChoice(option.id);
              addAnsweredQuestionIDs(questions[currentIndex].id, isCorrect);
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
      {/* Track answered questions */}
      <div className='flex flex-col items-center sm:flex-row sm:justify-between  mt-4'>
        <div className='flex gap-2'>
          {originalQuestions.map((question, idx) => {
            const answerStatus = answeredQuestions.find(
              (a) => a.questionID === question.id
            );

            const isCurrent = question.id === questions[currentIndex].id;

            const spanClass = !answerStatus
              ? 'bg-gray-300' // Unanswered - Gray
              : answerStatus.isCorrect
              ? 'bg-green-500' // Correct - Green
              : 'bg-red-500'; // Incorrect - Red;

            const borderClass = isCurrent
              ? 'border-2 border-gray-500'
              : 'border'; // Highlight border for the current question

            return (
              <span
                key={idx}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${spanClass} ${borderClass}`}
              >
                {idx + 1}
              </span>
            );
          })}
        </div>

        {/* Skip Question or Next Question*/}
        <div>
          <Button
            onClick={() => {
              if (currentIndex === questions.length - 1) {
                // Check if there are any unanswered questions to revisit
                revisitUnansweredQuestions();
              } else {
                skipQuestion();
              }
            }}
          >
            {currentChoiceID ? 'Дальше' : 'Пропустить'}
          </Button>
        </div>
      </div>
      {/* Watch Description */}
    </div>
  );
}
export default QuizBegin;

// const answeredQuestions = useQuizStore((state) => state.answeredQuestions);
// import { useQuizStore } from '@/store/store';
