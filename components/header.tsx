"use client";

import Link from "next/link";
import { Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/providers/cart-provider";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-1/1 z-40 border-b  backdrop-blur rounded-lg">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          YG Mart<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link href="/">Shop</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/search" aria-label="Search">
            <Search size={20} />
          </Link>
          <Link href="/account" aria-label="Account">
            <UserRound size={20} />
          </Link>
          <Link href="/cart" className="relative" aria-label="Cart">
            <ShoppingBag size={21} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] text-white">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t px-4 py-4 md:hidden">
          <div className="container-page flex flex-col gap-4 font-semibold">
            <Link href="/">Shop</Link>
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
