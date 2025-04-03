import QuizContainer from '@/components/quiz/QuizContainer';
import QuizStart from '@/components/quiz/QuizStart';
import prisma from '@/utils/db';

async function QuizPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  // console.log(slug);
  // const quiz = await prisma.quiz.findFirst({
  //   where: {
  //     slug,
  //   },
  // });
  const quiz = await prisma.quiz.findUnique({
    where: { slug },
    include: {
      questions: {
        include: { options: true }, // Fetch options for each question
      },
    },
  });
  console.log(quiz);

  return (
    <QuizContainer>
      <div className='text-center text-gray-800'>
        <h1 className='text-3xl font-extrabold'>{quiz?.title}</h1>
        <p className='text-sm text-gray-500 mt-2'>
          Подготовьтесь к проверке знаний!
        </p>
      </div>
      <div className='flex flex-col items-center mt-10'>
        {quiz && <QuizStart quiz={quiz} />}
      </div>
    </QuizContainer>
  );
}

export default QuizPage;
