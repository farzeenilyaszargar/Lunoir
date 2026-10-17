import Header from "@/components/MainHeader";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ShopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => String(item.id) === id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-md px-5 py-10">
        <Link href="/#shop-section" className="mb-5 inline-block text-sm text-zinc-600 hover:text-black">← Back to shirts</Link>
        <ProductCard product={product} detail />
      </main>
    </>
  );
}
