import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
function SliderContent() {
  return (
    <div className=" capitalize space-y-4 p-4 flex flex-col justify-center absolute  h-full">
      <h4 className="text-base ">Best Gift Shop</h4>
      <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)]">
        Choose Perfect <br /> <span className="text-primary-dark">Gifts </span>
        From Us
      </h2>
      <p className=" sm:w-1/2 w-[70%]">
        Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum
        optio dolores et.
      </p>
      <Link href="/category">
          <PrimaryBtn>
        Shop Now <ArrowRight className="inline-block" />
      </PrimaryBtn>
      </Link>
    
    </div>
  );
}

export default SliderContent;
