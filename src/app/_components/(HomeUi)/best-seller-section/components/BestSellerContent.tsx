import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowRight } from "lucide-react";

function BestSellerContent() {
  return (
    <div>
      <div className=" space-y-2 px-4 mb-4">
        <h4>Premium Gifts</h4>
        <h2>
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
        <PrimaryBtn>Explore More <ArrowRight className="inline-block"/></PrimaryBtn>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default BestSellerContent;
