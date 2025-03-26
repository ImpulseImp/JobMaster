import { Skeleton } from '@/components/ui/skeleton';

function LoadingPage() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='min-h-[500px] min-w-[250px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px] sm:w-3/4' />
        <Skeleton className='h-4 w-[200px] sm:w-1/2' />
      </div>
    </div>
  );
}

export default LoadingPage;
