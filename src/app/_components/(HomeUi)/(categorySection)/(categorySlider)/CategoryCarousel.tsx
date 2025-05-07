import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getAllCategories } from "@/lib/api/data-service.api";
import CategoryCard from "./CategoryCard";

// *****************get all categories***********************
const categories = await getAllCategories();

export function CategoryCarousel() {
  return (
    <div className="mb-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className=" cursor-grab active:cursor-grabbing"
      >
        <CarouselContent>
          {categories?.map((category) => (
            <CarouselItem
              key={category._id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5 "
            >
              <CategoryCard category={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
