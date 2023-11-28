"use client";
import React, { useState, useEffect } from "react";
import { AuthStore } from "@/app/login/configs/store";
import { useRouter } from "next/navigation";

export default function Login() {
  const loggedIn = AuthStore((store) => store.loggedIn);
  const setLoggedIn = AuthStore((store) => store.setLoggedIn);
  const [value, setValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (value === process.env.NEXT_PUBLIC_CODE) {
      setLoggedIn(true);
      window.localStorage.setItem(
        "key",
        JSON.stringify(process.env.NEXT_PUBLIC_CODE)
      );
      router.push("/");
    }
  }, [value]);

  useEffect(() => {
    if (!loggedIn) {
      window.localStorage.clear();
    }
  }, [loggedIn]);

  return (
    <>
      {!loggedIn && (
        <div>
          <form>
            <label htmlFor="code">Enter code:</label>
            <input
              className="p-1 ml-3 bg-[#172024] border border-white"
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </form>
        </div>
      )}
      {loggedIn && <p>Login successful.</p>}
    </>
  );
}
