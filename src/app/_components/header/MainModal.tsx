"use client";

import Modal from "@/components/common/modal/Modal";
import ViewList from "./ViewList";
import ModalMenu from "./ModalMenu";

function MainModal() {
  return (
    <Modal>
      <Modal.Open openModal="viewList">
        <button className=" flex ">
          <ViewList />
        </button>
      </Modal.Open>
      <Modal.Window name="viewList" style="relative left-2 w-2/3 bg-white ">
        <ModalMenu />
      </Modal.Window>
    </Modal>
  );
}

export default MainModal;
