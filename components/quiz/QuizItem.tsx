'use client';

type QuizItemProps = {
  quiz: {
    id: string;
    title: string;
    slug: string;
  };
  onSelect: (slug: string) => void;
};

function QuizItem({ quiz, onSelect }: QuizItemProps) {
  return (
    <div
      className='p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200'
      onClick={() => onSelect(quiz.slug)} // Navigate on click
    >
      <p className='text-lg font-medium'>{quiz.title}</p>
    </div>
  );
}

export default QuizItem;
