"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Prods } from "@/lib/products";
import { formatPrice, MAX_QUANTITY } from "@/lib/cart";
import { useCart } from "./CartProvider";

export default function ProductCard({ product, detail = false }: { product: Prods; detail?: boolean }) {
  const [size, setSize] = useState(product.sizes[0]);
  const { add, ready, lines } = useCart();
  const atLimit = lines.some((line) => line.id === product.id && line.size === size && line.quantity >= MAX_QUANTITY);
  const image = (
    <div className="relative aspect-square overflow-hidden bg-zinc-100">
      <Image src={product.image} alt={product.name} fill sizes={detail ? "(max-width: 640px) 100vw, 448px" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"} className="object-cover transition-transform duration-300 group-hover:scale-105" />
      <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-[10px] font-medium text-white">{product.badge}</span>
    </div>
  );
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {detail ? image : <Link href={`/shop/${product.id}`} aria-label={`View ${product.name}`}>{image}</Link>}
      <div className="p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-1">
          {detail ? <h1 className="text-xl font-black">{product.name}</h1> : <h3 className="text-base font-black"><Link href={`/shop/${product.id}`}>{product.name}</Link></h3>}
          <span className="text-sm font-semibold text-green-800">{formatPrice(product.price)}</span>
        </div>
        {detail && <p className="mt-2 text-sm text-zinc-500">{product.color}</p>}
        <fieldset className="mt-3">
          <legend className="mb-2 text-xs text-zinc-600">Size <span className="font-semibold text-black">{size}</span></legend>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((option) => (
              <button type="button" key={option} aria-label={`${product.name} size ${option}`} aria-pressed={size === option} onClick={() => setSize(option)} className={`min-h-9 min-w-9 rounded-lg border px-2 text-sm transition-colors ${size === option ? "border-black bg-black text-white" : "border-zinc-300 hover:border-black"}`}>
                {option}
              </button>
            ))}
          </div>
        </fieldset>
        <button type="button" disabled={!ready || atLimit} onClick={() => add(product.id, size)} aria-label={`Add ${product.name} to cart`} className="mt-4 w-full rounded-xl border border-black bg-black py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50">
          {atLimit ? "Maximum quantity reached" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}
