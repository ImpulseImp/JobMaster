import { Button } from '../ui/button';

function QuizContainer() {
  return (
    // Quiz Container
    <div className='border-2 border-gray-500 min-h-[500px] p-4 mt-4'>
      {/* Inner Container */}
      <div className='flex flex-col space-y-4'>
        {/* Choose Topic */}
        <div className='space-x-4 pb-4 text-xl text-center border-b border-gray-300'>
          <label htmlFor='topic'>Выберите тему</label>
          <select
            name=''
            id=''
            className='border border-primary outline-none rounded-md p-2'
          >
            <option value='1'>электрика</option>
            <option value='1'>гидравлика</option>
          </select>
        </div>

        {/* Inner Content */}
        <div className='flex flex-col space-y-2 border border-black p-2'>
          <div>
            <p>Список экзаменов</p>
          </div>
          <div>
            <Button variant='default'>Ок</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizContainer;
