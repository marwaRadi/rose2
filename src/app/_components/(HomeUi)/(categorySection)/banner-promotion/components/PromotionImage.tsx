// import imageOne from "@/../public/gifts-background/confetti-lying-near-present1.jpg";
// import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import Image, { StaticImageData } from "next/image";
type PromotionImageProps = {
  children: React.ReactNode;
  textPosition?: string;
  img: string | StaticImageData;
  imageStyle?: string;
  style?: string;
  priority?: boolean;
  size?: string;
};

function PromotionImages({
  children,
  textPosition = "center",
  img,
  imageStyle,
  style,
  priority = false,
  size,
}: PromotionImageProps) {
  const myStyle = {
    center: " left-1/2  -translate-x-1/2 text-center ",
    left: " left-0 ",
    right: `right-0 `,
  };

  return (
    <figure className={`relative ${style ? style : ""} `}>
      <Image
        priority={priority}
        sizes={size ? size : "(min-width: 768px) 33vw, (min-width: 640px) 66vw, 100vw"} 
        src={img}
        alt="promotion-1"
        className={`main-rounded ${imageStyle ? imageStyle : ""}`}
      />
      <figcaption
        className={`absolute ${
          myStyle[textPosition as keyof typeof myStyle]
        } top-1/2 w-full transform  -translate-y-1/2  space-y-4 px-4`}
      >
        {children}
      </figcaption>
    </figure>
  );
}

export default PromotionImages;


  // <figure className={`relative ${style ? style : ""} bg-teal-500`}>
  //   <Image
  //     src={img}
  //     alt="promotion-1"
  //     className={`main-rounded ${imageStyle ? imageStyle : ""}`}
  //   />
  //   <figcaption
  //     className={`absolute ${
  //       myStyle[textPosition as keyof typeof myStyle]
  //     } top-1/2 w-full transform  -translate-y-1/2  space-y-4 px-4`}
  //   >
  //     {children}
  //   </figcaption>
  // </figure>;