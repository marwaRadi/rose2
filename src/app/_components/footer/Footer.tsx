// import Image from "next/image";

import FooterLinks from "./FooterLinks";
import SubscribeForm from "./SubscribeForm";

function Footer() {
  return (
    <footer className="  px-4 2xl:px-20 capitalize bg-[url('/gifts-background/footerBg/bg.png')] bg-cover bg-center bg-no-repeat py-4">
      <div className="container mx-auto">
<div className="md:w-3/4 lg:w-1/2 mx-auto ">
        <FooterLinks />
        <h2 className="  font-bold text-xl text-center py-4">
          get <span className="text-primary-dark">20%</span> off discount coupon
        </h2>
        <SubscribeForm />
      </div>
      </div>
      
      {/* <div className="w-full h-[200px] relative ">
        <Image
          alt="footer background"
          fill
          className="object-cover"
          src={"/gifts-background/footerBg/bg.png"}
        />
        <h1 className="absolute top-3 left-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo
        suscipit delectus quia nemo rerum labore voluptas natus sequi quaerat
        necessitatibus perferendis{" "}
      </h1>
      </div> */}
    </footer>
  );
}

export default Footer;
