
import Image from "next/image";
import giftOne from "@/../public/gifts-background/gallery/gift-1.webp";
import giftTwo from "@/../public/gifts-background/gallery/gift-2.webp";
import giftThree from "@/../public/gifts-background/gallery/gift-3.webp";
import giftFour from "@/../public/gifts-background/gallery/gift-4.webp";
import giftFive from "@/../public/gifts-background/gallery/gift-5.webp";
function Gallery() {
  return (
    <section className="fixed-size">
      {/* gallery */}
      <div className=" my-20 px-4">
        {/* title */}
        <div className="w-fit md:text-center  md:mx-auto pb-6">
          <h4 className="text-primary-dark track  tracking-[4px] font-bold  uppercase">
            Our Gallery
          </h4>
          <h2 className="relative  font-bold text-xl pb-1 before:absolute before:w-[90%] before:h-[40%] before:z-[-1] before:bottom-0  before:bg-primary-light-90 before:rounded-r-full after:absolute after:bottom-0 after:w-[45%] after:h-0.5 after:bg-primary-dark after:left-0  ">
            Let&apos;s Check Our Photo Gallery
          </h2>
        </div>
        {/* images */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className=" relative aspect-square  md:order-2">
            <Image
              sizes="(min-width: 768px) 33vw, 100vw"
              fill
              src={giftOne}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-1">
            <Image
              sizes="(min-width: 768px) 33vw, 100vw"
              fill
              src={giftTwo}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-first">
            <Image
              sizes="(min-width: 768px) 33vw, 100vw"
              fill
              src={giftThree}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className=" relative aspect-square md:order-last">
            <Image
              sizes="(min-width: 768px) 33vw, 100vw"
              fill
              src={giftFour}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
          {/* <div className=" relative aspect-square md:order-last">
            <Image
              fill
              src={giftFive}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div> */}
          <div className=" relative aspect-square md:order-3 md:col-span-2 md:aspect-auto">
            <Image
              sizes="(min-width: 768px) 33vw, 100vw"
              fill
              src={giftFive}
              alt=""
              className="rounded-[40px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery
