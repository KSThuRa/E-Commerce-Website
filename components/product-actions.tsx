"use client";
import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "./providers/cart-provider";
export default function ProductActions({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  return (
    <div className="mt-8 flex gap-3">
      <div className="flex items-center rounded-xl border">
        <button
          className="px-4 py-3"
          onClick={() => setQty(Math.max(1, qty - 1))}
        >
          −
        </button>
        <span>{qty}</span>
        <button className="px-4 py-3" onClick={() => setQty(qty + 1)}>
          +
        </button>
      </div>
      <button
        onClick={() => {
          for (let i = 0; i < qty; i++) addToCart(product);
        }}
        className="flex-1 rounded-xl bg-ink px-6 py-4 font-bold text-white"
      >
        Add to cart
      </button>
    </div>
  );
}
