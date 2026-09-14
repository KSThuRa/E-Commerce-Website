import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Store,
} from "lucide-react";
export default function AdminSidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r bg-white p-5 lg:block">
      <Link href="/" className="mb-10 block text-2xl font-black">
        YG Mart<span className="text-accent">.</span>
      </Link>
      <nav className="grid gap-1 text-sm font-semibold">
        <Link
          className="flex items-center gap-3 rounded-xl bg-ink px-4 py-3 text-white"
          href="/admin"
        >
          <LayoutDashboard size={18} /> Overview
        </Link>
        <Link
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-soft"
          href="/admin/products"
        >
          <Package size={18} /> Products
        </Link>
        <Link
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-soft"
          href="/admin/orders"
        >
          <ShoppingCart size={18} /> Orders
        </Link>
        <Link
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-soft"
          href="/admin/customers"
        >
          <Users size={18} /> Customers
        </Link>
        <Link
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-soft"
          href="/admin/analytics"
        >
          <BarChart3 size={18} /> Analytics
        </Link>
        <Link
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-soft"
          href="/admin/settings"
        >
          <Settings size={18} /> Settings
        </Link>
        <Link
          className="mt-8 flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-soft"
          href="/"
        >
          <Store size={18} /> View store
        </Link>
      </nav>
    </aside>
  );
}
