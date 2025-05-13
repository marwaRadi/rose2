import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center gap-2  ">
      <div className="relative  ">
        <Image
          src="/gifts-background/illustration/empty-cart/82642488_9960436.jpg"
          width={200}
          height={0}
          alt="empty cart"
        />
      </div>
      <div className="text-center space-y-3">
        <h2>
          your cart is <span className="text-primary-dark">empty</span>
        </h2>
        <p className="line-clamp-3 md:w-[70%] w-[90%] mx-auto">
          Your cart is currently empty. Start exploring our collections and add
          your favorite items. Great gifts are just a click away!
        </p>
        <Link
          href={"/category"}
          className="mt-5 inline-block"
          aria-label="continue shopping"
        >
          <PrimaryBtn>show now</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
