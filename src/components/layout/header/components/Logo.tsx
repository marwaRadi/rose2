import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      aria-label="home page"
      href="/"
      className="relative w-14 h-14 lg:w-[86] lg:h-[86]"
    >
      <Image
        priority
        src="/gifts-background/logo.svg"
        fill
        className="object-cover"
        alt="Rose logo "
      />
    </Link>
  );
}

export default Logo;
