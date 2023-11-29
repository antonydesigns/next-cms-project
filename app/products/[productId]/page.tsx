import { ProductType } from "@/app/(homepage)/(components)/type";

export function generateStaticParams() {
  const products = [
    { productId: "1", productName: "iPhone 13", price: 2400 },
    { productId: "2", productName: "iPhone 14", price: 24000 },
    { productId: "3", productName: "iPhone 15", price: 240000 },
  ];
  const arr = products.map((product: ProductType) => ({
    productId: product.productId,
    productName: product.productName,
  }));

  return arr;
}

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;

  const products = [
    { productId: "1", productName: "iPhone 13", price: 2400 },
    { productId: "2", productName: "iPhone 14", price: 24000 },
    { productId: "3", productName: "iPhone 15", price: 240000 },
  ];

  const index = products.findIndex(
    (product) => product.productId === productId
  );
  const product: ProductType = products[index];

  return <>Product Page for {product.productName}</>;
}
