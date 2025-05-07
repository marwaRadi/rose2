"use client";
import {  useEffect, useState } from "react";
import Modal from "../custom/modal/Modal";
import { useSession } from "next-auth/react";
import Form from "../custom/auth/components/FormSwitcher";
import Image from "next/image";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import LoadingSpinner from "../common/spinner/LoadingSpinner";


type ProtectedRouteProps = {
  children: React.ReactNode;
};
function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { status } = useSession();
  const [openModal, setOpenModal] = useState("");
  useEffect(() => {
    if (status === "unauthenticated") {
      setOpenModal("showFormLogin");
    }
    if (status === "authenticated") setOpenModal("");
  }, [status]);

  //=================================================================
  //render
  if (openModal)
    return (
      <div className="h-screen">
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
      
      </div>
    );
  if (status === "authenticated") return children;
 if(status === "unauthenticated") return (
    <div className="   flex flex-col gap-5 md:flex-row items-center justify-center">
      <Image
        src="/gifts-background/illustration/login/Login-amico.svg"
        alt=""
        height={300}
        width={300}
      />
      <div className="grid gap-2 text-center justify-items-center">
        <h5 className="text-[clamp(1.2rem,2vw,2rem)]">
          Hold on! The page is for registered users only
        </h5>
        <p className="">to view this content, Please log in to your account</p>
        <PrimaryBtn
          style="mb-4  "
          onclick={() => {
            setOpenModal("showFormLogin");
          }}
        >
          login
        </PrimaryBtn>
      </div>
    </div>
  );
  if(status === "loading") return (
    <div className="h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default ProtectedRoute;
