import { Quiz } from '@prisma/client';

function QuizItem({ quiz }: { quiz: Quiz }) {
  return (
    <li
      className='p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200'
      // Navigate on click
    >
      <p className='text-lg font-medium'>{quiz.title}</p>
    </li>
  );
}
export default QuizItem;
