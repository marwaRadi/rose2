import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "./Logout";

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

function MenuList({
  setIsOpen,
}: {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  //==========================================================
  //hooks
  const pathname = usePathname();
  //==========================================================
  // render
  return (
    <>
      {/* links */}

      <ul className=" capitalize gap-4 py-6 flex flex-col  ">
        {Links.map((link) => (
          <li
            onClick={() => setIsOpen && setIsOpen(false)}
            className={`${
              pathname === link.path ? " bg-primary-light-90 font-medium" : ""
            } p-2 text-[15px] transition-all duration-200 ease-in-out`}
            key={link.name}
          >
            <Link aria-label={Link.name} href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="p-2 ">
          <Logout />
        </li>
      </ul>
      {/* btn */}
    </>
  );
}

export default MenuList;
