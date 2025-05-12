import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./SignupForm";
// import FadeIn from "@/components/common/animation/FadeIn";
import dynamic from "next/dynamic";

const MotionComponent = dynamic(
  () => import("@/components/common/animation/FadeIn"),
  {
    ssr: false,
  }
);
function Form({ setOpenModal }: { setOpenModal :React.Dispatch<React.SetStateAction<string>>}) {
  const [view, setView] = useState<Views>(
    "login"
  );
  
  return (
    <div className="bg-white p-10">
      {view === "login" && (
        <MotionComponent>
          <LoginForm setView={setView} setOpenModal={setOpenModal} />
        </MotionComponent>
      )}
      {view === "signup" && (
        <MotionComponent>
          <Signup setView={setView} />
        </MotionComponent>
      )}
    </div>
  );
}

export default Form;
