import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowRight } from "lucide-react";
function SliderContent() {
  return (
    <div className=" capitalize space-y-4 p-4 flex flex-col justify-center  h-full">
      <h4 className="text-base ">Best Gift Shop</h4>
      <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)]">
        Choose Perfect <br /> <span className="text-primary-dark">Gifts </span>
        From Us
      </h2>
      <p className=" w-1/2">
        Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum
        optio dolores et.
      </p>
      <PrimaryBtn>
        Shop Now <ArrowRight className="inline-block" />
      </PrimaryBtn>
    </div>
  );
}

export default SliderContent;
