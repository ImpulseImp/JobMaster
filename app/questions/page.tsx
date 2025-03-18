'use client';
import AccordionSection from '@/components/accordion/AccordionSection';
// import { useState } from 'react';

function QuestionsPage() {
  // const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div className='flex flex-col items-center md:flex-row gap-4 md:justify-between min-h-svh md:items-start'>
        <div className='space-y-2 max-w-xl md:max-w-80 leading-relaxed md:leading-normal'>
          <div
            aria-label='Часто задаваемые вопросы по эксплуатации электротехнического оборудования'
            className='border-2 p-3 md:p-4 lg:p-5 border-gray-200  rounded-lg shadow-md hover:bg-accent   text-center md:text-left transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent bg-background'
          >
            Часто задаваемые вопросы по эесплуатации электротехнического
            оборудования
          </div>
          <div
            aria-label='Часто задаваемые вопросы по эксплуатации гидравлического оборудования'
            className='border-2 p-3 md:p-4 lg:p-5 border-gray-200  rounded-lg shadow-md transition-colors text-center md:text-left bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] '
          >
            Часто задаваемые вопросы по эксплуатации гидравлического
            оборудования
          </div>
          <div
            aria-label='Часто задаваемые вопросы по эксплуатации теплотехнического
            оборудования'
            className='bg-background border-2 p-3 md:p-4 lg:p-5 border-gray-200  rounded-lg shadow-md hover:bg-accent  text-center md:text-left  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent  hover:cursor-pointer transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground '
          >
            Часто задаваемые вопросы по эксплуатации теплотехнического
            оборудования
          </div>
        </div>
        <AccordionSection />
      </div>
    </div>
  );
}
export default QuestionsPage;
