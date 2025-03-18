import CarouselInfo from '@/components/labor/CarouselInfo';

function LaborPage() {
  return (
    <div className='px-6'>
      {/* Slider and sidebar Container*/}
      <div className='flex border-b-2 border-gray-200 flex-col sm:flex-row justify-center items-center space-y-8 sm:justify-around sm:space-y-0 sm:items-start sm:space-x-4'>
        {/* Slider */}
        <CarouselInfo />
        {/* Sidebar */}
        <div className='flex flex-col max-w-sm '>
          {/* Item 1 */}
          <div className='border-b-2 border-gray-300'>
            <p>element 1</p>
            <p>img</p>
            <h3>Должностные инструкции</h3>
            <p className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              deleniti reprehenderit dolorem itaque quis minima a ex facilis
              quasi quo? Voluptas nemo assumenda quod eius, nulla similique iste
              nihil obcaecati!
            </p>
          </div>
          {/* Item 2 */}
          <div className='border-b-2 border-gray-300'>
            <p>element 2</p>
            <p>img</p>
            <h3>Образцы документов</h3>
            <p className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ipsum aperiam eius id voluptas vero numquam nemo maxime
              reprehenderit expedita quibusdam ipsam, explicabo sapiente! Non
              nisi eius magnam saepe repudiandae?
            </p>
          </div>
          {/* Item 3 */}
          <div className='border-b-2 border-gray-300'>
            <p>element 3</p>
            <p>img</p>
            <h3>Пройти экзамен</h3>
            <p className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos
              obcaecati ut magnam nam corrupti perspiciatis quis velit vitae
              consequatur minima sit quo pariatur amet eaque ipsa, quas, nemo
              maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LaborPage;
