"use server";
import { revalidateTag } from "next/cache";
import { getServerUserToken } from "../utils/getUserToken";
//=================================================================
const BASE_API = process.env.API + "/cart";
type AddToCartProps = {
  id: string;
  quantity: number;
};
export async function addToCart({ id, quantity }: AddToCartProps) {
  //==================================================================
  // get token
  const token = await getServerUserToken();
  // const token = (await cookies()).get("e-commerce-token")?.value;

  //==================================================================
  // fetch data
  const res = await fetch(BASE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ product: id, quantity }),
  });
  const payload: APIResponse<CartBase<Cart<CartItems<Product>>>> =
    await res.json();
  if (!res.ok) throw new Error(res.statusText);
  console.log("payload from action", payload);
  if ("cart" in payload && payload.message === "success") {
    revalidateTag("getCart");
    return payload;
  }
  if ("error" in payload || payload.message !== "success")
    throw new Error(payload.message);
}

//============================================== delete from cart =================================================

export async function deleteFromCart(id: string) {
  //==================================================================
  // get token
  // const token = (await cookies()).get("e-commerce-token")?.value;
  const token = await getServerUserToken();
  //==================================================================
  // fetch data

  const res = await fetch(`${BASE_API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("failed to delete from cart");
  const payload: APIResponse<CartBase<Cart<CartItems<Product | []>>>> =
    await res.json();
  if ("cart" in payload && payload.message === "success") {
    revalidateTag("getCart");
    return payload;
  }
  if ("error" in payload || payload.message !== "success")
    throw new Error(payload.message);
}
//========================================= update cart ================================================

export async function updataCartQuantity(id: string, quantity: number) {
  console.log(quantity);
  //==================================================================
  // get token
  // const token = (await cookies()).get("e-commerce-token")?.value;\
  const token = await getServerUserToken();
  //==================================================================
  const res = await fetch(`${BASE_API}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const payload = await res.json();
  revalidateTag("getCart");

  return payload;
}
//============================================== clear cart =============================================

export async function clearCart() {
  const token = await getServerUserToken();
  // const token = (await cookies()).get("e-commerce-token")?.value;
  const res = await fetch(BASE_API, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error(res.statusText);
  const payload = await res.json();
  revalidateTag("getCart");
  return payload;
}
