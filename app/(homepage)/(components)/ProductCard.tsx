"use client";

import React from "react";
import { AuthStore } from "@/app/login/configs/store";
import Link from "next/link";

export default function ProductCard({
  productId,
  productName = "Untitled",
  price = "Price not available",
}: {
  productId: string;
  productName?: string;
  price?: number | string;
}) {
  const loggedIn = AuthStore((store) => store.loggedIn);
  const className = `flex flex-col border rounded-lg px-3 py-3 justify-center items-center min-h-[250px]`;

  return (
    <>
      {productId !== "empty" && (
        <div className={className}>
          <div key={productId} className="">
            <h2>{productName}</h2>
            <p>${price}</p>
          </div>
        </div>
      )}

      {productId === "empty" && loggedIn && (
        <Link
          href={"/new-product"}
          className={`${className} bg-gray-700 hover:bg-gray-600 cursor-pointer`}
        >
          <p>+ Add to store</p>
        </Link>
      )}
    </>
  );
}
