import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CarouselDataType } from '@/utils/types';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

function CarouselInfo({ carouselData }: { carouselData: CarouselDataType[] }) {
  return (
    <div className='relative'>
      <Carousel
        className='w-full max-w-sm md:max-w-xl lg:max-w-lg'
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        {/*  className="flex aspect-square items-center justify-center p-6 bg-no-repeat bg-cover rounded-lg"
                    style={{
                      backgroundImage: `url(${item.url || '/images/background.jpg'})`,
                    }} */}
        <CarouselContent>
          {carouselData.map((item) => (
            <CarouselItem key={uuidv4()} className=''>
              <div className='p-1'>
                <Card>
                  <Link href={item.url}>
                    <CardContent
                      className='flex aspect-square items-center justify-center p-6 bg-no-repeat bg-cover rounded-lg'
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    >
                      <span className='text-4xl text-center font-semibold text-card-foreground'>
                        {item.text}
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute top-10 left-6' />
        <CarouselNext className='absolute top-10 right-6' />
      </Carousel>
    </div>
  );
}
export default CarouselInfo;
