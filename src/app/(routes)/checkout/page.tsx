import { getMetadata } from "../../../_utils/getMetadata";

export const metadata = getMetadata(
  "checkout",
  "Enjoy a seamless checkout experience with easy steps to complete your purchase. Simply review your order, provide your delivery details, and choose your preferred payment method. Your order will be processed quickly, ensuring your gift reaches its destination on time."
);

function page() {
  return <div>checkout page</div>;
}

export default page;
