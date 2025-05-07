"use client";
import { deleteFromCart } from "@/lib/actions/cart.action";
import PrimaryBtn from "./PrimaryBtn";
import { successToast } from "@/lib/utils/successToast";
import { useState } from "react";
import LoadingButton from "../animation/LoadingButton";
import { Trash } from "lucide-react";
import { useCounter } from "@/context/providers/CounterProvider";

function DeleteBtn({ id }: { id: string }) {
  //======================================================
  // hooks
  const [isDeleting, setIsDeleting] = useState(false);
  const { getCurrentCartProducts } = useCounter();

  //======================================================
  // functions
  async function handleDelete(id: string) {
    setIsDeleting(true);
    const payload = await deleteFromCart(id);

    if (payload && "cart" in payload && payload.message === "success") {
      successToast("product deleted successfully");
      getCurrentCartProducts(payload.numOfCartItems);
    }
  }

  return (
    <PrimaryBtn
      disabled={isDeleting}
      style={`bg-red-500 hover:bg-red-600 ${
        isDeleting ? "!cursor-not-allowed opacity-50" : ""
      }`}
      onclick={() => {
        handleDelete(id);
      }}
    >
      {isDeleting ? (
        <span className="flex items-center gap-2">
          <LoadingButton /> loading
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <Trash className="inline-block" size={20} />
          <span> delete</span>
        </span>
      )}
    </PrimaryBtn>
  );
}

export default DeleteBtn;
