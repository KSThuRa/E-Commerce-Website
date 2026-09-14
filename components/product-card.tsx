"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/components/providers/cart-provider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <article className="group">
      <Link
        href={`/products/${product.id}`}
        className="relative block overflow-hidden rounded-2xl bg-soft"
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex items-start justify-between gap-3 py-4">
        <div>
          <Link href={`/products/${product.id}`} className="font-bold">
            {product.name}
          </Link>
          <p className="mt-1 text-sm text-gray-500">
            {product.category} · ★ {product.rating}
          </p>
        </div>
        <div className="text-right">
          <div className="font-bold">${product.price}</div>
          {product.oldPrice && (
            <div className="text-xs text-gray-400 line-through">
              ${product.oldPrice}
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="flex w-full items-center justify-center gap-2 rounded-xl border py-3 text-sm font-bold transition hover:bg-ink hover:text-white"
      >
        <ShoppingBag size={17} /> Add to cart
      </button>
    </article>
  );
}
