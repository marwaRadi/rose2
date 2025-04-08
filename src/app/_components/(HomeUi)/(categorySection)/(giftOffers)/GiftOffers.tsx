import Image from "next/image";
import giftWithWhiteRibbon from "@/../public/gifts-background/red-christmas-gifts-with-white-ribbon.jpg";
import background from "@/../public/gifts-background/Background-1.png";
import confetti from "@/../public/gifts-background/confetti-lying-near-present1.jpg";
import christmas from "@/../public/gifts-background/christmas-shopping-composition-with-presents-cart1.jpg";
import bestOccasion from "@/../public/gifts-background/Top view hand holding gift box on work space.png";
// import ImageContainer from "./ImageContainer";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowRight } from "lucide-react";

// const giftBoxes = [
//   {
//     image: giftWithWhiteRibbon,
//     styling: {
//       textPosition: "left",
//       textWeight: "font-bold",
//       headingWeight: "font-semibold",
//       textSpacing: "tracking-[4.66px]",
//     },
//   },
//   {
//     image: confetti,
//     styling: {
//       textPosition: "left",
//       textWeight: "font-bold",
//       headingWeight: "font-semibold",
//       textSpacing: "tracking-[4.66px]",
//     },
//   },
//   {
//     image: bestOccasion,
//     styling: {
//       textPosition: "left",
//       textWeight: "font-bold",
//       headingWeight: "font-semibold",
//       textSpacing: "tracking-[4.66px]",
//     },
//   },
//   {
//     image: giftWithWhiteRibbon,
//     styling: {
//       textPosition: "left",
//       textWeight: "font-bold",
//       headingWeight: "font-semibold",
//       textSpacing: "tracking-[4.66px]",
//     },
//   },
// ];
function GiftOffers() {
  return (
    <div className=" grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div className="relative  ">
        <Image
          className="rounded-[20px]"
          src={giftWithWhiteRibbon}
          alt="Red christmas gifts with white ribbon"
        />

        <div className="absolute top-1/2 left-4 transform  -translate-y-1/2    ">
          <p className=" tracking-[4.66px] uppercase font-bold !text-primary-dark">
            Start $10.99
          </p>
          <h4 className="capitalize font-semibold text-[20px] ">
            Special Gifts Box <br /> For Your Love
          </h4>
          <PrimaryBtn rounded="rounded-[4px]">
            Shop Now
            <ArrowRight className="inline-block" />
          </PrimaryBtn>
        </div>
      </div>
      <div className="relative sm:order-first sm:col-span-full md:col-span-2 md:order-none ">
        <Image
          className="rounded-[20px] h-full"
          src={background}
          alt="Red christmas gifts with white ribbon"
        />

        <div className="absolute top-1/2 left-4 transform  -translate-y-1/2 flex flex-col gap-2.5 ">
          <p className=" tracking-[4.66px] uppercase font-bold !text-primary-dark">
            Start $10.99
          </p>
          <h4 className="capitalize font-semibold ">
            Special Gifts Box <br /> For Your Love
          </h4>
          <PrimaryBtn rounded="rounded-[4px]">
            Shop Now
            <ArrowRight className="inline-block" />
          </PrimaryBtn>
        </div>
      </div>

      <div className="relative ">
        <Image
          className="rounded-[20px] h-full w-full object-cover"
          src={confetti}
          alt="Red christmas gifts with white ribbon"
        />

        <div className=" capitalize absolute top-1/2 w-full left-1/2 transform -translate-x-1/2 text-center md:text-right  pr-4 -translate-y-1/2  ">
          <p className="     !text-primary-dark">Gifts Box</p>
          <h4 className=" font-bold text-xl my-3.5">
            Awesome Gifts Box <br />
            Collections
          </h4>
          <PrimaryBtn rounded="rounded-[10px]">Shop Now</PrimaryBtn>
        </div>
      </div>
      <div className="relative ">
        <Image
          className="rounded-[20px] w-full h-full"
          src={bestOccasion}
          alt="Red christmas gifts with white ribbon"
        />

        <div className=" capitalize absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 text-center -translate-y-1/2  md:text-right  pr-4">
          <p className="     !text-primary-dark">Occasion Gifts</p>
          <h4 className=" font-bold text-xl my-3.5">
            Best Occasion Gifts
            <br />
            Collections
          </h4>
          <PrimaryBtn rounded="rounded-[10px]">Discover Now</PrimaryBtn>
        </div>
      </div>

      <div className="relative ">
        <Image
          className="rounded-[20px] w-full h-full brightness-80 "
          src={christmas}
          alt="Red christmas gifts with white ribbon "
        />

        <div className="absolute w-full  capitalize text-white top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2  text-center md:text-right  pr-4">
          <p className=" !text-white">Occasion Gifts</p>
          <h4 className=" font-medium text-xl my-3.5 ">
            Combo Sets Gift Box <br />
            Up To 50% Off
          </h4>
          <PrimaryBtn rounded="rounded-[10px]">Discover Now</PrimaryBtn>
        </div>
      </div>

      {/* //////////////////////////////////////////////////// */}

      {/* <ImageContainer
          image={giftWithWhiteRibbon}
          textPosition="left"
          textSpacing="tracking-[4.66px]"
          fontWeight="font-semibold"
          textContent="Start $10.99"
          headingContent={{
            part1: "Special Gifts Box",
            part2: "For Your Love",
          }}
        />
        <ImageContainer image={confetti} />
        <ImageContainer image={bestOccasion} />
        <ImageContainer brightness="brightness-80" image={christmas} />
        <div className="relative">
          <Image
            src={giftWithWhiteRibbon}
            className="w-full rounded-[20px]"
            alt="Red christmas gifts with white ribbon"
          />
        </div> */}
    </div>
  );
}

export default GiftOffers;
