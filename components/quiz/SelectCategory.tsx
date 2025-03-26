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
import { QuizCategory } from '@prisma/client';

function SelectCategory({
  id,
  quizCategories,
  onChange,
}: {
  id: string;
  quizCategories: QuizCategory[];
  onChange: (value: string) => void;
}) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className='w-[180px]' id={id}>
        <SelectValue placeholder='— Выберите тему —' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Список тем</SelectLabel>
          {quizCategories?.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectCategory;
