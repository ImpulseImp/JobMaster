import prisma from '@/utils/db';

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await params here

  // Query the quiz using its unique slug
  const quiz = await prisma.quiz.findFirst({
    where: { slug }, // Directly match the slug field in your database
    include: {
      questions: {
        include: {
          options: true, // Include question options
        },
      },
    },
  });

  if (!quiz) {
    return <p className='text-center mt-6'>Экзамен не найден.</p>;
  }

  return (
    <div className='p-6'>
      <h1 className='text-center text-3xl font-bold'>{quiz.title}</h1>
      <form method='post' action={`/api/quiz/${slug}/submit`}>
        {quiz.questions.map((question) => (
          <div
            key={question.id}
            className='p-4 mt-4 border border-gray-300 rounded-md shadow-sm'
          >
            <h3 className='text-lg font-semibold'>{question.text}</h3>
            {question.options.map((option) => (
              <div key={option.id} className='flex items-center mt-2'>
                <input
                  type='radio'
                  id={option.id}
                  name={question.id}
                  value={option.id}
                  className='mr-2'
                />
                <label htmlFor={option.id}>{option.text}</label>
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}
