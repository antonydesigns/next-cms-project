//import { ModelContentStore } from "@/app/(homepage)/(components)/store";
// import { ProductType } from "@/app/(homepage)/(components)/type";

export function generateStaticParams() {
  /*   const products = ModelContentStore((store) => store.modelContent);

  const arr = products.map((product: ProductType) => ({
    id: product.productId,
  }));
  console.log(arr);

  */ return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return <>Product Page {productId}</>;
}
