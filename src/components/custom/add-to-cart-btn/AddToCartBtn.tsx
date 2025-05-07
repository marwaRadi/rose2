"use client";

import { useCounter } from "@/context/providers/CounterProvider";
import { addToCart } from "@/lib/actions/cart.action";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import LoadingButton from "@/components/common/animation/LoadingButton";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { successToast } from "@/lib/utils/successToast";
import { ErrorToast } from "@/lib/utils/ErrorToast";
//======================================================
// types
type AddToCartProps = {
  id: string;
  type?: "circle" | "regular";
};
//======================================================

function AddToCartBtn({ id, type = "circle" }: AddToCartProps) {
  //======================================================
  //hooks
  // const [openModel, setOpenModel] = useState<string>("");
  const [isPending, setIsPending] = useState(false);
  // const [transition, startTransition] = useTransition();
  const { count, getCurrentCartProducts } = useCounter();
  const { data: session } = useSession();
  const route = useRouter();
  const pathName = usePathname();
  //======================================================
  //functions
  async function handleClick() {
    if (!session) {
      const showModel = new URLSearchParams(window.location.search);
      showModel.set("showFormModal", "true");
      return route.push(`${pathName}?${showModel.toString()}`, {
        scroll: false,
      });
    } else {
      setIsPending(true);
      const payload = await addToCart({ id, quantity: count });
      if (payload && "message" in payload && payload?.message === "success") {
        getCurrentCartProducts(payload.numOfCartItems);
        console.log(payload)
        setIsPending(false);
        successToast("Added to cart successfully");
      } else {
        setIsPending(false);
        ErrorToast("failed to add to cart");
      }
    }

    // startTransition(async () => await addToCart({ id, quantity: count }));
  }
  //======================================================
  //render
  return (
    <motion.button
      disabled={isPending}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`cursor-pointer mr-1
         ${
           type === "circle"
             ? `w-10 h-10 p-2
        ${
          isPending
            ? "bg-secondary-dark/50 !cursor-not-allowed"
            : "bg-secondary-dark "
        }`
             : `${
                 isPending
                   ? "bg-primary-dark-50 !cursor-not-allowed"
                   : "bg-primary-dark"
               }`
         }
         ${type === "circle" ? "rounded-full" : "rounded-[10px]"}
         `}
      onClick={handleClick}
    >
      {type === "circle" ? (
        <span className="   inline-block  ">
          {isPending ? (
            <LoadingButton />
          ) : (
            <ShoppingCart className="text-white" />
          )}
        </span>
      ) : (
        <span className="  py-2 px-4 flex items-center gap-2 justify-center ">
          {isPending ? (
            <LoadingButton />
          ) : (
            <ShoppingCart className="text-white inline-block " />
          )}
          <p className="text-white text-base">Add To Cart</p>
        </span>
      )}
    </motion.button>
  );
}

export default AddToCartBtn;
