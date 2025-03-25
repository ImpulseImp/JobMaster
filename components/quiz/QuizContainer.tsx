'use client';

import { useState } from 'react';
import { QuizCategory } from '@prisma/client';
import { Button } from '../ui/button';
import slugify from 'slugify';
import { useRouter } from 'next/navigation';

type Quiz = {
  id: string;
  title: string;
  slug: string;
};

function QuizContainer({ quizCategories }: { quizCategories: QuizCategory[] }) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);
  console.log(selectedCategory);
  const handleCategoryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);

    try {
      // Fetch quizzes via API route
      const response = await fetch(`/api/quizzes?categoryId=${categoryId}`);
      const data = await response.json();

      // Add slug to each quiz
      const quizzesWithSlugs = data.quizzes.map((quiz: Quiz) => ({
        ...quiz,
        slug: slugify(quiz.title, { lower: true, strict: true }),
      }));
      setQuizzes(quizzesWithSlugs);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      setQuizzes(null);
    }
  };
  const handleQuizSelect = (slug: string) => {
    // Navigate to the quiz page based on the slug
    router.push(`/labor/quiz/${slug}`);
  };

  return (
    <form action=''>
      <div className='border border-gray-600 rounded-lg shadow-md min-h-[500px] p-6 mt-6 bg-gray-100'>
        {/* Header */}
        <div className='pb-6 text-2xl text-center border-b border-gray-400'>
          <label htmlFor='category' className='block text-lg font-semibold'>
            📝 Выберите тему для вашего экзамена
          </label>
          <select
            id='category'
            className='border border-gray-400 rounded-lg p-3 bg-white shadow-sm focus:ring focus:ring-blue-300'
            onChange={handleCategoryChange}
          >
            <option value=''>— Выберите тему —</option>
            {quizCategories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* Quiz List */}
        <div className='flex flex-col space-y-4 bg-white shadow-sm rounded-lg p-4 border border-gray-500'>
          {quizzes ? (
            quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className='p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200'
                  onClick={() => handleQuizSelect(quiz.slug)} // Navigate on click
                >
                  <p className='text-lg font-medium'>{quiz.title}</p>
                </div>
              ))
            ) : (
              <p className='text-center text-red-500 font-medium'>
                Нет доступных экзаменов для этой категории.
              </p>
            )
          ) : (
            <p className='text-center text-gray-500'>
              Выберите категорию, чтобы увидеть доступные экзамены.
            </p>
          )}
          <div className='text-center'>
            <Button variant='default' className='w-full'>
              Начать
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default QuizContainer;
