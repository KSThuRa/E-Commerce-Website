import Header from "@/components/header";
import Footer from "@/components/footer";
export default function About() {
  return (
    <>
      <Header />
      <main className="container-page py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            About YG Mart
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight">
            We believe everyday products can be extraordinary.
          </h1>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
