import { useQuizStore } from '@/store/store';
import { Button } from '../ui/button';

function QuizStartHeader() {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const currentQuiz = useQuizStore((state) => state.currentQuiz);
  return (
    <div className='flex flex-col items-center'>
      <h1>Добро пожаловать!</h1>
      <h2>Сейчас начнётся проверка ваших знаний.</h2>
      <p>
        У вас будет возможность ответить на{' '}
        <strong>{currentQuiz?.questions.length}</strong> вопросов.
      </p>
      <p>Обратите внимание: у каждого вопроса только один правильный ответ.</p>
      <p>Удачи!</p>

      <Button onClick={startQuiz}>Начать</Button>
      {/*  */}
    </div>
  );
}
export default QuizStartHeader;
