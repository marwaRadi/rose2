import { getMetadata } from "../../../_utils/getMetadata";

export const metadata = getMetadata(
  "About",
  "Welcome to Rose! We specialize in offering a unique selection of gifts, including flowers, jewelry, chocolates, and more. Whether you're celebrating a special occasion or simply want to brighten someone’s day, we have the perfect gift for you. Our carefully curated collection ensures high quality and elegant packaging to make every moment memorable."
);

function page() {
  return <div>about page</div>;
}

export default page;
