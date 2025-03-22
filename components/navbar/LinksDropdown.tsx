'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import { links } from '@/utils/links';
import { LucideAlignLeft } from 'lucide-react';
import DarkMode from '@/components/navbar/DarkMode';
import { useState } from 'react';

import { LogOut } from 'lucide-react';

function LinksDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LucideAlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem
              key={link.href}
              onClick={() => {
                console.log('Profile clicked');
                setOpen(false); // Closes the dropdown
              }}
            >
              <Link href={link.href} className='capitalize w-full'>
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DarkMode />

        <SignedIn>
          <div className='cursor-pointer relative flex justify-between mt-2  cursor-default select-none  rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent'>
            <SignOutButton />
            <LogOut className='w-4 h-4' />
          </div>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
