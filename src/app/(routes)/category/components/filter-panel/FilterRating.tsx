import { Check } from "lucide-react";

type RatingFilter = {
  data: {
    number: number;
    name: string;
  };
  children: React.ReactNode;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter: number[];
}

function FilterRating({ data, onchange ,children,filter }:RatingFilter ) {
  return (
      <div className="space-x-2 mb-3">
        {/* checkbox style */}
         <label htmlFor={data.name} className="relative">
          <input 
            onChange={onchange}
          type="checkbox"
          checked={filter.includes(data.number)?true:false}
          id={data.name}
            data-type={data.number}
            className="peer appearance-none border-primary-dark border w-4 h-4 rounded checked:bg-primary-dark hover:shadow-md hover:shadow-primary-dark/20 shadow-md shadow-primary-dark/10"
          />
          <span className="peer-checked:opacity-100 opacity-0 peer-checked:text-white absolute inset-0 ">
            <Check size={15} />
          </span>
        </label>
        <span className="inline-block" >
        {children}
        </span> 
        </div>
        
  );
}

export default FilterRating
