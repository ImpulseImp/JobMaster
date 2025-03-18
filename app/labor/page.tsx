import CarouselInfo from '@/components/labor/CarouselInfo';
import LaborContent from '@/components/labor/LaborContent';
import LaborTopics from '@/components/labor/LaborTopics';

function LaborPage() {
  return (
    <div>
      {/* Carousel and sidebar Container*/}
      <div className='flex  pb-2 flex-col sm:flex-row justify-center items-center space-y-0 sm:justify-around sm:space-y-0 sm:items-start sm:space-x-4'>
        {/* border */}

        {/* Carousel */}
        <div className='flex  flex-col items-start justify-center space-y-4'>
          <div className='border-b-2 border-gray-400 pb-4 self-center'>
            <CarouselInfo />
          </div>
          {/* Content */}
          <LaborContent />
        </div>
        {/* Sidebar */}
        <div className='hidden lg:block border border-gray-500'>
          <LaborTopics />
        </div>
      </div>
      {/* some context */}
      <div className='w-full bg-red-200 my-4 p-2 px-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolor accusamus nemo, impedit consequuntur voluptates quaerat adipisci
          laborum accusantium optio corporis corrupti, blanditiis culpa
          dignissimos aperiam rerum maxime quasi libero.
        </p>
      </div>
      {/* more context */}
      <div className='flex justify-center items-center'>
        <LaborContent />
      </div>
    </div>
  );
}
export default LaborPage;
