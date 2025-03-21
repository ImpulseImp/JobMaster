'use client';

import * as React from 'react';
import { Moon, Sun, MonitorCog } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className='flex justify-between items-center px-2 '>
      <h3 className='text-sm leading-5'>Тема</h3>
      <div>
        <Button variant='outline' size='icon' onClick={() => setTheme('light')}>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100' />
        </Button>
        <Button onClick={() => setTheme('dark')} variant='outline' size='icon'>
          <Moon className=' h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100 ' />
        </Button>
        <Button
          variant='outline'
          size='icon'
          onClick={() => setTheme('system')}
        >
          <MonitorCog className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  dark:scale-100' />
        </Button>
      </div>
    </div>
  );
}
export default ModeToggle;
