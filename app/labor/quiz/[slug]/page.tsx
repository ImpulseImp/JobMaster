import prisma from '@/utils/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz Page',
  description: 'Take a quiz and test your knowledge!',
};

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

interface Quiz {
  title: string;
  description: string | null;
  questions: Question[];
}

interface QuizPageProps {
  params: {
    slug: string;
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = params;

  // Fetch the quiz data
  const quiz: Quiz | null = await prisma.quiz.findUnique({
    where: { slug },
    include: {
      questions: {
        include: {
          options: true,
        },
      },
    },
  });

  if (!quiz) {
    return <p>Викторина не найдена.</p>;
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>{quiz.title}</h1>
      <p className='mb-4'>{quiz.description}</p>
      <form method='post' action={`/quiz/${slug}/submit`}>
        {quiz.questions.map((question) => (
          <div key={question.id} className='mb-6'>
            <h3 className='text-lg font-semibold'>{question.text}</h3>
            {question.options.map((option) => (
              <div key={option.id}>
                <input
                  type='radio'
                  id={option.id}
                  name={question.id}
                  value={option.text}
                  className='mr-2'
                />
                <label htmlFor={option.id}>{option.text}</label>
              </div>
            ))}
          </div>
        ))}
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 mt-4'>
          Завершить тест
        </button>
      </form>
    </div>
  );
}
