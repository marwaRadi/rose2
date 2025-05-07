import Image from "next/image";
import RatingStar from "../../../common/rating-star/RatingStar";

type CustomerProps = {
  customerInfo: {
    name: string;
    image: string;
    review: string;
    rating: number;
  };
};

function Customer({ customerInfo }: CustomerProps) {
  const { name, image, review, rating } = customerInfo;
  return (
    <div className="rounded-[100px] !rounded-tl-[50px] bg-white p-6">
      {/* header */}
      <div className="flex gap-6">
        <div className="relative z-10 w-[50px] h-[50px] ">
          <Image fill src={image} alt="avatar" className="rounded-full " />
          <div className="rounded-full -rotate-45 w-[60px] h-[60px] z-[-1]  absolute -top-1 -left-1.5  overflow-hidden   after:absolute after:w-1/2  after:h-full after:bg-primary-dark   "></div>
        </div>
        <div>
          <h5>{name}</h5>
          <h6 className="text-primary-dark">Customer</h6>
        </div>
      </div>
      <div className="my-6 w-[80%] h-[0.3px] mx-auto bg-muted-text" />
      {/* content */}
      <div>
        <p className="w-[80%] sm:w-[90%]">{review}</p>
        {/* footer */}
        <div className="flex justify-between items-center">
          <RatingStar rate={rating} color="text-primary-dark" />
          <div>
            <Image
              src={"/gifts-background/icons/feedback.svg"}
              width={86}
              height={62}
              alt="quote image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
