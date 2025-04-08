"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import CloseBtn from "../buttons/CloseBtn";
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
// modal
function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <modalContext.Provider value={{ openName, close, open }}>
      {children}
    </modalContext.Provider>
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
}: {
  name: string;
  style?: string;
  type?: string;
  children: ReactNode;
}) {
  const { close, openName } = useContext(modalContext);
  // close the modal when clicking outside the container
  const ref = useOutsideClick(close);

  // checking if the user clicked on open modal or not
  if (name !== openName) return null;
  return createPortal(
    // overlay
    <div
      className={`fixed  inset-0  bg-black-8
        ${type === "left" ? "flex justify-center items-center" : null} `}
    >
      {/* container */}

      <div className={style} ref={ref}>
        {/*the UI that we want to display */}
        {children}
        {/*close window  */}
        <CloseBtn onclick={close} style="top-6 right-4" />
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
// Modal.CloseModel = CloseModel;
export default Modal;




// function CloseModel({ children }: { children: ReactElement }) {
//   {
//     /* close window  */
//   }
//   const { close ,openName  } = useContext(modalContext);

//   return cloneElement(children ?? <></>, {
//     onClick: () => close(),
//   } as React.HTMLAttributes<HTMLElement>);
// }