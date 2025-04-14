import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { getMetadata } from "../../../_utils/getMetadata";
import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";
import { Check } from "lucide-react";
import Image from "next/image";
import aboutOne from "@/../public/gifts-background/about/ff4aa9a65b40f281876242848475b272.png";
import aboutTwo from "@/../public/gifts-background/about/2b8854b043e2c2f1c278829231fcc17b.png";
import aboutThree from "@/../public/gifts-background/about/33ad3b952fb247e440970b79fbb02f38.png";
import giftOne from "@/../public/gifts-background/gallery/gift-1.jpg";
import giftTwo from "@/../public/gifts-background/gallery/gift-2.png";
import giftThree from "@/../public/gifts-background/gallery/gift-3.png";
import giftFour from "@/../public/gifts-background/gallery/gift-4.png";
import giftFive from "@/../public/gifts-background/gallery/gift-5.png";

export const metadata = getMetadata(
  "About",
  "Welcome to Rose! We specialize in offering a unique selection of gifts, including flowers, jewelry, chocolates, and more. Whether you're celebrating a special occasion or simply want to brighten someone’s day, we have the perfect gift for you. Our carefully curated collection ensures high quality and elegant packaging to make every moment memorable."
);

function page() {
  return (
    <main className="container mx-auto 2xl:px-[80px] my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-3 ">
        <div className="grid grid-cols-3 grid-rows-2 justify-center  gap-2 ">
          <div className="self-center col-span-2 row-span-2">
            <div className="   relative  before:w-[70%] before:h-full  before:absolute before:top-0 before:left-0 before:z-[-1]  before:rounded-[100px] before:rounded-tl-[50px] before:border-2 before:border-primary-dark  aspect-square before:transform before:rotate-4 ">
              <Image
                fill
                className="object-cover py-4 pl-6  rounded-[100px] !rounded-tl-[50px] "
                src={aboutOne}
                alt=""
              />
            </div>
          </div>

          <div className=" relative rounded-full self-end  overflow-hidden aspect-square ">
            <Image fill className="object-cover " src={aboutTwo} alt="" />
          </div>
          <div className=" relative  overflow-hidden   rounded-[40px] rounded-r-[50%]  aspect-square">
            <Image fill className="object-cover " src={aboutThree} alt="" />
          </div>
        </div>
        {/* content */}
        <div className="capitalize  flex flex-col gap-6">
          <h4 className=" text-primary-dark track  tracking-[4px] font-bold text-lg uppercase">
            About Us
          </h4>
          <h2 className="font-bold text-xl lg:text-3xl ">
            We Provide Best And Quality{" "}
            <span className="text-primary-dark">Gifts Box</span> Product For You
          </h2>
          <p>
            Recusandae tempora aut laborum molestias veniam. A commodi sequi
            accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta
            necessitatibus ut ad.
          </p>
          <PrimaryBtn>Discover More </PrimaryBtn>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2">
              <CircleBgIcon padding="p-1" bg="bg-secondary-dark">
                <Check />
              </CircleBgIcon>
              <span>Streamlined Shipping Experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleBgIcon padding="p-1" bg="bg-secondary-dark">
                <Check />
              </CircleBgIcon>
              <span>Affordable Modern Design</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleBgIcon padding="p-1" bg="bg-secondary-dark">
                <Check />
              </CircleBgIcon>
              <span>Competitive Price & Easy To Shop</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleBgIcon padding="p-1" bg="bg-secondary-dark">
                <Check />
              </CircleBgIcon>
              <span>We Made Awesome Products</span>
            </li>
          </ul>
        </div>
      </div>
      {/* gallery */}
      <div className=" my-20 px-4">
        {/* title */}
        <div className="w-fit md:text-center  md:mx-auto mb-4">
          <h4 className="text-primary-dark track  tracking-[4px] font-bold  uppercase">
            Our Gallery
          </h4>
          <h2 className="relative  font-bold text-xl pb-1 before:absolute before:w-[90%] before:h-[40%] before:z-[-1] before:bottom-0  before:bg-primary-light-90 before:rounded-r-full after:absolute after:bottom-0 after:w-[45%] after:h-0.5 after:bg-primary-dark after:left-0  ">
            Let&apos;s Check Our Photo Gallery
          </h2>
        </div>
        {/* images */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className=" relative aspect-square md:order-2">
            <Image
              fill
              src={giftOne}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-1">
            <Image
              fill
              src={giftTwo}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-first">
            <Image
              fill
              src={giftThree}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-last">
            <Image
              fill
              src={giftFour}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-3 col-span-2 md:aspect-auto">
            <Image
              fill
              src={giftFive}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
