"use client";
import { categories } from "@/app/temporary-data/all-categories/allCategories";
import { useState } from "react";
import FilterGroup from "./FilterGroup";
import CheckboxList from "./CheckboxList";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";
import RatingStar from "@/components/common/rating-star/RatingStar";
import { useFilters } from "../../hooks/useFilters";

// Get  categories

const categoriesList = categories.map((category) => ({
  name: category.name,
  count: category.productsCount,
  id: category._id,
}));
function FilterPanel() {

  
  const [openList, setOpenList] = useState<string | null>(null);
  const {
    handleCategoryFilter,
    handlePriceFilter,
    handleRatingFilter,
    filters,
  } = useFilters();


  function toggleList(listName: string) {
    setOpenList((list) => (list === listName ? null : listName));
  }
  return (
    <div className=" flex gap-2 md:flex-col ">
      {/* categories */}
      <FilterGroup
        title="categories"
        toggleList={toggleList}
        openList={openList}
      >
        {/* body */}
        {categoriesList.map((category) => (
          <CheckboxList
            key={category.name}
            data={category}
            onchange={handleCategoryFilter}
            filter={filters.categories}
          />
        ))}
      </FilterGroup>
      {/* price */}
      <FilterGroup title="price" toggleList={toggleList} openList={openList}>
        <FilterPrice onchange={handlePriceFilter} filter={filters.price} />
      </FilterGroup>
      {/* star rating */}
      <FilterGroup title="rating" toggleList={toggleList} openList={openList}>
        {Array.from({ length: 5 }).map((_, index) => {
          const reverseIndex = 5 - index;
          return (
            <FilterRating
              data={{ number: reverseIndex, name: `${reverseIndex} star` }}
              onchange={handleRatingFilter}
              key={index}
              filter={filters.rating}
            >
              <RatingStar
                key={index}
                rate={reverseIndex}
                color="text-primary-dark"
              />
            </FilterRating>
          );
        })}
      </FilterGroup>
    </div>
  );
}

export default FilterPanel;
