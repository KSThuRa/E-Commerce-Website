import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/product-grid";
import { products } from "@/lib/products";
export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="container-page py-14">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Shop
        </p>
        <h1 className="mt-2 text-5xl font-black">All products</h1>
        <div className="my-10 flex gap-2 overflow-x-auto pb-2 text-sm font-semibold">
          <button className="whitespace-nowrap rounded-full bg-ink px-5 py-2 text-white">
            All
          </button>
          {[
            "Shoes",
            "Tech",
            "Home",
            "Accessories",
            "Bags",
            "Clothing",
            "Lifestyle",
          ].map((c) => (
            <button
              key={c}
              className="whitespace-nowrap rounded-full border px-5 py-2"
            >
              {c}
            </button>
          ))}
        </div>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  );
}
