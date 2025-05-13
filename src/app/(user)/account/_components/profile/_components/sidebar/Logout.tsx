"use client";

import { signOut } from "next-auth/react";

function Logout() {
  //================================================
  //hooks

  //================================================
  //functions
  function handleLogout() {
    signOut({ redirect: false });
    // router.push(data.url);
  }

  return <button className="inline-block capitalize text-red-500" onClick={handleLogout}>signout</button>;
}

export default Logout;
