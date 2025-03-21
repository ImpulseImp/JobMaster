'use client';
import AccordionSection from '@/components/accordion/AccordionSection';
import SelectSection from '@/components/accordion/SelectSection';

import data from '@/data/FrequentlyAskedQuestions.json';
import { useMemo, useState } from 'react';
function QuestionsPage() {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const topics = useMemo(() => Object.keys(data), []);

  const onSelect = (num: number) => {
    setSelectedTopic(num);
  };

  return (
    <div>
      <div className='flex flex-col items-center md:flex-row gap-4 md:justify-between min-h-svh md:items-start'>
        <div className='space-y-2 max-w-xl md:max-w-80 leading-relaxed md:leading-normal'>
          {topics.map((_, idx) => {
            return (
              <SelectSection
                key={idx}
                topic={data[idx].title}
                sectionIdx={idx}
                onSelect={onSelect}
                selectedTopic={selectedTopic}
              />
            );
          })}
        </div>
        <AccordionSection section={data[selectedTopic]} />
      </div>
    </div>
  );
}
export default QuestionsPage;
