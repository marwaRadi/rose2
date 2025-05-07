import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

// fetch all products
export async function getAllProducts() {
  const res = await fetch(`${process.env.API}/products`, {
    next: { tags: ["products"] },
  });
  if (!res.ok) throw new Error("Products not found");
  const payload: APIResponse<BaseItem<Product[]>> = await res.json();

  if ("products" in payload && payload.message === "success") return payload;
  throw new Error(payload.message);
}

// fetch all categories
export async function getAllCategories() {
  const res = await fetch(`${process.env.API}/categories`, {
    next: { tags: ["categories"] },
  });

  const payload: APIResponse<BaseItem<Category[]>> = await res.json();

  if (payload.message === "success" && "categories" in payload) {
    return payload.categories;
  } else {
    throw new Error(payload.message);
  }
}

// get product by id
export async function getProductById(id: string) {
  const res = await fetch(`${process.env.API}/products/${id}`, {
    next: { tags: ["product"] },
  });
  if (!res.ok) throw new Error("Product not found");
  const payload: APIResponse<Product> & Record<"product", Product> =
    await res.json();

  if (payload.message === "success" && "product" in payload)
    return payload.product;

  throw new Error(payload.message);
}
//============================================== Cart APIs==================================================

// get logged in user cart

export async function getUserCart() {
  const session = await getServerSession(authOptions)
  const token =session?.token
  if(!token) return
  const res = await fetch(`${process.env.API}/cart`, {
    next: { tags: ["getCart"] },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("cart not found");
  const payload: APIResponse<CartBase<Cart<CartItems<Product>>>> =
    await res.json();
  if ("cart" in payload && payload.message === "success") return payload;
  if ("error" in payload || payload.message !== "success")
    throw new Error(payload.message);
}
