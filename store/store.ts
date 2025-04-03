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
};

export const useQuizStore = create<QuizStore>((set) => ({
  isQuizStarted: false,
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
  skipQuestion: () => {},
}));
