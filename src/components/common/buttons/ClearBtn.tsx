"use client";

import { LucideEraser } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";
import { useState } from "react";
import { clearCart } from "@/lib/actions/cart.action";
import LoadingButton from "../animation/LoadingButton";

function ClearBtn() {
  const [isClearing, setIsClearing] = useState(false);
  async function handleClearCart() {
    setIsClearing(true);
    await clearCart();
    setIsClearing(false);
  }

  return (
    <PrimaryBtn onclick={handleClearCart}>
      {isClearing ? (
        <div className="flex items-center gap-1 ">
          <LoadingButton />
          <span> clearing </span>
        </div>
      ) : (
        <span className="flex items-center">
          <LucideEraser className="inline-block mr-1" /> clear cart
        </span>
      )}
    </PrimaryBtn>
  );
}

export default ClearBtn;
