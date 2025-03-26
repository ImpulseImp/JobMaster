import { Skeleton } from '@/components/ui/skeleton';

function LoadingPage() {
  return (
    <>
      {/* Carousel and sidebar Container*/}
      <div className='flex  pb-2 flex-col sm:flex-row justify-center items-center space-y-0 sm:justify-around sm:space-y-0 sm:items-start sm:space-x-4'>
        {/* Carousel */}
        <div className='flex  flex-col items-start justify-center space-y-4'>
          <div className='border-b-2 border-gray-400 pb-4 self-center'>
            <div className='mt-4 flex flex-col space-y-3 items-center'>
              <Skeleton className='min-h-[500px] min-w-[380px] rounded-xl sm:min-w-[500px] ' />
            </div>
          </div>
          {/* Content */}
          <div className='mt-4 flex flex-col space-y-3 items-center'>
            <Skeleton className='min-h-[130px] min-w-[380px] rounded-xl sm:min-w-[750px] ' />
          </div>
          <div className='mt-4 flex flex-col space-y-3 items-center'>
            <Skeleton className='min-h-[130px] min-w-[380px] rounded-xl sm:min-w-[750px] ' />
          </div>
          <div className='mt-4 flex flex-col space-y-3 items-center'>
            <Skeleton className='min-h-[130px] min-w-[380px] rounded-xl sm:min-w-[750px] ' />
          </div>
        </div>
        {/* Sidebar */}
        <div className='hidden lg:block '>
          <div className='mt-4 flex flex-col space-y-3 items-center'>
            <Skeleton className='min-h-[650px] min-w-[380px] rounded-xl sm:min-w-[220px] ' />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
