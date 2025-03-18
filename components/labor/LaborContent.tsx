import { Button } from '@/components/ui/button';
import Link from 'next/link';

function LaborContent() {
  return (
    <div className='flex flex-col '>
      {/* Item 1 */}
      <div className='p-2 border-2 border-gray-500 w-full space-y-2'>
        <div className='bg-red-200  '>
          <Button asChild>
            <Link href={'/'}>Проверка знаний</Link>
          </Button>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe velit
          nam illo magni. Tempore repellat labore, placeat repellendus
          praesentium magnam nobis est reiciendis facilis? Dicta quidem odit
          natus recusandae veniam!
        </p>
      </div>
    </div>
  );
}
export default LaborContent;
