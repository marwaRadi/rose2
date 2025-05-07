import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./SignupForm";
import FadeIn from "@/components/common/animation/FadeIn";
function Form({ setOpenModal }: { setOpenModal :React.Dispatch<React.SetStateAction<string>>}) {
  const [view, setView] = useState<Views>(
    "login"
  );
  return (
    <div className="bg-white p-10">
      {view === "login" && (
        <FadeIn>
          <LoginForm setView={setView} setOpenModal={setOpenModal} />
        </FadeIn>
      )}
      {view === "signup" && (
        <FadeIn>
          <Signup setView={setView} />
        </FadeIn>
      )}
    </div>
  );
}

export default Form;
