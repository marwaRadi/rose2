"use client";

import { useSearchParams } from "next/navigation";
import Modal from "../modal/Modal";

import Form from "./components/FormSwitcher";
import { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "@/components/common/spinner/LoadingSpinner";

// type FormLoginProps = {
//   showModal: string;
//   setShowModal: React.Dispatch<React.SetStateAction<string>>;
// };
// function FormModal({ showModal, setShowModal }: FormLoginProps) {

//   //=================================================================
//   //render
//   return (
//     <Modal setOpenModel={setShowModal}>
//       <Modal.Window
//         type="center"
//         style=" w-[90%] lg:w-1/2 xl:w-[40%] rounded-[20px] overflow-hidden"
//         name="showFormLogin"
//         showWindow={showModal}
//       >
//         <Form />
//       </Modal.Window>
//     </Modal>
//   );
// }
function FormModal() {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("showFormModal") === "true";
  const [openModal, setOpenModal] = useState("");
  useEffect(() => {
    if (showModal) {
      setOpenModal("showFormLogin");
    }
  }, [showModal]);

  //=================================================================
  //render
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Modal setOpenModel={setOpenModal}>
        <Modal.Window
          type="center"
          style=" w-[90%] lg:w-1/2 xl:w-[40%] rounded-[20px] overflow-hidden"
          name="showFormLogin"
          showWindow={openModal}
        >
          <Form setOpenModal={setOpenModal} />
        </Modal.Window>
      </Modal>
    </Suspense>
  );
}

export default FormModal;
