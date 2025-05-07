"use client";
import Link from "next/link";
// import { getUserCart } from "@/lib/api/data-service.api";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";
import { useCounter } from "@/context/providers/CounterProvider";

function CartBadge() {
  const { cartCount, getCurrentCartProducts } = useCounter();
  const getCurrentCartProductsCallback = useCallback(
    (num: number) => getCurrentCartProducts(num),
    [getCurrentCartProducts]
  );

  const { data } = useSession();
  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch(`http://localhost:3000/api/cart/get`, {
          headers: {
            Authorization: `Bearer ${data?.token}`,
          },
        });
        if (!res.ok) throw new Error(res.statusText);
        const payload = await res.json();
        getCurrentCartProductsCallback(payload.numOfCartItems);
      } catch (e) {
        if (e instanceof Error) throw new Error(e.message);
      }
    }
    if (data?.token) fetchCart();
  }, [data, getCurrentCartProductsCallback]);

  return (
    <Link href="/cart">
      <div className={` relative `}>
        {cartCount > 0 && (
          <div className="absolute -top-3 -right-3  bg-primary-dark w-5 h-5 rounded-full flex justify-center items-center ">
            <p className="text-white">{cartCount}</p>
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </Link>
  );
}

export default CartBadge;
