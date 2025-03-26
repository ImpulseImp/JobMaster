'use client';

import { useState } from 'react';
import { useQuizStore } from '@/store/quiz';

type Quiz = {
  title: string;
  questions: {
    id: string;
    text: string;
    options: { id: string; text: string; isCorrect: boolean }[];
  }[];
};

function QuizInteraction({ quiz }: { quiz: Quiz }) {
  const {
    currentQuestionIndex,
    selectedAnswers,
    incrementAnsweredCount,
    moveToNextQuestion,
    selectAnswer,
    skipQuestion,
    resetQuiz,
  } = useQuizStore();

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false); // Tracks if feedback is displayed

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleSelectOption = (optionId: string) => {
    selectAnswer(currentQuestion.id, optionId); // Save selected answer
    setShowFeedback(true); // Show feedback after selection
  };

  const handleAnswer = () => {
    if (selectedAnswers[currentQuestion.id]) {
      incrementAnsweredCount();
      setShowFeedback(false); // Reset feedback for the next question
      if (currentQuestionIndex === quiz.questions.length - 1) {
        setQuizCompleted(true); // Mark quiz as completed
      } else {
        moveToNextQuestion(quiz.questions.length);
      }
    }
  };

  const handleSkipQuestion = () => {
    skipQuestion(currentQuestion.id);
    setShowFeedback(false); // Reset feedback for the next question
    if (currentQuestionIndex === quiz.questions.length - 1) {
      setQuizCompleted(true); // Handle quiz completion
    } else {
      moveToNextQuestion(quiz.questions.length);
    }
  };

  const calculateCorrectAnswers = () => {
    return quiz.questions.reduce((count, question) => {
      const selectedOptionId = selectedAnswers[question.id];
      const correctOption = question.options.find((option) => option.isCorrect);
      return correctOption && correctOption.id === selectedOptionId
        ? count + 1
        : count;
    }, 0);
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>
        {quiz.title}
      </h1>

      {quizCompleted ? (
        // Quiz Completed (Review Mode)
        <div>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Quiz Results
          </h2>
          <p className='text-lg text-green-600 mb-4'>
            Correct Answers: {calculateCorrectAnswers()}
          </p>
          <div className='flex gap-4'>
            <button
              onClick={() => {
                resetQuiz(); // Reset the state
                window.location.href = 'http://localhost:3000/labor/quiz'; // Navigate to the quiz page again
              }}
              className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600'
            >
              Retake Quiz
            </button>
            <button
              onClick={() => {
                resetQuiz();
                window.location.href = 'http://localhost:3000/labor/quiz';
              }}
              className='px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600'
            >
              Go Back to Quiz Selection
            </button>
          </div>
          <h3 className='text-xl font-semibold text-gray-800 mt-6'>
            Answer Review:
          </h3>
          {quiz.questions.map((question) => (
            <div
              key={question.id}
              className='p-4 border border-gray-300 rounded-lg mt-4'
            >
              <h4 className='text-lg font-semibold'>{question.text}</h4>
              {question.options.map((option) => (
                <p
                  key={option.id}
                  className={`p-2 rounded-md ${
                    option.id === selectedAnswers[question.id]
                      ? option.isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {option.text}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        // Quiz In Progress
        <div>
          <div className='p-6 bg-gray-50 border border-gray-300 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
              {currentQuestionIndex + 1}. {currentQuestion.text}
            </h2>
            <div className='space-y-3'>
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className={`p-3 text-lg font-medium cursor-pointer rounded-md ${
                    showFeedback // If feedback is displayed, check for correctness
                      ? option.isCorrect
                        ? 'bg-green-500 text-white'
                        : selectedAnswers[currentQuestion.id] === option.id
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                      : selectedAnswers[currentQuestion.id] === option.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  onClick={() => handleSelectOption(option.id)}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-between items-center mt-6'>
            <button
              className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600'
              onClick={handleSkipQuestion}
            >
              Пропустить вопрос
            </button>
            <button
              className={`px-6 py-3 rounded-lg shadow ${
                selectedAnswers[currentQuestion.id]
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
              onClick={handleAnswer}
              disabled={!selectedAnswers[currentQuestion.id]}
            >
              Следующий
            </button>
          </div>

          <p className='text-right mt-4 text-sm text-gray-600'>
            Осталось вопросов:{' '}
            {quiz.questions.length - (currentQuestionIndex + 1)}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuizInteraction;
