import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowRight } from "lucide-react";

function BestSellerContent({styling}:{styling?:string}) {
  return (
    <div className={`flex flex-col gap-2 lg:gap-0 ${styling}`}>
      <h4>Premium Gifts</h4>
      <h2 className="mt-3">
        best
        <span className="text-primary-dark mx-1">
          Seller <br /> gifts
        </span>
        and products
      </h2>
      <p className="max-w-md ">
        Recusandae tempora aut laborum molestias veniam. A commodi sequi
        accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta
        necessitatibus ut ad.
      </p>
      <div className="mt-4">
         <PrimaryBtn>
        Explore More <ArrowRight className="inline-block" />
      </PrimaryBtn>
      </div>
     
    </div>
  );
}

export default BestSellerContent;
