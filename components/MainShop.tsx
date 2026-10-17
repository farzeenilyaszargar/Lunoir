import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div id="shop-section" className="scroll-mt-30">
        <h2 className="text-2xl font-bold">Best sellers</h2>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
