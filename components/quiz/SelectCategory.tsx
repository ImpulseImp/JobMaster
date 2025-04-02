'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQuizStore } from '@/store/store';
import { QuizCategory } from '@prisma/client';

type SelectCategoryProps = {
  categories: QuizCategory[];
};

function SelectCategory({ categories }: SelectCategoryProps) {
  const categorySelect = useQuizStore((state) => state.categorySelect);
  const categoryID = useQuizStore((state) => state.currentCategoryId);
  const loading = useQuizStore((state) => state.loading);
  const currentCategoryId = useQuizStore((state) => state.currentCategoryId);
  console.log(currentCategoryId);
  return (
    <Select onValueChange={categorySelect} value={categoryID}>
      <SelectTrigger className='w-[200px] ' disabled={loading}>
        <SelectValue placeholder='— Выберите тему —' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Список тем</SelectLabel>
          {categories?.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              <p onClick={() => {}}>{category.title}</p>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectCategory;
