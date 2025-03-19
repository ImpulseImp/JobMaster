import { SideTopicsType } from '@/utils/types';
import { v4 as uuidv4 } from 'uuid';
function SideTopics({ navTopics }: { navTopics: SideTopicsType[] }) {
  return (
    <div className='flex flex-col max-w-sm pb-2 p-4  '>
      <ul>
        {navTopics.map((topic) => {
          return (
            <li key={uuidv4()}>
              <div className='border-b-2 border-gray-300'>
                <h3>{topic.title}</h3>
                <p>img</p>
                <p className='text-muted-foreground'>{topic.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SideTopics;
