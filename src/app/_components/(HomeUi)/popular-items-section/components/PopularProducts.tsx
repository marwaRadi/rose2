import { products } from "@/app/temporary-data/all-products/products";
import ProductCard from "@/components/custom/card/ProductCard";

const popularProducts = products.filter((product) => product.rateAvg >= 4);
function PopularProducts({
  params,
}: {
  params: SearchParams;
}) {
  let products;

  if (params.category === "all" || !params.category) {
    products = popularProducts;
  } else {
    products = popularProducts.filter(
      (product) => params.category === product.category
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default PopularProducts;
