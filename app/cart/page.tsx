"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useCart } from "@/components/providers/cart-provider";
export default function CartPage() {
  const { items, total, removeFromCart, updateQuantity } = useCart();
  return (
    <>
      <Header />
      <main className="container-page py-14">
        <h1 className="text-4xl font-black">Your cart</h1>
        {!items.length ? (
          <div className="py-20 text-center">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 rounded-2xl border p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{item.name}</div>
                    <div className="mt-1 text-sm text-gray-500">
                      ${item.price}
                    </div>
                    <div className="mt-5 flex items-center gap-4 text-sm">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-4 underline"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-2xl bg-soft p-6">
              <h2 className="font-bold">Order summary</h2>
              <div className="mt-6 flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="my-6 border-t" />
              <div className="flex justify-between text-lg font-black">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="mt-6 w-full rounded-xl bg-ink py-4 font-bold text-white">
                Checkout
              </button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
