"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

type FilterButtonsProps = {
  filterItems: { id: string; name: string }[];
  params: SearchParams;
};
function FilterButton({ filterItems ,params }: FilterButtonsProps) {
  const [activeItem, setActiveItem] = useState(params.params || 'all');
  const router = useRouter();
  const pathName = usePathname();
  function handleFilterItems(id: string) {
    const params = new URLSearchParams();
    params.set("category", id);
    router.push(`${pathName}?${params.toString()} `, {
      scroll: false,
    });
  }
  return (
    <ul className="flex gap-4">
      {filterItems.map((item) => (
        <li key={item.id}>
          <motion.button
            animate={{
              color: activeItem === item.id ? "#DB3D80" : "#111827",
              scale:activeItem===item.id ? 1.05 : 1
           }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => {
              handleFilterItems(item.id);
              setActiveItem(item.id);
            }}
            className={`capitalize cursor-pointer text-sm font-semibold  `}
          >
            {item.name}
          </motion.button>
        </li>
      ))}
    </ul>
  );
}

export default FilterButton;


