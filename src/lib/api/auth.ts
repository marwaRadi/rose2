//==================================== get login user ==============================================

import { getServerUserToken } from "../utils/getUserToken";

export async function getLoginUserData() {
  const token = await getServerUserToken();

  const res = await fetch(`${process.env.API}/auth/profile-data`, {
    next: { tags: ["updateProfile"] },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error(res.statusText);

  const payload: APIResponse<Record<"user", LoginUser>> = await res.json();
  console.log(payload);
  if ("user" in payload && payload.message === "success") {
    return { data: { ...payload.user }, error: null };
  } else {
    return { error: payload?.message || payload.error };
  }
}
