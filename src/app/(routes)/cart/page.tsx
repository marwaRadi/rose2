import { getMetadata } from "../../../_utils/getMetadata";

export const metadata = getMetadata(
  "Cart",
  '"Your cart contains all your selected gifts. Review, edit, and proceed to checkout to complete your order."'
);
function page() {
  return <div>cart page</div>;
}

export default page;
