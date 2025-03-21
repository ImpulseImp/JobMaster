import { Accordion } from '@/components/ui/accordion';
import SingleAccordionSection from './SingleAccordionSection';
// import { SectionType } from '@/utils/types';
import { v4 as uuidv4 } from 'uuid';
type AccordionSectionProps = {
  section: {
    title: string;
    data: QuestionAnswer[];
  };
};

type QuestionAnswer = {
  question: string;
  answer: string;
  value: string;
};

function AccordionSection({ section }: AccordionSectionProps) {
  console.log(section);
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>
        Часто задаваемые вопросы по {section.title}
      </h1>

      <Accordion type='single' collapsible className='max-w-4xl'>
        {section.data.map((section) => {
          return (
            <SingleAccordionSection
              question={section.question}
              answer={section.answer}
              value={section.value}
              key={uuidv4()}
            />
          );
        })}
      </Accordion>
    </div>
  );
}
export default AccordionSection;
