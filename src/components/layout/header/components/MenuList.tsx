"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
        <motion.li
          key={path.name}
          animate={{
            color: pathname === path.path ? "#DB3D80" : "#111827",
            scale: pathname === path.path ? 1.05 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link
            aria-label={path.name}
            className={`capitalize font-medium `}
            href={path.path}
          >
            {path.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default MenuList;

