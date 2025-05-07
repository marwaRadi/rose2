import Image from "next/image";
import personOne from "@/../public/gifts-background/about-page/our-team/08b69e3557982a38b557393403fccb80da023221.jpg";
import personTwo from "@/../public/gifts-background/about-page/our-team/39366ed9ea0773302268b31c098ba66236963035.jpg";
import personThree from "@/../public/gifts-background/about-page/our-team/6d4b2d971811050e45e924793333a4428fe42379.jpg";
import personFour from "@/../public/gifts-background/about-page/our-team/f4dd64b2cb5efc26436935408cf9f760376adac7.jpg";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import CircleBgIcon from "@/components/common/(circleBgIcon)/CircleBgIcon";

const ourTeamList = [
  { id: 1, image: personOne, name: "Ahmed Mohamed", job: "Senior Manager" },
  { id: 2, image: personTwo, name: "Ahmed Mohamed", job: "Senior Manager" },
  { id: 3, image: personThree, name: "Ahmed Mohamed", job: "Senior Manager" },
  { id: 4, image: personFour, name: "Ahmed Mohamed", job: "Senior Manager" },
];
function OurTeam() {
  return (
    <div className="fixed-size">
      {/* title */}
      <div className="w-fit md:text-center  md:mx-auto pb-6">
        <h4>our team</h4>
        <h2 className="heading-style">Meet Our Expert Team</h2>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ourTeamList.map((item) => (
          <div key={item.id}>
            <div className="rounded-[20px] p-6 shadow-md ">
              {/* photo */}
              <div className="relative md:aspect-square aspect-[3/2]">
                <Image
                  fill
                  src={item.image}
                  alt="our team"
                  className="rounded-[20px] object-cover"
                />
              </div>
              {/* name */}
              <div className="text-center my-4">
                <h5>Ahmed Mohamed</h5>
                <h6 className="text-primary-dark">Senior Manager</h6>
              </div>
              <hr />
              {/* social links */}
              <div>
                <ul className="flex justify-between items-center  mt-4">
                  <li>
                    <Link href="#">
                      <CircleBgIcon padding="p-2">
                        <Facebook />
                      </CircleBgIcon>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <CircleBgIcon padding="p-2">
                        <Instagram />
                      </CircleBgIcon>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <CircleBgIcon padding="p-2">
                        <Twitter />
                      </CircleBgIcon>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <CircleBgIcon padding="p-2">
                        <Youtube />
                      </CircleBgIcon>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
