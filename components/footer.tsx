import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-soft">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="text-2xl font-black">YG Mart.</div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
            Thoughtful products for modern everyday life.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Shop</h3>
          <div className="mt-4 grid gap-2 text-sm text-gray-600">
            <Link href="/products">All products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <div className="mt-4 grid gap-2 text-sm text-gray-600">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/account">My account</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Newsletter</h3>
          <p className="mt-4 text-sm text-gray-600">
            Get product drops and private offers.
          </p>
          <div className="mt-4 flex border-b border-black">
            <input
              className="w-full bg-transparent py-2 outline-none"
              placeholder="Email address"
            />
            <button className="font-bold">→</button>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-gray-500">
        © 2026 NOVA. All rights reserved.
      </div>
    </footer>
  );
}
