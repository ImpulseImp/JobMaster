import { FetchedQuiz } from '@/utils/types';
import { Quiz } from '@prisma/client';
import axios from 'axios';
import { create } from 'zustand';

type QuizStore = {
  quizzes: Quiz[];
  loading: boolean;
  quizStatus: 'inactive' | 'loading' | 'ready' | 'active' | 'finished';

  currentCategoryId: string;
  currentQuiz: FetchedQuiz | null;
  currentIndex: number;
  currentChoiceID: string | null;
  answeredQuestionsIDs: string[];

  categorySelect: (quizID: string) => void;
  startQuiz: () => void;
  resetQuiz: () => void;
  setCurrentQuiz: (quiz: FetchedQuiz) => void;
  skipQuestion: () => void;
  setCurrentChoice: (choiceID: string) => void;
  addAnsweredQuestionIDs: (questionID: string) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  quizStatus: 'inactive',
  currentChoiceID: null,
  currentIndex: 0,
  quizzes: [],
  answeredQuestionsIDs: [],
  loading: false,
  currentCategoryId: '',
  currentQuiz: null,

  categorySelect: async (quizID: string) => {
    set({
      quizStatus: 'loading',
      currentCategoryId: quizID,
    });
    try {
      const response = await axios(`/api/quizzes?categoryId=${quizID}`);
      set({ quizStatus: 'ready', quizzes: response.data.quizzes });
    } catch (error) {
      console.log(error);
    }
  },

  startQuiz: () => {
    set({ quizStatus: 'active' });
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
    set({ currentQuiz: quiz, quizStatus: 'ready' });
  },

  setCurrentChoice: (choiceID: string) => {
    set({ currentChoiceID: choiceID });
  },

  skipQuestion: () => {
    set((state) => {
      if (state.currentQuiz) {
        const nextQuestion =
          state.currentIndex < state.currentQuiz.questions.length - 1
            ? state.currentIndex + 1
            : 0;
        return { currentIndex: nextQuestion, currentChoiceID: null };
      }
      return state;
    });
  },
  addAnsweredQuestionIDs: (questionID: string) => {
    set((state) => {
      return {
        answeredQuestionsIDs: [...state.answeredQuestionsIDs, questionID],
      };
    });
  },
}));
