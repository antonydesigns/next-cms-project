"use client";
import React from "react";
import { AuthStore } from "../login/configs/store";

export default function LoginLogout() {
  const loggedIn = AuthStore((store) => store.loggedIn);
  const setLoggedIn = AuthStore((store) => store.setLoggedIn);

  return (
    <>
      {loggedIn ? (
        <div onClick={() => setLoggedIn(false)}>Logout</div>
      ) : (
        <div>Login</div>
      )}
    </>
  );
}
