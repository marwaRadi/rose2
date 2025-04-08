import Image from "next/image";

function Logo() {
  return (
    <div className="relative w-14 h-14 lg:w-[86] lg:h-[86]">
      <Image
        src="/gifts-background/logo.svg"
        fill
        className="object-cover"
        alt="Rose logo "
      />
    </div>
  );
}

export default Logo;
