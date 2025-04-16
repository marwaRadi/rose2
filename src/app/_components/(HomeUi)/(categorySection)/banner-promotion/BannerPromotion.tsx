import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import BannerSlider from "./components/BannerSlider";
import PromotionImage from "./components/PromotionImage";
import promImageTwo from "@/../public/gifts-background/confetti-lying-near-present1.jpg";
import promImageOne from "@/../public/gifts-background/red-christmas-gifts-with-white-ribbon.jpg";
import promImageThree from "@/../public/gifts-background/Top view hand holding gift box on work space.png";
import promImageFour from "@/../public/gifts-background/Christmas shopping-composition-with-presents-and-cart-main.png";
function BannerPromotion() {
  return (
    <div className=" grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <PromotionImage
        img={promImageOne}
        textPosition="left"
        imageStyle="h-full"
      >
        <>
          <h4 className="text-base text-primary-dark tracking-[4px] ">
            Start $10.99
          </h4>
          <h2 className="text-xl">
            Special Gifts Box <br />
            For Your Love
          </h2>
          <PrimaryBtn>shop now</PrimaryBtn>
        </>
      </PromotionImage>
      <BannerSlider style="sm:col-span-2 sm:order-first md:order-0 " />
      <PromotionImage img={promImageTwo} imageStyle="h-full">
        <>
          <h5 className="text-base md:text-sm lg:text-base text-primary-dark font-medium">
            Gifts Box
          </h5>
          <h2 className="text-xl md:text-base lg:text-xl">
            Awesome Gifts Box <br /> Collections
          </h2>
          <PrimaryBtn>shop now</PrimaryBtn>
        </>
      </PromotionImage>

      <PromotionImage img={promImageThree} imageStyle="w-full h-full">
        <>
          <h5 className="text-base md:text-sm lg:text-base text-primary-dark font-medium">
            Occasion Gifts
          </h5>
          <h2 className="text-xl md:text-base lg:text-xl">
            Best Occasion Gifts <br /> Collections
          </h2>
          <PrimaryBtn>Discover Now</PrimaryBtn>
        </>
      </PromotionImage>

      <PromotionImage img={promImageFour} imageStyle="w-full h-full" >
        <>
          <h5 className="text-base md:text-sm lg:text-base text-white font-medium">
            Occasion Gifts
          </h5>
          <h2 className="text-xl text-white md:text-base lg:text-xl">
            Combo Sets Gift Box <br /> Up To 50% Off
          </h2>
          <PrimaryBtn>Discover Now</PrimaryBtn>
        </>
      </PromotionImage>
    </div>
  );
}

export default BannerPromotion;
