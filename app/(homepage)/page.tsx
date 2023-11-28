"use client";

import ProductCard from "./(components)/ProductCard";
import { ModelContentStore } from "@/app/(homepage)/(components)/store";
import { ProductType } from "./(components)/type";

export default function Homepage() {
  const modelContent = ModelContentStore((store) => store.modelContent);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {modelContent &&
          modelContent.map((product: ProductType) => (
            <ProductCard
              productId={product.productId}
              productName={product.productName}
              price={product.price}
            />
          ))}
        <ProductCard productId="empty" />
      </div>
    </>
  );
}
