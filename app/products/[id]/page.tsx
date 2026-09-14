import Header from "@/components/header";
import Footer from "@/components/footer";
import { products } from "@/lib/products";
import ProductActions from "@/components/product-actions";
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const product = products.find(p => p.id === Number(id)) ?? products[0];
  return <><Header/><main className="container-page py-12"><div className="grid gap-10 md:grid-cols-2"><div className="overflow-hidden rounded-3xl bg-soft"><img src={product.image} alt={product.name} className="w-full object-cover"/></div><div className="py-4 md:py-12"><p className="text-sm font-bold uppercase tracking-widest text-gray-500">{product.category}</p><h1 className="mt-3 text-5xl font-black">{product.name}</h1><div className="mt-5 text-2xl font-bold">${product.price}</div><p className="mt-7 leading-8 text-gray-600">{product.description}</p><p className="mt-4 text-sm">★ {product.rating} · {product.stock} in stock</p><ProductActions product={product}/><div className="mt-10 border-t pt-6 text-sm leading-7 text-gray-600">Free shipping over $100 · 30-day returns · Secure checkout</div></div></div></main><Footer/></>
}