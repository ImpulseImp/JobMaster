import { FetchedQuiz } from '@/utils/types';
import { Quiz } from '@prisma/client';
import axios from 'axios';
import { create } from 'zustand';

type QuizStore = {
  quizzes: Quiz[];
  quizStatus: 'inactive' | 'loading' | 'ready' | 'active' | 'finished';

  currentCategoryId: string;
  currentQuiz: FetchedQuiz | null;
  currentIndex: number;
  currentChoiceID: string | null;

  originalQuestions: FetchedQuiz['questions'];

  answeredQuestions: { questionID: string; isCorrect: boolean }[];

  answeredQuestionsIDs: string[];

  categorySelect: (quizID: string) => void;
  startQuiz: () => void;
  resetQuiz: () => void;
  setCurrentQuiz: (quiz: FetchedQuiz) => void;
  skipQuestion: () => void;
  setCurrentChoice: (choiceID: string) => void;
  addAnsweredQuestionIDs: (questionID: string, isCorrect: boolean) => void;
  revisitUnansweredQuestions: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  quizStatus: 'inactive',
  quizzes: [],
  currentIndex: 0,
  currentQuiz: null,

  originalQuestions: [],

  answeredQuestions: [],

  answeredQuestionsIDs: [],
  currentChoiceID: null,
  currentCategoryId: '',
  categorySelect: async (quizID: string) => {
    set((state) => {
      state.resetQuiz(); // Reset previous quiz state
      return {
        quizStatus: 'loading',
        currentCategoryId: quizID,
      };
    });
    try {
      const response = await axios(`/api/quizzes?categoryId=${quizID}`);
      set({
        quizStatus: 'ready',
        quizzes: response.data.quizzes,
      });
    } catch (error) {
      console.error(error);
    }
  },

  startQuiz: () => {
    set({
      quizStatus: 'active',
      answeredQuestions: [], // Clear previous answers
      currentIndex: 0, // Start from the first question
      currentChoiceID: null,
      quizzes: [],
    });
  },

  resetQuiz: () => {
    set({
      currentIndex: 0,
      currentChoiceID: null,
      quizzes: [],
      answeredQuestionsIDs: [],
      currentCategoryId: '',
      currentQuiz: null,
      quizStatus: 'inactive',
    });
  },

  setCurrentQuiz: (quiz: FetchedQuiz) => {
    set({
      currentQuiz: quiz,
      originalQuestions: quiz.questions,
      answeredQuestions: [], // Clear previous answers
      currentIndex: 0, // Start from the first question
      currentChoiceID: null, // Clear any selected choice
      quizStatus: 'ready',
    });
  },

  setCurrentChoice: (choiceID: string) => {
    set({ currentChoiceID: choiceID });
  },

  skipQuestion: () => {
    set((state) => {
      if (state.currentQuiz) {
        const isLastQuestion =
          state.currentIndex === state.currentQuiz.questions.length - 1;

        if (isLastQuestion) {
          // Trigger revisit logic only if unanswered questions remain
          state.revisitUnansweredQuestions();
        } else {
          // Increment to the next question
          return {
            currentIndex: state.currentIndex + 1,
            currentChoiceID: null,
          };
        }
      }
      return state;
    });
  },

  addAnsweredQuestionIDs: (questionID: string, isCorrect: boolean) => {
    set((state) => ({
      answeredQuestions: [
        ...state.answeredQuestions,
        { questionID, isCorrect },
      ],
    }));
  },

  revisitUnansweredQuestions: () => {
    set((state) => {
      if (state.currentQuiz) {
        // Filter out answered questions to get only unanswered ones
        const unansweredQuestions = state.currentQuiz.questions.filter(
          (question) =>
            !state.answeredQuestions.some(
              (answered) => answered.questionID === question.id
            )
        );

        if (unansweredQuestions.length > 0) {
          // Loop through only unanswered questions
          return {
            currentQuiz: {
              ...state.currentQuiz,
              questions: unansweredQuestions,
            },
            currentIndex: 0,
            currentChoiceID: null,
          };
        } else {
          // If no unanswered questions remain, simply return the state
          return { currentIndex: 0, currentChoiceID: null };
        }
      }
      return state;
    });
  },
}));
