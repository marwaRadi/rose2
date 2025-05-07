"use client";
import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  Suspense,
  useContext,
  useRef,
  useState,
} from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import CloseBtn from "../../common/buttons/CloseBtn";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/common/spinner/LoadingSpinner";

//============================================================
// context type
interface ModalContext {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}
const modalContext = createContext<ModalContext>({
  openName: "",
  close: () => {},
  open: () => {},
});
// const modalContext = createContext<ModalContext | null>(null);
// modal
function Modal({
  children,
  setOpenModel,
}: {
  children: ReactNode;
  showWindow?: string;
  setOpenModel?: React.Dispatch<React.SetStateAction<string>>;
}) {
  //====================================================================
  //hooks
  const [openName, setOpenName] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  //=====================================================================
  //functions
  const close = () => {
    setOpenName("");
    if (setOpenModel) {
      setOpenModel("");
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.delete("showFormModal");
      const newUrl = `${pathName}?${params.toString()}`;
      router.replace(newUrl, { scroll: false });
    }
  };
  const open = setOpenName;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <modalContext.Provider value={{ openName, close, open }}>
        {children}
      </modalContext.Provider>
    </Suspense>
  );
}

// modal button
function Open({
  openModal,
  children,
}: {
  openModal: string;
  children?: ReactElement;
}) {
  // get open function from context
  const { open } = useContext(modalContext);
  return cloneElement(children ?? <></>, {
    onClick: () => {
      open(openModal);
    },
  });
}
// modal body
function Window({
  name,
  type,
  style,
  children,
  showWindow,
}: {
  name: string;
  style?: string;
  type?: string;
  children: ReactNode;
  showWindow?: string | undefined;
}) {
  const { close, openName } = useContext(modalContext);
  // close the modal when clicking outside the container
  // const { ref } = useOutsideClick(close);
  const openModal = showWindow ? showWindow === name : name === openName;
  const ref = useRef<HTMLDivElement>(null);
  // checking if the user clicked on open modal or not
  if (!openModal) return null;
  return createPortal(
    // overlay
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        if (!ref.current?.contains(e.target as Node)) close();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: openModal ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed  inset-0 overflow-y-auto  pt-10 bg-black-8 z-10
        ${type === "center" ? "flex justify-center items-center" : null} `}
    >
      {/* container */}

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: openModal ? 1 : 0.8 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={`${style} relative`}
        ref={ref}
      >
        {/*the UI that we want to display */}
        {children}
        {/*close window  */}
        <CloseBtn onclick={close} style="top-6 right-4" />
      </motion.div>
    </motion.div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
// Modal.CloseModel = CloseModel;
export default Modal;
