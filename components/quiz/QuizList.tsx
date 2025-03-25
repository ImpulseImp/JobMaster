'use client';

import { useState } from 'react';
import { QuizCategory } from '@prisma/client';

interface Quiz {
  id: string;
  title: string;
}

function QuizContainer({ quizCategories }: { quizCategories: QuizCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);

  const handleCategoryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);

    try {
      // Fetch quizzes via API route
      const response = await fetch(`/api/quizzes?categoryId=${categoryId}`);
      const data = await response.json();
      setQuizzes(data.quizzes);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      setQuizzes(null);
    }
  };

  return (
    <div className='border-2 border-gray-500 min-h-[500px] p-4 mt-4'>
      <div className='flex flex-col space-y-4'>
        <div className='space-x-4 pb-4 text-xl text-center border-b border-gray-300'>
          <label htmlFor='category'>Выберите тему</label>
          <select
            id='category'
            className='border border-gray-300 rounded-md p-2'
            onChange={handleCategoryChange}
          >
            <option value=''>Select a Category</option>
            {quizCategories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* Inner Content */}
        <div className='flex flex-col space-y-2 border border-black p-2'>
          {quizzes ? (
            quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <div key={quiz.id} className='p-2 border-b border-gray-300'>
                  <p>{quiz.title}</p>
                </div>
              ))
            ) : (
              <p>No quizzes available for this category.</p>
            )
          ) : (
            <p>Please select a category to view quizzes.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizContainer;
