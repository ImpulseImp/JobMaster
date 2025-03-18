import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function CarouselInfo() {
  return (
    <div className='relative '>
      <Carousel
        className='w-full max-w-sm md:max-w-xl lg:max-w-lg'
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className=''>
              <div className='p-1 '>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 bg-[url('/images/background.jpg')] bg-no-repeat bg-cover rounded-lg">
                    <span className='text-4xl text-center font-semibold text-muted'>
                      Последние события {index + 1}
                    </span>
                  </CardContent>
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
