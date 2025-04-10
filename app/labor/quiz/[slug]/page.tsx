import QuizContainer from '@/components/quiz/QuizContainer';
import QuizStart from '@/components/quiz/QuizStart';
import prisma from '@/utils/db';

type QuizPageProps = {
  params: Promise<{ slug: string }>;
};

async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const quiz = await prisma.quiz.findUnique({
    where: { slug },
    include: {
      questions: {
        include: { options: true }, // Fetch options for each question
      },
    },
  });
  return (
    <QuizContainer>
      <div className='text-center '>
        <h1 className='text-3xl font-extrabold'>{quiz?.title}</h1>
        <p className='text-sm  mt-2'>Подготовьтесь к проверке знаний!</p>
      </div>
      <div className='flex flex-col items-center mt-10'>
        {quiz && <QuizStart quiz={quiz} />}
      </div>
    </QuizContainer>
  );
}

export default QuizPage;
