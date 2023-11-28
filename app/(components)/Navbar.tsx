import Link from "next/link";
import React from "react";
import LoginLogout from "./LoginLogout";

export default function Navbar() {
  return (
    <>
      <div className="navbar py-3 px-3 flex justify-between">
        <div className="navigation ">
          <Link href="/" className=" underline">
            Home
          </Link>
        </div>
        <Link href="/login" className=" underline">
          <LoginLogout />
        </Link>
      </div>
    </>
  );
}
