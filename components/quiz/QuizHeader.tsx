'use client';

import { QuizCategory } from '@prisma/client';
import SelectCategory from './SelectCategory';

type HeaderProps = {
  quizCategories: QuizCategory[];
  onCategorySelect: (categoryId: string) => void;
};

function QuizHeader({ quizCategories, onCategorySelect }: HeaderProps) {
  return (
    <div className='pb-6 text-2xl flex flex-col items-center border-b border-gray-400'>
      <label htmlFor='category' className='block text-lg font-semibold'>
        📝 Выберите тему для вашего экзамена
      </label>
      <SelectCategory
        id='category'
        quizCategories={quizCategories}
        onChange={onCategorySelect}
      />
    </div>
  );
}

export default QuizHeader;
