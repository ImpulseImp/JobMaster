import { Quiz } from '@prisma/client';
import Link from 'next/link';

function QuizItem({ quiz }: { quiz: Quiz }) {
  return (
    <li
      className='p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900'
      // Navigate on click
    >
      <Link href={`/labor/quiz/${quiz.slug}`}>{quiz.title}</Link>
    </li>
  );
}
export default QuizItem;
