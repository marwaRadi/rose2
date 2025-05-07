import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import useDesktop from "../../hooks/use-desktop";
const MotionChevronDown = motion.create(ChevronDown);

function FilterGroup({
  title,
  children,
  toggleList,
  openList,
}: {
  title: string;
  children: React.ReactNode;
  toggleList: (listName: string) => void;
  openList: string | null;
  }) {
  // checking for screen size
  const {isDesktop} = useDesktop();


  return (
    // header
    <div className="p-6  relative w-fit md:w-full">
      <div
        className={`flex gap-2 cursor-pointer  ${
          openList === title ? "!text-primary-dark" : "text-heading"
        }`}
        onClick={() => {
          // setIsOpen(!isOpen)
          toggleList(title);
        }}
      >
        <p
          className={` font-bold text-base capitalize ${
            openList === title ? "text-primary-dark" : "text-heading"
          }`}
        >
          {title}
        </p>
        <div className="md:hidden">
          <AnimatePresence>
            {openList === title ? (
              <MotionChevronDown
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <MotionChevronDown />
            )}
          </AnimatePresence>
        </div>
      </div>
      <hr className="my-4 w-[90%] mx-auto" />

      {/* list animation */}
      <div className="">
        <AnimatePresence>
          {(isDesktop || openList === title) && (
            <motion.div
              layout
              className="  absolute md:static  p-6 shadow-md  bg-white z-10 w-[300px] md:w-full shadow-shadow"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <div className="hidden md:block">{children}</div> */}
    </div>
  );
}

export default FilterGroup;
