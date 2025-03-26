'use client';

import { useState } from 'react';

type Quiz = {
  id: string;
  title: string;
  slug: string;
};

type ApiResponse = {
  quizzes: Quiz[];
};

export function useQuizManager() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadQuizzes = async (categoryId: string) => {
    if (!categoryId) {
      setError('Category ID is required');
      return;
    }

    setSelectedCategory(categoryId);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`/api/quizzes?categoryId=${categoryId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch quizzes');
      }
      const data: ApiResponse = await response.json();
      setQuizzes(data.quizzes);
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
      setQuizzes(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedCategory,
    quizzes,
    loading,
    error,
    loadQuizzes,
    resetError: () => setError(null), // Utility function to reset error
  };
}
