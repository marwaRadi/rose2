import { getMetadata } from "@/_utils/getMetadata";

export const metadata = getMetadata(
  "Store",
  "Welcome to our Store: Explore a wide selection of high-quality products across various categories. From gifts to gadgets, flowers to jewelry, we have something for every occasion. Browse our collection, discover the perfect item, and enjoy a smooth shopping experience with secure payment and fast delivery."
);

function page() {
  return <div>store</div>;
}

export default page;
