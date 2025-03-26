import { Skeleton } from '@/components/ui/skeleton';

function LoadingPage() {
  return (
    <div className='container '>
      <div className='flex justify-center space-x-4'>
        {/* left */}
        <div>
          {/* Image Container */}
          <div className='flex flex-col space-y-3 border-b-2 border-gray-400 pb-4 max-w-fit mx-auto'>
            <Skeleton className='min-h-[350px] min-w-[380px] rounded-xl' />
          </div>
          <div className=''>
            <div className='mt-4 flex flex-col space-y-3 items-center'>
              <Skeleton className='min-h-[150px] min-w-[380px] rounded-xl sm:min-w-[550px] ' />
            </div>
            <div className='mt-4 flex flex-col space-y-3 items-center'>
              <Skeleton className='min-h-[150px] min-w-[380px] rounded-xl sm:min-w-[550px] ' />
            </div>
            <div className='mt-4 flex flex-col space-y-3 items-center'>
              <Skeleton className='min-h-[150px] min-w-[380px] rounded-xl sm:min-w-[550px] ' />
            </div>
          </div>
        </div>
        {/* right */}
        <div>
          <Skeleton className='hidden sm:inline-block min-h-[650px] min-w-[280px] rounded-xl  ' />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
