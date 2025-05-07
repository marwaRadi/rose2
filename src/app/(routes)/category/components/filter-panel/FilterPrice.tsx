import { products } from "@/app/temporary-data/all-products/products";
import { Slider } from "@/components/ui/slider";
const maxPrice = Math.max(...products.map((product) => product.price));
const minPrice = Math.min(...products.map((product) => product.price));

function FilterPrice({ onchange, filter }: { onchange: (c: number[]) => void, filter: number[] }) {

  return (
    <div className="space-y-3">
      {/* display price */}
      <div className="text-primary-dark">
     {filter.length >0 ? `$${filter[0]} - $${filter[1]}` : `$${minPrice} - $${maxPrice}`}
      </div>
      {/* slider */}
      <Slider
        value={filter.length > 0 ? filter : [minPrice + 100, maxPrice - 100]}
        onValueChange={(c) => {
          onchange(c);
        }}
        defaultValue={[minPrice + 100, maxPrice - 100]}
        max={maxPrice}
        min={minPrice}
        step={1}
      />
    </div>
  );
}

export default FilterPrice;
// components/PriceSlider.tsx
