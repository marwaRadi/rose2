import Image from "next/image";
import RatingStar from "../../common/rating-star/RatingStar";
import RevealOnScroll from "../../common/animation/RevealOnScroll";
import Link from "next/link";
import AddToCartBtn from "../add-to-cart-btn/AddToCartBtn";
import { formatPrice } from "@/_utils/helper";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { id, imgCover, title, priceAfterDiscount, price, rateAvg } = product;
  const productName = product.title.split("|")[0];
  return (
    <RevealOnScroll>
      <div className=" space-y-2 ">
        {/* product image */}
        <Link href={`/category/${id}`}>
          <div className="relative transition-all duration-300 aspect-square  sm:aspect-[4/3] group overflow-hidden main-rounded">
            <Image
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 100vw"
              src={imgCover}
              alt={title}
              className="object-cover"
            />
            {/* overlay */}
            {/*       
          <div className="group-hover:translate-y-0 group-focus:translate-y-0 group-focus:opacity-100  opacity-0 hover:opacity-100 duration-300 transition-colors translate-y-full w-full h-full absolute top-o left-0 transform  bg-primary-light-40/50   transition-transform ease-in-out flex justify-center items-center gap-4">
            <Link href={`/category/${id}`}>
              <CircleBgIcon padding="p-1">
                <EyeIcon />
              </CircleBgIcon>
            </Link>

            <CircleBgIcon padding="p-1">
              <Heart />
            </CircleBgIcon>
          </div> */}
          </div>
        </Link>

        {/* product info */}
        <div className="flex flex-col justify-between gap-2 ">
          <h5 className="">{productName}</h5>
          <div className="flex justify-between ">
            {/* price */}
            <div className="space-y-1">
              <RatingStar rate={rateAvg} />
              <p className="text-red-500">
                {priceAfterDiscount && priceAfterDiscount > 0 ? (
                  <>
                    <span>{formatPrice({ price: priceAfterDiscount })}</span>{" "}
                    <span className="text-gray-300 line-through">
                      {formatPrice({ price })}
                    </span>
                  </>
                ) : (
                  <span>{formatPrice({ price })}</span>
                )}
              </p>
            </div>
            {/* cart */}
            <div className="flex">
              <AddToCartBtn type="circle" id={id} key={id} />
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}


export default ProductCard;
