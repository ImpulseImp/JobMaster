import CarouselInfo from '@/components/labor/CarouselInfo';

import ContentTopics from './ContentTopics';
import SideTopics from './SideTopics';
import {
  CarouselDataType,
  ContentTopicsType,
  SideTopicsType,
} from '@/utils/types';

function TopicContainer({
  navTopics,
  carouselData,
  contentTopicsData,
}: {
  navTopics: SideTopicsType[];
  carouselData: CarouselDataType[];
  contentTopicsData: ContentTopicsType[];
}) {
  return (
    <>
      {/* Carousel and sidebar Container*/}
      <div className='flex  pb-2 flex-col sm:flex-row justify-center items-center space-y-0 sm:justify-around sm:space-y-0 sm:items-start sm:space-x-4'>
        {/* Carousel */}
        <div className='flex  flex-col items-start justify-center space-y-4'>
          <div className='border-b-2 border-gray-400 pb-4 self-center'>
            <CarouselInfo carouselData={carouselData} />
          </div>
          {/* Content */}
          <ContentTopics contentTopicsData={contentTopicsData} />
        </div>
        {/* Sidebar */}
        <div className='hidden lg:block border border-gray-500'>
          <SideTopics navTopics={navTopics} />
        </div>
      </div>

      {/* more context */}
    </>
  );
}
export default TopicContainer;
