import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/product-grid";
import { products } from "@/lib/products";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="container-page grid min-h-[620px] items-center gap-8 py-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.25em] text-accent">
              New collection · 2026
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-7xl">
              Better things for everyday life.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              Curated essentials with clean design, honest materials and lasting
              quality.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/products"
                className="rounded-full bg-ink px-7 py-4 text-sm font-bold text-white"
              >
                Shop collection
              </Link>
              <Link
                href="/about"
                className="rounded-full border px-7 py-4 text-sm font-bold"
              >
                Our story
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-soft">
            <img
              className="h-[520px] w-full object-cover"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
              alt="Modern retail store"
            />
          </div>
        </section>
        <section className="container-page py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Featured
              </p>
              <h2 className="mt-2 text-3xl font-black">Made to be used.</h2>
            </div>
            <Link href="/products" className="text-sm font-bold underline">
              View all
            </Link>
          </div>
          <ProductGrid products={products.slice(0, 4)} />
        </section>
        <section className="bg-ink py-20 text-white">
          <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                The NOVA standard
              </p>
              <h2 className="mt-3 text-4xl font-black">
                Less noise. More good stuff.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-gray-300">
              We focus on products that earn their place: functional, beautiful
              and built for repeat use.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
