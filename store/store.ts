import { Quiz } from '@prisma/client';
import axios from 'axios';

import { create } from 'zustand';

type QuizStore = {
  quizzes: Quiz[];
  loading: boolean;
  currentCategoryId: string;
  quizSelect: (quizID: string) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  quizzes: [],
  loading: false,
  currentCategoryId: '',

  quizSelect: async (quizID: string) => {
    set({ loading: true, currentCategoryId: quizID });

    const response = await axios(`/api/quizzes?categoryId=${quizID}`);

    set({ loading: false, quizzes: response.data.quizzes });
  },
}));
