import { FetchedQuiz } from '@/utils/types';
import { Quiz } from '@prisma/client';
import axios from 'axios';

import { create } from 'zustand';

type QuizStore = {
  quizzes: Quiz[];
  loading: boolean;
  isQuizStarted: boolean;
  currentCategoryId: string;
  currentQuiz: FetchedQuiz | null;
  categorySelect: (quizID: string) => void;
  startQuiz: () => void;
  resetQuiz: () => void;
  setCurrentQuiz: (quiz: FetchedQuiz) => void;
  skipQuestion: () => void;
  currentIndex: number;
  currentChoiceID: string | null;
  setCurrentChoice: (choiceID: string) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  currentChoiceID: null,
  isQuizStarted: false,
  currentIndex: 0,
  quizzes: [],
  loading: false,
  currentCategoryId: '',
  currentQuiz: null,
  categorySelect: async (quizID: string) => {
    set({ loading: true, currentCategoryId: quizID, isQuizStarted: false });
    try {
      const response = await axios(`/api/quizzes?categoryId=${quizID}`);
      set({ loading: false, quizzes: response.data.quizzes });
    } catch (error) {
      console.log(error);
    }
  },
  startQuiz: () => {
    set({ isQuizStarted: true });
  },
  resetQuiz: () => {
    set({ isQuizStarted: false });
  },
  setCurrentQuiz: (quiz: FetchedQuiz) => {
    set({ currentQuiz: quiz });
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
            : state.currentIndex;
        return { currentIndex: nextQuestion, currentChoiceID: null };
      }
      return state;
    });
  },
}));
