import { Skeleton } from '@/components/ui/skeleton';

function LoadingPage() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='min-h-[500px] min-w-[250px] rounded-xl' />
    </div>
  );
}

export default LoadingPage;
