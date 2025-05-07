import { Check } from "lucide-react";
type CheckboxProps = {
  data: {
    name: string;
    count?: number;
    id?: string;
  };
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
filter: {categoryName:string,id:string}[]
};
function CheckboxList({ data, onchange,filter }: CheckboxProps) {
  return (
    <div className=" capitalize  flex justify-between  ">
      <div className="space-x-2 mb-3">
        {/* checkbox style */}
        <label htmlFor={data.name} className="relative">
          <input
            onChange={onchange}
            type="checkbox"
            checked={filter.some((f) => f.categoryName === data.name)}
            id={data.name}
            data-type={data.name}
            data-id={data.id}
            className="peer appearance-none border-primary-dark border w-4 h-4 rounded checked:bg-primary-dark hover:shadow-md hover:shadow-primary-dark/20 shadow-md shadow-primary-dark/10"
          />
          <span className="peer-checked:opacity-100 opacity-0 peer-checked:text-white absolute inset-0">
            <Check size={15} />
          </span>
        </label>
        <label className="text-heading/60" htmlFor={data.name}>
          {data.name}
        </label>
      </div>
      <div className="text-heading/60">{data.count}</div>
    </div>
  );
}

export default CheckboxList;
