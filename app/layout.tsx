import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import NavMenu from '@/components/navmenu/Navmenu';
import Footer from '@/components/footer/Footer';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedOut,
  SignOutButton,
  SignedIn,
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Created By Impulse',
  description:
    'Streamline your workflow and manage all processes in one place with ease. Discover tools and solutions designed for ultimate productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <header className='container flex justify-end space-x-4   py-4 md:py-6'>
              <SignedOut>
                <Button asChild>
                  <SignInButton />
                </Button>
                <Button asChild>
                  <SignUpButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <Button asChild>
                  <SignOutButton />
                </Button>
              </SignedIn>
            </header>
            <Navbar />
            <div className='hidden  sm:flex  sm:justify-center sm:items-center '>
              <NavMenu />
            </div>
            <main className='container py-4 md:py-6'>{children}</main>
            <footer className='container py-4 md:py-6'>
              <Footer />
            </footer>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
