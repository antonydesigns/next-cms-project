"use client";
import React, { useState, useEffect } from "react";
import { AuthStore } from "@/app/login/configs/store";

export default function Login() {
  const setLoggedIn = AuthStore((store) => store.setLoggedIn);
  const loggedIn = AuthStore((store) => store.loggedIn);
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (value === process.env.NEXT_PUBLIC_CODE) {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    console.log("Login: ", loggedIn);
  }, [loggedIn]);

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <label htmlFor="code">Enter code:</label>
          <input
            className="p-1 ml-3 bg-[#172024] border border-white"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black text-white rounded-md py-1 px-3 ml-2 hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
