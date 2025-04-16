import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import BestSellerContent from "./components/BestSellerContent"
import { products } from "@/app/temporary-data/all-products/products";
import ProductCard from "@/components/common/card/ProductCard";

function BestSeller() {
  const bestSeller = products.filter((product) => product.sold > 100);
  if(bestSeller.length === 0) return null
  return (
    <div className=" ">
      <BestSellerContent />
      {/* left side =>   */}
      <Carousel>
        <CarouselContent>
          {bestSeller.map(product => <CarouselItem key={product._id} className="">
            <ProductCard product={product} />
          </CarouselItem>)}
          

        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default BestSeller
