import { Alex_Brush } from "next/font/google";
import Image from "next/image";
import giftThree from "@/../public/gifts-background/about-page/1d86d2292b00d8f9f595b77b0f15512a2814eb15.png";
import giftFive from "@/../public/gifts-background/about-page/5d249a374fcf9f813beebe730fa7770febca61d2.png";
import giftTwo from "@/../public/gifts-background/about-page/c930e0aaf4c90f6b368095f8ea4c37686f479492.png";
import giftFour from "@/../public/gifts-background/about-page/efec49e078cfd2204123d8636cf1b6f3df483ede.png";
import giftOne from "@/../public/gifts-background/about-page/52af616b28978765b94695c8ecb86d57994a01c4.png";
import { Instagram } from "lucide-react";
import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";
import Link from "next/link";
const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alexBrush",
});

const images=[giftOne,giftTwo,giftThree,giftFour,giftFive]
function InstagramSection() {
  return (
    <div className="fixed-size">
      {/* title */}
      <div className="w-fit md:text-center  md:mx-auto pb-6">
        <h2 className="heading-style">
          Instagram
          <span className={`${alexBrush.className} text-primary-dark mx-2`}>
            @Rose
          </span>
        </h2>
      </div>
      {/* images */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-[20px] overflow-hidden group  "
          >
            <Image src={img} alt="gift" className="aspect-square" />
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center group-hover:translate-y-0 translate-y-full duration-300 transition-transform ease-in-out">
              <CircleBgIcon padding="p-2">
                <Link href="#">
                  <Instagram />
                </Link>
              </CircleBgIcon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramSection;
