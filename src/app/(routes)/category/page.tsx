import { getMetadata } from "../../../_utils/getMetadata";
import FilterPanel from "./components/filter-panel/FilterPanel";
import ProductList from "./components/products/ProductList";

export const metadata = getMetadata(
  "Category",
  "Find the perfect gift from a variety of categories, including flowers, jewelry, electronics, perfumes, and more. Whether it's for a special occasion or just because, we have something for every moment."
);

export default async function Page({
  searchParams
}: {
  searchParams: Promise<SearchParams>;
  }) {
  
  const params = await searchParams

  return (
    <div className="fixed-size">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4 ">
        <div className="col-span-1">
          <FilterPanel />
        </div>
        <div className=" md:col-span-2 lg:col-span-3">
          <ProductList params={params} />
        </div>
      </div>

      
    </div>
  );
}
