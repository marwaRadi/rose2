import AboutSection from "@/components/custom/about-section/AboutSection";
import CategorySection from "./_components/(HomeUi)/(categorySection)/CategorySection";
import BestSeller from "./_components/(HomeUi)/best-seller-section/BestSeller";
import OurService from "./_components/(HomeUi)/our-service-section/OurService";
import PopularItems from "./_components/(HomeUi)/popular-items-section/PopularItems";
import Gallery from "./_components/(HomeUi)/gallery-section/Gallery";
import Testimonial from "@/components/custom/testimonial-section/Testimonial";
import Companies from "./_components/(HomeUi)/companies-section/Companies";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  return (
    <>
      <CategorySection />
      <OurService />
      <BestSeller />
        <PopularItems params={params} />
      <AboutSection />
      <Gallery />
      <Testimonial />
      <Companies />
    </>
  );
}
