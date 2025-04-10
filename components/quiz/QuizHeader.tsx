import { QuizCategory } from '@prisma/client';
import SelectCategory from './SelectCategory';

type QuizHeaderProps = {
  categories: QuizCategory[];
};

function QuizHeader({ categories }: QuizHeaderProps) {
  return (
    <div className=' pb-6 text-center flex flex-col items-center '>
      <label htmlFor='category' className='block text-lg font-bold mb-3 '>
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
