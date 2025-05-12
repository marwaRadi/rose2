import Image from "next/image";

type SliderBackgroundProps = {
  url: string;
  children: React.ReactNode;
};

function SliderBackground({ url, children }: SliderBackgroundProps) {
  return (
    <div className="relative sm:aspect-video aspect-square rounded-[20px] overflow-hidden">
      <Image
        src={url}
        alt="banner"
        fill
        priority
        sizes="(min-width: 768px) 33vw, (min-width: 640px) 66vw, 100vw"
      />
      {children}
    </div>
  );
}
// function SliderBackground({ url, children }: SliderBackgroundProps) {
//   return (
//     <div
//       style={{ backgroundImage: `url(/${url})` }}
//       className={` bg-cover bg-center bg-no-repeat main-rounded h-full `}
//     >
//       {children}
//     </div>
//   );
// }

export default SliderBackground;
