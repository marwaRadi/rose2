// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SliderBackground from "./SliderBackground";
import SliderContent from "./SliderContent";

const backgroundList = [
  {
    image: "gifts-background/Background-1.png",
    content: <SliderContent />,
  },
  {
    image: "gifts-background/Background-1.png",
    content: <SliderContent />,
  },
  {
    image: "gifts-background/Background-1.png",
    content: <SliderContent />,
  },
];
function BannerSlider({ style }: { style?: string }) {
  return (
    <div className={`${style}`}>
      <Carousel className="h-full ">
        <CarouselContent className="h-full">
          {backgroundList.map((item, index) => (
            <CarouselItem key={index} className="h-full ">
              <SliderBackground url={item.image}>
                <SliderContent />
              </SliderBackground>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-[15%] bottom-6 cursor-pointer" />
        <CarouselNext className="right-[4%] sm:right-[9%] bottom-6 cursor-pointer" />
      </Carousel>
    </div>
  );
}

export default BannerSlider;
