import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "my profile",
    path: "/account",
  },
  {
    name: "my orders",
    path: "/account/user-order",
  },
];

function MenuList({setIsOpen}:{setIsOpen?:React.Dispatch<React.SetStateAction<boolean>>}) {
  //==========================================================
  //hooks
  const pathname = usePathname()
  //==========================================================
  // render
  return (
    <ul className=" capitalize gap-4 py-6 flex flex-col  ">
      {Links.map((link) => (
        <li
          onClick={()=> setIsOpen && setIsOpen(false)}
          className={`${
            pathname === link.path ? " bg-primary-light-90 font-medium" : ""
          } p-2 text-[15px] transition-all duration-200 ease-in-out`}
          key={link.name}
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuList
