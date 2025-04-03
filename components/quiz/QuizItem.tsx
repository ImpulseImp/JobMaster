import { useQuizStore } from '@/store/store';
import { Quiz } from '@prisma/client';
import Link from 'next/link';

function QuizItem({ quiz }: { quiz: Quiz }) {
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  return (
    <li
      className='p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200'
      // Navigate on click
    >
      <Link href={`/labor/quiz/${quiz.slug}`} onClick={resetQuiz}>
        {quiz.title}
      </Link>
    </li>
  );
}
export default QuizItem;
