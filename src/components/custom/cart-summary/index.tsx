import { formatPrice } from "@/_utils/helper";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { getUserCart } from "@/lib/api/data-service.api";
import { CreditCard } from "lucide-react";
import Link from "next/link";
async function CartSummary() {
  const payload = await getUserCart();
  const { totalPrice, totalPriceAfterDiscount, discount } = {
    totalPrice: payload?.cart?.totalPrice,
    totalPriceAfterDiscount: payload?.cart.totalPriceAfterDiscount,
    discount: payload?.cart.discount,
  };
  // totalPrice
  //totalPriceAfterDiscount
  //discount
  return (
    <div className="bg-primary-light-90 capitalize p-10 space-y-10 rounded-[20px]">
      <h5 className="">cart summary</h5>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <p className="inline-block font-semibold text-heading">sup total:</p>{" "}
          <p className="inline-block">
            {totalPrice &&
              formatPrice({
                price: totalPrice,
              })}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="inline-block font-semibold text-heading">discount:</p>{" "}
          <p className="inline-block">{discount}%</p>
        </li>
        <li className="flex justify-between">
          <p className="inline-block font-semibold text-heading">total:</p>{" "}
          <p className="inline-block text-primary-dark">
            {totalPriceAfterDiscount &&
              formatPrice({
                price: totalPriceAfterDiscount,
              })}
          </p>
        </li>
      </ul>
      <Link aria-label="checkout" href="/checkout" className="">
        <PrimaryBtn style="w-full ">
          <div className="flex items-center justify-center gap-1">
            <CreditCard className="inline-block" />
            check out
          </div>
        </PrimaryBtn>
      </Link>
    </div>
  );
}

export default CartSummary;
