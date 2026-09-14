import { products } from "@/lib/products";
import { Plus, MoreHorizontal } from "lucide-react";
export default function AdminProducts() {
  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-gray-500">Catalog</p>
          <h1 className="mt-1 text-3xl font-black">Products</h1>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white">
          <Plus size={17} /> Add product
        </button>
      </div>
      <div className="mt-8 overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="border-b bg-soft text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th className="p-4">Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      className="h-12 w-12 rounded-lg object-cover"
                      alt=""
                    />
                    <span className="font-bold">{p.name}</span>
                  </div>
                </td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                    {p.stock > 0 ? "In stock" : "Out"}
                  </span>
                </td>
                <td>
                  <MoreHorizontal />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
