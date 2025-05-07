import ProductCard from "@/components/custom/card/ProductCard";
import EmptyPage from "@/components/common/empty-page/EmptyPage";
import { getAllProducts } from "@/lib/api/data-service.api";
import { getParamsArray } from "../../utils/helper";
// import { useFilters } from "../hooks/useFilters";

// const allProducts = products;
async function ProductList({ params }: { params: SearchParams }) {
  //=====================================================
  const payload = await getAllProducts();
  const allProducts = payload?.products;

  let filteredProducts: Product[] | undefined = allProducts;

  // filter based on category
  if (params.categories)
    filteredProducts = filteredProducts?.filter((product) =>
      getParamsArray(params.categories)?.includes(product.category)
    );
  // filter based on price
  if (params.price)
    filteredProducts = filteredProducts?.filter(
      (product) =>
        product.price >= Number(params.price?.[0]) &&
        product.price <= Number(params.price?.[1])
    );
  // filter based on rating
  if (params.rating)
    filteredProducts = filteredProducts?.filter((product) =>
      getParamsArray(params.rating)
        .map(Number)
        .includes(Math.ceil(product.rateAvg))
    );
  //============================================================================
  if (filteredProducts?.length === 0) return <EmptyPage />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
      {filteredProducts?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
