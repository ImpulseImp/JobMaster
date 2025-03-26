import { Skeleton } from '@/components/ui/skeleton';

function LoadingPage() {
  return (
    <div className=''>
      {/* Carousel and sidebar Container*/}
      <div className='flex  pb-2 flex-col sm:flex-row justify-center items-center space-y-0 sm:justify-between sm:space-y-0 sm:items-start sm:space-x-4'>
        {/* Carousel */}
        <div className='flex  flex-col items-start justify-center space-y-4'>
          <div className='border-b-2 border-gray-400 pb-4 self-center'>
            <Skeleton className='min-h-[500px] min-w-[380px] rounded-xl sm:min-w-[500px] ' />
          </div>
          {/* Content */}
          <Skeleton className='min-h-[110px] min-w-[380px] rounded-xl sm:min-w-[920px] ' />
          <Skeleton className='min-h-[110px] min-w-[380px] rounded-xl sm:min-w-[920px] ' />
          <Skeleton className='min-h-[110px] min-w-[380px] rounded-xl sm:min-w-[920px] ' />
        </div>
        {/* Sidebar */}
        <div className='hidden lg:block '>
          <Skeleton className='min-h-[650px] min-w-[380px] rounded-xl sm:min-w-[270px] ' />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
