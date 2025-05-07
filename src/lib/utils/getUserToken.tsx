import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export async function getServerUserToken() {
  const session = await getServerSession(authOptions)
  if(!session) throw new Error("no session found")
  const token = session?.token
  return token
}