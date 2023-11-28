import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar py-3">
        <Link href="/" className="pl-3 underline">
          Home
        </Link>
      </div>
    </>
  );
}
