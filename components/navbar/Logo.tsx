import { Activity } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href={'/'}>
        <Activity />
      </Link>
    </Button>
  );
}
export default Logo;
