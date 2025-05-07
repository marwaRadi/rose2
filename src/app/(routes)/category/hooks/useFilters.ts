import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { buildSearchParams } from "../utils/buildSearchParams";

type FilterProps = {
  categories: { categoryName: string; id: string }[];
  price: number[];
  rating: number[];
};
export function useFilters() {
  const [filters, setFilters] = useState<FilterProps>({
    categories: [],
    price: [],
    rating: [],
  });

  const route = useRouter();
  const pathName = usePathname();

  // function handles checkbox changes for category filtering
  function handleCategoryFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    const category = e.target.dataset.type;
    const id = e.target.dataset.id;

    //1- if checkbox is checked, add category to the state filter
    //2- if checkbox is unchecked, remove category from the state filter
    if (isChecked) {
      setFilters((f) => ({
        ...f,
        categories: category
          ? [...f.categories, { categoryName: category, id: id ?? "" }]
          : [...f.categories],
      }));
    } else if (!isChecked) {
      setFilters((f) => ({
        ...f,
        categories: f.categories.filter((c) => c.categoryName !== category),
      }));
    }
  }
  // function handler for price filtering
  function handlePriceFilter(priceValue: number[]) {
    setFilters((f) => ({ ...f, price: [...priceValue] }));
  }
  // function handler for rating filtering
  function handleRatingFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.dataset.type);
    const checked = e.target.checked;

    if (checked) {
      setFilters((filter) => ({
        ...filter,
        rating: [...filter.rating, value],
      }));
    } else if (!checked) {
      setFilters((filter) => ({
        ...filter,
        rating: filter.rating.filter((r) => r !== value),
      }));
    }
  }
  // update the url with the new filters
  useEffect(() => {
    // check if all filters are empty
    if (Object.values(filters).every((v) => v.length === 0)) return;
    const params = buildSearchParams(filters);
    route.push(`${pathName}?${params}`, { scroll: false });
  }, [filters, pathName, route]);

  return {
    filters,
    handleCategoryFilter,
    handlePriceFilter,
    handleRatingFilter,
  };
}
