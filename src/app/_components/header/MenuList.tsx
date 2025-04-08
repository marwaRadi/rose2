"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  { name: "home", path: "/" },
  { name: "all category", path: "/category" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];
function MenuList() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4 md:gap-6 flex-col md:flex-row ">
      {paths.map((path) => (
        <li key={path.name}>
          <Link
            className={`capitalize font-medium ${
              pathname === path.path ? "text-primary-dark" : null
            }`}
            href={path.path}
          >
            {path.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
