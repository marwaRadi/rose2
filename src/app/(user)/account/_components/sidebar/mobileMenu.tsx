"use client";
import useDesktop from "@/app/(routes)/category/hooks/use-desktop";
import ChevronIcon from "@/components/common/animation/ChevronIcon";
// import FadeIn from "@/components/common/animation/FadeIn";
import { useState } from "react";
import MenuList from "./MenuList";
import dynamic from "next/dynamic";
const MotionComponent = dynamic(
  () => import("@/components/common/animation/FadeIn"),
  {
    ssr: false,
  }
);

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useDesktop();
  if (isDesktop) return null;
  return (
    <div className=" pb-5   nav-border   overflow-hidden ">
      <div className="container mx-auto px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex  items-center gap-1"
        >
          <span>
            <ChevronIcon open={isOpen} />
          </span>
          <span className="capitalize">menu</span>
        </button>
        {/* menu list */}
        {isOpen && (
          <MotionComponent
            styling={`fixed  left-0 top-39 right-0 bottom-0 z-10 bg-white px-4  `}
          >
            <MenuList setIsOpen={setIsOpen} />
          </MotionComponent>
        )}
      </div>
      {/* menu btn */}
    </div>
  );
}

export default MobileMenu;
