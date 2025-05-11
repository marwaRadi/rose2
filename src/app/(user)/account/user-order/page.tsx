import { getMetadata } from "@/_utils/getMetadata";
import AccountHeaders from "../_components/AccountHeaders";

export const metadata = getMetadata(
  " Orders",
  "The Orders page in your Rose account allows you to track all your past and current orders. View order details, monitor their status, and make necessary updates to ensure a smooth and convenient shopping experience."
);

function UserOrder() {
  return <section className="mt-10 md:mt-0">
    {/* header */}
    <AccountHeaders title="orders"/>
  </section>;
}

export default UserOrder;
