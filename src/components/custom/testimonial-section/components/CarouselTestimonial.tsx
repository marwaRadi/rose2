"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Customer from "./Customer";
import { useApiCarousel } from "@/hooks/useApiCarousel";
import CarouselDots from "./CarouselDots";

//  temporary data
const customerTestimonial = [
  {
    name: "ashe Mohamed",
    image: "https://i.pravatar.cc/48?u=933372",
    review:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rating: 5,
  },
  {
    name: "rowan ahmed",
    image: "https://i.pravatar.cc/48?u=936372",
    review:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rating: 5,
  },
  {
    name: "ahmed mohamed",
    image: "https://i.pravatar.cc/48?u=953373",
    review:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rating: 5,
  },
  {
    name: "nada omar",
    image: "https://i.pravatar.cc/48?u=933377",
    review:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rating: 5,
  },
];

function CarouselTestimonial() {
  const { setApi, current, count } = useApiCarousel();
  // console.log('from parent com',count)
  return (
    <Carousel setApi={setApi} className=" active:cursor-grabbing">
      <CarouselContent>
        {customerTestimonial.map((info, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Customer customerInfo={info} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary-dark text-white hover:bg-primary-light-10 hover:text-white -left-10 top-[45%]" />
      <CarouselNext className="bg-primary-dark text-white hover:bg-primary-light-10 hover:text-white -right-10 top-[45%]" />
      {count > 0 && <CarouselDots current={current} count={count} />}
    </Carousel>
  );
}

export default CarouselTestimonial;
