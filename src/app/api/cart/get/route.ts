import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = await getToken({ req: request as NextRequest });
  try {
    const res = await fetch(`${process.env.API}/cart`, {
      headers: {
        Authorization: `Bearer ${token?.token}`,
      },
    });

    if (!res.ok) throw new Error(res.statusText);
    const payload = await res.json();
    return NextResponse.json(payload);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: "Something went wrong" });
    }
  }
}
