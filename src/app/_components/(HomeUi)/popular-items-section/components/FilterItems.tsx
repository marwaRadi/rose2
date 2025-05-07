import FilterButton from "./FilterButtons";
import { getCategoryNameById, getIdsBasedOnRateAvg } from "@/lib/utils/helper";

async function FilterItems(params: SearchParams) {
  // Get Popular categories
  const ids = await getIdsBasedOnRateAvg(4);
  const popularCategories = await getCategoryNameById(ids);
  const filterItems = [{ name: "all", id: "all" }, ...popularCategories];
  // =================================================================
  return <FilterButton filterItems={filterItems} params={params} />;
}

export default FilterItems;
