import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { categories } from '@/utils/categories';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

function NavMenu() {
  return (
    <div className='flex gap-4 items-center py-10'>
      {categories.map((category) => {
        const Icon = category.icon;
        return category.trigger ? (
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href={category.href}>
                      <div className='flex flex-col items-center justify-center gap-y-2'>
                        <Icon />
                        {category.label}
                      </div>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                      {category.navLink && (
                        <li className='row-span-4'>
                          <NavigationMenuLink asChild>
                            <Link
                              className='flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                              href='/'
                            >
                              <div className='mb-2 mt-4 text-lg font-medium'>
                                {category.navLink.title}
                              </div>
                              <p className='text-sm leading-tight text-muted-foreground'>
                                {category.navLink.text}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {category.description?.map(
                        ({ title, text, href }, idx) => {
                          return (
                            <ListItem href={href} title={title} key={idx}>
                              {text}
                            </ListItem>
                          );
                        }
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        ) : (
          <div key={category.label}>
            <NavigationMenu>
              <NavigationMenuItem className='list-none'>
                <Link href={category.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} `}
                  >
                    <div className='flex flex-col items-center justify-center gap-y-2'>
                      <Icon />
                      {category.label}
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
        );
      })}
    </div>
  );
}
export default NavMenu;
