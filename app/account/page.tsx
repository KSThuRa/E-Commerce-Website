import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Account() {
  return (
    <>
      <Header />
      <main className="container-page py-20">
        <div className="mx-auto max-w-lg">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
            Customer portal
          </p>
          <h1 className="mt-2 text-4xl font-black">Welcome back.</h1>
          <form className="mt-10 grid gap-4">
            <input
              className="rounded-xl border px-4 py-4 outline-none"
              placeholder="Email"
            />
            <input
              className="rounded-xl border px-4 py-4 outline-none"
              placeholder="Password"
              type="password"
            />
            <button className="rounded-xl bg-ink py-4 font-bold text-white">
              Sign in
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            YG Mart
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
