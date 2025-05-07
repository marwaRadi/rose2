import Image from "next/image";
import aboutOne from "@/../public/gifts-background/about/ff4aa9a65b40f281876242848475b272.png";
import aboutTwo from "@/../public/gifts-background/about/2b8854b043e2c2f1c278829231fcc17b.png";
import aboutThree from "@/../public/gifts-background/about/33ad3b952fb247e440970b79fbb02f38.png";

function AboutImages() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 justify-center  gap-4 ">
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
  );
}

export default AboutImages;
