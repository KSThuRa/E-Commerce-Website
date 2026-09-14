import { Product } from "@/types";
import ProductCard from "./product-card";
export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
