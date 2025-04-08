import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ImageContainerProps {
  image: StaticImageData;
  textPosition?: string;
  brightness?: string;
  textSpacing?: string;
  fontWeight?: string;
  textContent?: string;
  headingContent?: {
    part1?: string;
    part2?: string;
  };
}

function ImageContainer({
  image,
  textPosition,
  brightness,
  textSpacing,
  fontWeight,
  textContent,
  headingContent,
}: ImageContainerProps) {
  return (
    <div className="relative">
      <Image
        src={image}
        className={` ${brightness ? brightness : ""} w-full rounded-[20px]`}
        alt="Red christmas gifts with white ribbon"
      />
      <div
        className={`absolute ${
          textPosition === "left"
            ? `left-4 `
            : `  left-1/2   -translate-x-1/2 text-center   `
        }  top-1/2  transform -translate-y-1/2 `}
      >
        <p
          className={`
            ${fontWeight ? fontWeight : "font-normal"}
            ${
              textSpacing ? textSpacing : ""
            }  uppercase font-bold !text-primary-dark`}
        >
          {textContent}
        </p>
        <h4
          className={`capitalize  my-3          ${
            fontWeight ? fontWeight : "font-normal"
          }`}
        >
          {headingContent?.part1} <br /> {headingContent?.part2}
        </h4>
        <PrimaryBtn
          rounded={`${
            textPosition === "left" ? "rounded-[4px]" : " rounded-[10]"
          }`}
        >
          Shop Now
          <ArrowRight className="inline-block" />
        </PrimaryBtn>
      </div>
    </div>
  );
}

export default ImageContainer;
