import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionType } from '@/utils/types';

function SingleAccordionSection({ question, answer, value }: SectionType) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className='text-lg font-medium hover:no-underline hover:primeTextColor '>
        {question}
      </AccordionTrigger>
      <AccordionContent className=' mt-2 pl-4'>{answer}</AccordionContent>
    </AccordionItem>
  );
}
export default SingleAccordionSection;
