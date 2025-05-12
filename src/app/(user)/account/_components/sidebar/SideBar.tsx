"use client";
import useDesktop from "@/app/(routes)/category/hooks/use-desktop";
import MenuList from "./MenuList";
import AccountHeaders from "../AccountHeaders";

// ====================================================
//styles
// const styleLi = ` px-4 py-2`;
// const styleLiActive = `bg-primary-light-90`;
// ====================================================

function SideBar() {
  const { isDesktop } = useDesktop();
  if (!isDesktop) return null;
  return (
    <>
      {isDesktop && (
        <aside className="  border-r-2  border-gray-200/40 h-full  ">
          {/* header */}
          <AccountHeaders title="menu" />
          {/* menu list */}
          <MenuList />
        </aside>
      )}
    </>
  );
}

export default SideBar;
