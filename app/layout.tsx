import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import NavMenu from '@/components/navmenu/Navmenu';

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
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <div className='hidden  sm:flex  sm:justify-center sm:items-center '>
            <NavMenu />
          </div>
          <main className='container py-4 md:py-6'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
