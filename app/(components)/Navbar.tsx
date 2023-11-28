import Link from "next/link";
import React from "react";
import LoginLogout from "./LoginLogout";
import AdminLinks from "./AdminLinks";
import { AuthStore } from "../login/configs/store";

export default function Navbar() {
  return (
    <>
      <div className="navbar py-3 px-3 flex justify-between">
        <div className="navigation flex ">
          <Link href="/" className="underline mx-4 ml-0">
            Home
          </Link>
          <AdminLinks />
        </div>
        <Link href="/login" className="mx-4 mr-0 underline">
          <LoginLogout />
        </Link>
      </div>
    </>
  );
}
