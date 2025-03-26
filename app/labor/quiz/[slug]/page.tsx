import QuizInteraction from '@/components/quiz/QuizInteraction';
import prisma from '@/utils/db';

export default async function QuizPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch quiz data on the server
  const quiz = await prisma.quiz.findFirst({
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
    return <p className='text-center mt-6'>Экзамен не найден.</p>;
  }

  // Pass the quiz data to the client component
  return <QuizInteraction quiz={quiz} />;
}
