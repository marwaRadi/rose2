import FilterItems from "./components/FilterItems";
import PopularProducts from "./components/PopularProducts";

function PopularItems({ params }: { params: SearchParams }) {
  return (
    <div className="fixed-size">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-3 lg:mb-6">
        <h2 className="heading-style w-fit">Popular Items</h2>
        <FilterItems params={params.category} />
      </div>
      <PopularProducts params={params} />
    </div>
  );
}

export default PopularItems;
