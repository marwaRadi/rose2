import Testimonial from "@/components/custom/testimonial-section/Testimonial";
import { getMetadata } from "../../../_utils/getMetadata";
import AboutSection from "@/components/custom/about-section/AboutSection";
import OurService from "@/app/_components/(HomeUi)/our-service-section/OurService";
import Companies from "@/app/_components/(HomeUi)/companies-section/Companies";
import OurTeam from "./_components/our-team/OurTeam";
import InstagramSection from "./_components/Instagram-section/InstagramSection";

export const metadata = getMetadata(
  "About",
  "Welcome to Rose! We specialize in offering a unique selection of gifts, including flowers, jewelry, chocolates, and more. Whether you're celebrating a special occasion or simply want to brighten someone’s day, we have the perfect gift for you. Our carefully curated collection ensures high quality and elegant packaging to make every moment memorable."
);

function page() {
  return (
    <main className="">
      <AboutSection />
      <Testimonial />
      <OurTeam />
      <OurService />
      <InstagramSection />
      <Companies />
    </main>
  );
}

export default page;
