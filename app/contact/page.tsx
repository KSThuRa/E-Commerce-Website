import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Contact() {
  return (
    <>
      <Header />
      <main className="container-page py-20">
        <div className="mx-auto max-w-xl">
          <h1 className="text-5xl font-black">Contact us</h1>
          <form className="mt-10 grid gap-4">
            <input className="rounded-xl border px-4 py-4" placeholder="Name" />
            <input
              className="rounded-xl border px-4 py-4"
              placeholder="Email"
            />
            <textarea
              className="min-h-40 rounded-xl border px-4 py-4"
              placeholder="Message"
            />
            <button className="rounded-xl bg-ink py-4 font-bold text-white">
              Send message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
