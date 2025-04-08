import Link from "next/link";
const Links = [
  {
    name: "about us",
    path: "/about",
  },
  {
    name: "store",
    path: "/store",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "delivery",
    path: "/delivery",
  },
];
function FooterLinks() {
  return (
    <ul className=" capitalize flex font-bold  items-center text-center p-2 ">
      {Links.map((link) => (
        <li className="w-1/4" key={link.name}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
