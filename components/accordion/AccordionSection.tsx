import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function AccordionSection() {
  return (
    <div>
      <h1>
        Часто задаваемые вопросы по эксплуатации электротехнического
        оборудования
      </h1>

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            Можно ли применять провод ПBC для устройства электропроводки дома,
            дачи, хозяйственных построек?
          </AccordionTrigger>
          <AccordionContent>
            Согласно п. 2.1.48 «Правил устройства электроустановок» (6- издание)
            провода и кабели должны применяться лишь в тех областях, которые
            указаны в стандартах и технических условиях на кабели (провода). В
            Приложении А «Преимущественные области применения проводов и шнуров»
            ГОСТ 7399 «Провода и шнуры на номинальное напряжение до 450/750 В»
            указано, что провод марки ПВС, ПВСП применяется для присоединения
            электроприборов и электроинструмента по уходу за жилищем и его
            ремонту, стиральных машин, холодильников, средств малой механизации
            для садоводства и огородничества и других подобных машин и приборов,
            и для изготовления удлинительных шнуров. С учетом вышеперечисленных
            требований THПA к области применения провода ПBC, можно сделать
            вывод о недопустимости его применения для устройства стационарной
            электропроводки помещений.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default AccordionSection;
