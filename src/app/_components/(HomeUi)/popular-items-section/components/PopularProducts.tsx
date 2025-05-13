import ProductCard from "@/components/custom/card/ProductCard";
import { getAllProducts } from "@/lib/api/data-service.api";

// const popularProducts = products.filter((product) => product.rateAvg >= 4);
async function PopularProducts({ params }: { params: SearchParams }) {
  const payload = await getAllProducts();
  const popularProducts = payload?.products?.filter(
    (product) => product.rateAvg >= 4
  );

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
