import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BestSellerContent from "./components/BestSellerContent";
// import { products } from "@/app/temporary-data/all-products/products";
import ProductCard from "@/components/custom/card/ProductCard";
import { getAllProducts } from "@/lib/api/data-service.api";

async function BestSeller() {
  const payload = await getAllProducts()
  const products = payload?.products

  const bestSeller = products?.filter((product) => product.sold > 60);
  if (bestSeller?.length === 0) return null;

  return (
    <section className=" fixed-size ">
      <div className="grid   grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6 ">
        {/* right side => content */}
        <BestSellerContent styling="" />
        {/* left side => slider  */}
        <Carousel className=" cursor-grab active:cursor-grabbing xl:col-span-2">
          <CarouselContent>
            {bestSeller?.map((product) => (
              <CarouselItem
                key={product._id}
                className=" lg:basis-1/2 xl:basis-1/3"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary-dark text-white hover:bg-primary-light-10 hover:text-white  left-0 top-[40%] sm:top-[35%] lg:top-[30%] xl:top-[35%]  " />
          <CarouselNext className="bg-primary-dark text-white hover:bg-primary-light-10 hover:text-white  right-0 top-[40%] sm:top-[35%] lg:top-[30%] xl:top-[35%] " />
        </Carousel>
      </div>
    </section>
  );
}

export default BestSeller;
