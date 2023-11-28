"use client";

import Link from "next/link";
import React from "react";
import { AuthStore } from "../login/configs/store";

export default function AdminLinks() {
  const loggedIn = AuthStore((store) => store.loggedIn);

  return (
    <>
      {loggedIn && (
        <>
          <Link className="underline mx-4" href="/new-product">
            Add new product
          </Link>
        </>
      )}
    </>
  );
}
