import Image from "next/image";
import RatingStar from "../../common/rating-star/RatingStar";
import RevealOnScroll from "../../common/animation/RevealOnScroll";
import Link from "next/link";
import AddToCartBtn from "../add-to-cart-btn/AddToCartBtn";
import { formatPrice } from "@/_utils/helper";

type ProductCardProps = {
  product: Product;
  priority?:boolean
};

function ProductCard({ product, priority }: ProductCardProps) {
  const { id, imgCover, title, priceAfterDiscount, price, rateAvg, quantity } =
    product;
  const productName = product.title.split("|")[0];
  const isValid = quantity > 0;
  //==========================================================================
  return (
    <RevealOnScroll>
      <div className={`space-y-2 ${isValid ? "" : "grayscale"}`}>
        {/* product image */}
        <Link aria-label="product" href={`/category/${id}`}>
          <div className="relative transition-all duration-300 aspect-square  sm:aspect-[4/3] group overflow-hidden main-rounded">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={imgCover}
              alt={title}
              className={`object-cover `}
              priority={priority}
            />
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
              <AddToCartBtn
                type="circle"
                id={id}
                key={id}
                isQuantityValid={isValid}
              />
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}


export default ProductCard;
