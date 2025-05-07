import ProductCard from "@/components/custom/card/ProductCard";
import { getAllProducts } from "@/lib/api/data-service.api";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getShuffleArray } from "../../utils/helper";

async function RelatedProducts({
  productInfo,
}: {
  productInfo: { category: string; id: string };
}) {
  //=============================================================================
  const { category, id } = productInfo;
  //get data from api
  const payload = await getAllProducts();
  // get related products
  const relatedProduct = getShuffleArray(
    payload?.products.filter((product) => product.category === category)
  )
    .filter((product) => product.id !== id)
    .slice(0, 4);
//=================================================================================
  return (
    <div className="my-10 md:my-20 ">
      <div className=" flex justify-between items-center mb-5 ">
        {/* header */}
        <h2 className="heading-style w-fit">Related Items</h2>
        <Link
          href={"/category"}
          className="capitalize hover:text-primary-dark transition-colors"
        >
          view more <ArrowRight className="inline-block my-2" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* related products */}
        {relatedProduct?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
