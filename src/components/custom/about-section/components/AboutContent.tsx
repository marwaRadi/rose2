import { Check } from "lucide-react";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";

const aboutFeatures = [
  { id: 1, text: "Streamlined Shipping Experience", icon: Check },
  { id: 2, text: "Affordable Modern Design", icon: Check },
  { id: 3, text: "Competitive Price & Easy To Shop", icon: Check },
  { id: 4, text: "We Made Awesome Products", icon: Check },
];
function AboutContent() {
  return (
    // about
    <div className="capitalize  flex flex-col gap-6">
      <h4 className=" text-primary-dark track  tracking-[4px] font-bold text-lg uppercase">
        About Us
      </h4>
      <h2 className="font-bold text-xl lg:text-3xl ">
        We Provide Best And Quality
        <span className="text-primary-dark mx-2">
          Gifts <br /> Box
        </span>{" "}
        Product For You
      </h2>
      <p>
        Recusandae tempora aut laborum molestias veniam. A commodi sequi
        accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta
        necessitatibus ut ad.
      </p>
      <PrimaryBtn>Discover More </PrimaryBtn>
      {/* features */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {aboutFeatures.map((feature) => (
          <li key={feature.id} className="flex items-center gap-2">
            <CircleBgIcon padding="p-1" bg="bg-secondary-dark">
              <feature.icon />
            </CircleBgIcon>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutContent;
