import { QuizCategory } from '@prisma/client';
import SelectCategory from './SelectCategory';

type QuizHeaderProps = {
  categories: QuizCategory[];
};

function QuizHeader({ categories }: QuizHeaderProps) {
  return (
    <div className='primeTextColor pb-6 text-2xl flex flex-col items-center border-b border-gray-400'>
      <label htmlFor='category' className='block  text-lg font-semibold'>
        📝 Выберите тему для вашего экзамена
      </label>
      <SelectCategory
        categories={categories}
        // onChange={onCategorySelect}
      />
    </div>
  );
}
export default QuizHeader;
