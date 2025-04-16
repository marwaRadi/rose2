import Test from "./components/Test";
import { getMetadata } from "../../../_utils/getMetadata";

export const metadata = getMetadata(
  "Category",
  "Find the perfect gift from a variety of categories, including flowers, jewelry, electronics, perfumes, and more. Whether it's for a special occasion or just because, we have something for every moment."
);

function page() {

 return <Test/>
}

export default page;
