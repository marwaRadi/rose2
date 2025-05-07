"use server";
 // register
import {  RegisterSchema } from "../schemes/auth.schema";
const BASE_URL = process.env.API + "/auth";
export async function registerAction(data: RegisterSchema) {
  const res = await fetch(BASE_URL + "/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const payload: APIResponse<LoginRegisterResponse> = await res.json();
  if ("user" in payload && payload.message === "success") return payload;

  if ("error" in payload || payload.message !== "success") return payload;
}

