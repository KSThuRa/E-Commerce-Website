import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
const cats = [
  "Shoes",
  "Tech",
  "Home",
  "Accessories",
  "Bags",
  "Clothing",
  "Lifestyle",
];
export default function Categories() {
  return (
    <>
      <Header />
      <main className="container-page py-16">
        <h1 className="text-5xl font-black">Categories</h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <Link
              key={c}
              href="/products"
              className="rounded-3xl bg-soft p-10 transition hover:-translate-y-1"
            >
              <span className="text-sm text-gray-500">0{i + 1}</span>
              <h2 className="mt-12 text-2xl font-black">{c}</h2>
              <p className="mt-2 text-sm text-gray-500">Explore collection →</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
