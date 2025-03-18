import CarouselInfo from '@/components/labor/CarouselInfo';
import LaborContent from '@/components/labor/LaborContent';
import LaborTopics from '@/components/labor/LaborTopics';

function LaborPage() {
  return (
    <div className='px-6 space-y-6'>
      {/* Carousel and sidebar Container*/}
      <div className='flex  pb-2 flex-col sm:flex-row justify-center items-center space-y-8 sm:justify-around sm:space-y-0 sm:items-start sm:space-x-4'>
        {/* border */}
        <div></div>
        {/* Carousel */}
        <div className='flex flex-col items-start justify-center space-y-4  '>
          <div className='border-b-2 border-gray-400 pb-4'>
            <CarouselInfo />
          </div>
          {/* Content */}
          <LaborContent />
        </div>
        {/* Sidebar */}
        <LaborTopics />
      </div>
    </div>
  );
}
export default LaborPage;
