import Link from 'next/link';
import { Button } from '../ui/button';
import { ContentTopicsType } from '@/utils/types';
import { v4 as uuidv4 } from 'uuid';
function ContentTopics({
  contentTopicsData,
}: {
  contentTopicsData: ContentTopicsType[];
}) {
  return (
    <ul className='flex flex-col max-w-3xl space-y-2 md:max-w-7xl '>
      {contentTopicsData.map((content) => {
        return (
          <li key={uuidv4()}>
            <div className='p-2 border-2 border-gray-500 w-full space-y-2'>
              <div className='bg-red-200  '>
                <Button asChild>
                  <Link href={'/'}>{content.title}</Link>
                </Button>
              </div>
              <p>{content.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default ContentTopics;
