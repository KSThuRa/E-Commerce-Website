import { DollarSign, ShoppingBag, Users, Package } from "lucide-react";
import { products } from "@/lib/products";
const stats = [
  ["Revenue", "$48,290", "+18.4%", DollarSign],
  ["Orders", "1,284", "+12.8%", ShoppingBag],
  ["Customers", "8,492", "+9.2%", Users],
  ["Products", String(products.length), "+2 new", Package],
] as const;
export default function Admin() {
  return (
    <div className="p-5 md:p-8">
      <header>
        <p className="text-sm text-gray-500">Tuesday, September 2026</p>
        <h1 className="mt-1 text-3xl font-black">Dashboard overview</h1>
      </header>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, change, Icon]) => (
          <div key={label} className="rounded-2xl border bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{label}</span>
              <Icon size={20} />
            </div>
            <div className="mt-5 text-3xl font-black">{value}</div>
            <div className="mt-2 text-xs font-bold text-green-600">
              {change} this month
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border bg-white p-6">
          <div className="flex justify-between">
            <h2 className="font-bold">Sales overview</h2>
            <select className="rounded-lg border px-3 py-2 text-sm">
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="mt-8 flex h-64 items-end gap-2">
            {[
              40, 55, 45, 70, 60, 82, 68, 90, 72, 96, 76, 88, 65, 84, 92, 75,
              100, 83, 95, 72,
            ].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-ink/90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </section>
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="font-bold">Top products</h2>
          <div className="mt-5 grid gap-4">
            {products.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center gap-3">
                <img
                  src={p.image}
                  className="h-12 w-12 rounded-lg object-cover"
                  alt=""
                />
                <div className="flex-1">
                  <div className="text-sm font-bold">{p.name}</div>
                  <div className="text-xs text-gray-500">
                    {p.stock} in stock
                  </div>
                </div>
                <div className="text-sm font-bold">${p.price}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
