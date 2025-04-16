// import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";
// import { HomeIcon } from "lucide-react";
import CategorySection from "./_components/(HomeUi)/(categorySection)/CategorySection";
import BestSeller from "./_components/(HomeUi)/best-seller-section/BestSeller";
import OurService from "./_components/(HomeUi)/our-service-section/OurService";
export default function Home() {
  return (
    <main>
      <CategorySection />
      <OurService />
      <BestSeller/>
    </main>
  );
}
