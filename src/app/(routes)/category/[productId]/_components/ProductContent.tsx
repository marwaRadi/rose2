import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";
import Counter from "@/components/common/counter/Counter";
import AddToCartBtn from "@/components/custom/add-to-cart-btn/AddToCartBtn";
import { getCategoryNameById } from "@/lib/utils/helper";
import { Heart } from "lucide-react";

type ProductContent = {
  product: Product;
};

async function ProductContent({ product }: ProductContent) {
  //=====================================================================

  const {
    id,
    title,
    description,
    price,
    priceAfterDiscount,
    quantity,
    discount,
    category,
  } = product;

  const [{ name: categoryName }] = await getCategoryNameById(category);
  //======================================================================
  return (
    <div>
      {/* product content */}
      <div className="capitalize grid gap-3 xl:w-[80%] lg:ml-[10%] lg:w-3/4">
        <h2 className="text-[clamp(1.5rem,2vw,2.5rem)]">{title}</h2>
        <p>
          {priceAfterDiscount ? (
            <>
              <span className="line-through text-[18px]">${price}</span>
              <span className="text-[20px] text-primary-dark mx-2">
                ${priceAfterDiscount}
              </span>
              <span className="text-[15px] text-red-500">{discount}% off</span>
            </>
          ) : (
            <span className="text-[20px] text-primary-dark">${price}</span>
          )}
        </p>
        <p className="xl:w-[80%]">{description}</p>
        {/* quantity */}
        <div className="space-y-2">
          <p>quantity</p>
          <Counter />
        </div>
        {/* product info */}
        <ul >
          <li>
            <p>
              stock:{" "}
              <span className="ml-1">
                {quantity > 0 ? "in stock" : "out of stock"}
              </span>
            </p>
          </li>
          <li>
            <p>category : {categoryName}</p>{" "}
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <AddToCartBtn id={id} type="regular" />
          <CircleBgIcon padding="p-2">
            <Heart />
          </CircleBgIcon>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
