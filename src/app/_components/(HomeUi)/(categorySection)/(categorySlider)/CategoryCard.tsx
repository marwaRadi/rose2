import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";
import Image from "next/image";
//{ category } :{category : Category}
interface CategoryProps {
  category: Category;
}

function CategoryCard({ category }: CategoryProps) {
  return (
  
      <div className=" capitalize flex flex-col md:flex-row justify-center p-4 gap-4 rounded-[20px] bg-primary-light-90 items-center  ">
        <CircleBgIcon bg="bg-white" padding="p-3" border="border border-custom">
          <Image
            src={category.image}
            alt={category.name}
            width={50}
            height={50}
          />
        </CircleBgIcon>
        <div>
          <h3 className="">{category.name}</h3>
          <p>{category.productsCount} items</p>
        </div>
      </div>

  );
}

export default CategoryCard;
