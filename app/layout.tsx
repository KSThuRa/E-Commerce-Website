import "./globals.css";
import { CartProvider } from "@/components/providers/cart-provider";

export const metadata = {
  title: "YG Mart — Modern Store",
  description: "Modern responsive e-commerce storefront and admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
