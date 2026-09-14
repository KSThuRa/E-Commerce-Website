import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/product-grid";
import { products } from "@/lib/products";
export default function Search() {
  return (
    <>
      <Header />
      <main className="container-page py-14">
        <h1 className="text-4xl font-black">Search products</h1>
        <input
          className="mt-8 w-full rounded-2xl border px-5 py-4 outline-none"
          placeholder="Search by product name..."
        />
        <div className="mt-12">
          <ProductGrid products={products.slice(0, 4)} />
        </div>
      </main>
      <Footer />
    </>
  );
}
