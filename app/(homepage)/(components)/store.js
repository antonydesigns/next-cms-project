import { create } from "zustand";

export const ModelContentStore = create((set) => ({
  modelContent: [
    { productId: "1", productName: "iPhone 13", price: 2400 },
    { productId: "2", productName: "iPhone 14", price: 24000 },
    { productId: "3", productName: "iPhone 15", price: 240000 },
  ],
}));
