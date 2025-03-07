import { Activity } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

function Logo() {
  return (
    <div>
      <Button size='icon' asChild>
        <Link href={'/'}>
          <Activity />
        </Link>
      </Button>
    </div>
  );
}
export default Logo;
