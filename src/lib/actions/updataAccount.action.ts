"use server";

import { revalidateTag } from "next/cache";
import { getServerUserToken } from "../utils/getUserToken";
const BASE_URL = process.env.API + "/auth";

//=================================== user information ==============================================

export async function updateImageAction(data: FormData) {
  try {
    const token = await getServerUserToken();
    const res = await fetch(BASE_URL + "/upload-photo", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    if (!res.ok) throw new Error(res.statusText);
    const payload = await res.json();
    // revalidation data
    revalidateTag("updateProfile");
    
    return payload;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
      return {
        message: e.message,
      };
    }
  }
}
