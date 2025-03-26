import { create } from 'zustand';

type QuizState = {
  currentQuestionIndex: number; // Tracks the current question
  selectedAnswers: Record<string, string | null>; // Stores selected answers
  skippedQuestions: string[]; // Tracks skipped question IDs
  answeredCount: number; // Counts how many questions have been answered

  // Actions
  selectAnswer: (questionId: string, optionId: string) => void; // Select an answer
  skipQuestion: (questionId: string) => void; // Skip a question
  incrementAnsweredCount: () => void; // Increment count of answered questions
  moveToNextQuestion: (totalQuestions: number) => void; // Move to the next question
  resetQuiz: () => void; // Reset all quiz states to default
};

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestionIndex: 0, // Initial question index
  selectedAnswers: {}, // Initially no answers selected
  skippedQuestions: [], // Initially no skipped questions
  answeredCount: 0, // Initially no questions answered

  // Select an answer for a question
  selectAnswer: (questionId, optionId) =>
    set((state) => ({
      selectedAnswers: { ...state.selectedAnswers, [questionId]: optionId }, // Update answer
    })),

  // Skip the current question
  skipQuestion: (questionId) =>
    set((state) => ({
      skippedQuestions: [...state.skippedQuestions, questionId], // Add to skipped list
    })),

  // Increment the answered questions count
  incrementAnsweredCount: () =>
    set((state) => ({
      answeredCount: state.answeredCount + 1, // Increment count
    })),

  // Move to the next question or revisit skipped questions
  moveToNextQuestion: (totalQuestions) =>
    set((state) => {
      const nextIndex = state.currentQuestionIndex + 1;

      if (nextIndex < totalQuestions) {
        // If there are more questions, move to the next
        return { currentQuestionIndex: nextIndex };
      } else if (state.skippedQuestions.length > 0) {
        // If no more questions, loop back to skipped ones
        const nextSkippedQuestionId = state.skippedQuestions[0];
        const remainingSkippedQuestions = state.skippedQuestions.slice(1);
        return {
          currentQuestionIndex: 0,
          skippedQuestions: remainingSkippedQuestions,
        };
      }

      return state; // No-op if no questions remain
    }),

  // Reset the quiz states to their defaults
  resetQuiz: () => ({
    currentQuestionIndex: 0, // Reset to first question
    selectedAnswers: {}, // Clear all selected answers
    skippedQuestions: [], // Clear skipped questions
    answeredCount: 0, // Reset answered count
  }),
}));
