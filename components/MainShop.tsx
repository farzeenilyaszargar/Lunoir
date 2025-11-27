'use client';

import { useState } from "react";
import Image from "next/image";
import { products } from "@/lib/products";

function Stars({ rating = 5 }: { rating?: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < full ? "fill-yellow-400" : "fill-zinc-200"}`}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductGrid() {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
  
    const handleSizeChange = (id: number, size: string) => {
      setSelectedSizes((prev) => ({ ...prev, [id]: size }));
    };
  
    const handleAddToCart = (product: any) => {
      const size = selectedSizes[product.id] || product.sizes[0]; // default first size
      const cartItem = { ...product, size };
  
      // Get existing cart
      const stored = localStorage.getItem("cartItems");
      const cart = stored ? JSON.parse(stored) : [];
  
      // Add new product
      cart.push(cartItem);
      localStorage.setItem("cartItems", JSON.stringify(cart));
  
      alert(`${product.name} (${size}) added to cart!`);
    };

  return (
    <section id="grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 ">
      <div id='shop-section' className="flex items-end justify-between scroll-mt-30">
        <h2 className="text-2xl font-bold">Best sellers</h2>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({ id, name, price, color, badge, tcolor, image, rating, totalReviews, sizes }: { id:number, name: string; price: number; color: string; tcolor: string; badge: string; image: string, rating: number, totalReviews: number, sizes: string[] }) {
  return (
    <a href={"/shop/"+id} className="group rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square ">
        <div className="absolute inset-0 grid place-items-center bg-zinc-100 overflow-hidden ">
          <Image src={image} alt={name} width={200} height={200} className="w-full" />
        </div>
        <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-[10px] font-medium text-white">{badge}</span>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black line-clamp-1">{name}</h3>
          <span className="text-sm font-semibold hidden md:block text-green-800">₹{price}</span>

        </div>
        <span className="text-sm font-semibold md:hidden text-green-800">₹{price}</span>

        <div className="  mt-2 flex flex-row md:justify-center justify-start md:gap-2 gap-1 ">
          {
            sizes.map((item, key) => (
              <button key={key} className="border pl-1 pr-1 rounded" >
                {item}
              </button>
            ))
          }
        </div>
        <button className="mt-3 w-full border rounded-xl bg-black py-2 text-white text-sm font-medium hover:bg-white hover:text-black">Add to cart</button>
      </div>
    </a>
  )
}