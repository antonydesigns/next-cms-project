"use client";
import React, { useEffect } from "react";
import { AuthStore } from "../login/configs/store";

export default function CheckIfLoggedIn() {
  const setLoggedIn = AuthStore((store) => store.setLoggedIn);
  useEffect(() => {
    const key = window.localStorage.getItem("key");
    if (key !== null && JSON.parse(key) === process.env.NEXT_PUBLIC_CODE) {
      setLoggedIn(true);
    }
  }, []);
  return <></>;
}
