import CategoryCarousel from "./(categorySlider)/CategoryCarousel";
import BannerPromotion from "./banner-promotion/BannerPromotion";

async function CategorySection() {
  return (
    <section className=" fixed-size">
      <div className=" px-4 2xl:px-20  mt-4 mb-6">
        <CategoryCarousel />
        <BannerPromotion />
      </div>
    </section>
  );
}

export default CategorySection;
