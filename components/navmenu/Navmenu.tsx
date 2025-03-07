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
                      {category.description?.map((el, idx) => {
                        return (
                          <ListItem href='/' title={el.title} key={idx}>
                            {el.text}
                          </ListItem>
                        );
                      })}
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
      {/* <NavigationMenuTrigger>Electricity</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                      href='/'
                    >
                      <Zap />
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        shadcn/ui
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/docs' title='Introduction'>
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href='/docs/installation' title='Installation'>
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href='/docs/primitives/typography' title='Typography'>
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {categories.map((category) => (
                  <ListItem
                    key={category.label}
                    title={category.label}
                    href={category.href}
                  >
                    {category.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/library' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Library
              </NavigationMenuLink>
            </Link> */}
    </div>
  );
}
export default NavMenu;

// {categories.map((category) => {
//   const Icon = category.icon;
//   return (
//     <div key={category.label}>
//       <NavigationMenuTrigger>
//         <div>
//           <Icon />
//           {category.label}
//         </div>
//       </NavigationMenuTrigger>
//       <NavigationMenuContent>
//         <NavigationMenuLink>Link</NavigationMenuLink>
//       </NavigationMenuContent>
//     </div>
//   );
// })}
