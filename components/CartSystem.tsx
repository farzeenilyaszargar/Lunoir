"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { products } from "@/lib/products";
import { formatPrice, MAX_QUANTITY } from "@/lib/cart";
import { useCart } from "./CartProvider";

export default function Cart() {
  const { lines, count, total, ready, isOpen, setOpen, remove, updateQuantity, storageError } = useCart();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (!isOpen) {
      if (element.open) element.close();
      return;
    }
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const triggerElement = trigger.current;
    if (!element.open) element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (element.open) element.close();
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
      else triggerElement?.focus();
    };
  }, [isOpen]);

  return (
    <div className="md:ml-5">
      <button ref={trigger} type="button" disabled={!ready} onClick={() => setOpen(true)} aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`} aria-haspopup="dialog" className="relative mr-5 md:mr-10">
        <Image src="/icons/cart.gif" alt="" width={40} height={40} className="invert" unoptimized />
        {count > 0 && <span aria-hidden="true" className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">{count}</span>}
      </button>
      <span className="sr-only" role="status" aria-live="polite">{ready ? `${count} items in cart. Total ${formatPrice(total)}.` : "Loading cart"}</span>
      <dialog ref={dialog} aria-labelledby="cart-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} className="cart-dialog fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-dvh w-full max-w-md border-0 bg-white p-0 text-black shadow-2xl backdrop:bg-black/35">
        <div className="flex h-full flex-col" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-5">
            <h2 id="cart-title" className="text-xl font-black">Your cart <span className="text-sm font-normal text-zinc-500">({count})</span></h2>
            <button autoFocus type="button" onClick={() => setOpen(false)} aria-label="Close cart" className="rounded-full p-2 hover:bg-zinc-100">
              <Image src="/icons/cross.png" alt="" width={24} height={24} className="invert" unoptimized />
            </button>
          </div>
          {storageError && <p role="alert" className="border-b border-amber-200 bg-amber-50 px-5 py-3 text-sm">Your browser couldn’t save this cart. You can still edit it, but it may be lost when you leave.</p>}
          {lines.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <Image src="/icons/cart.gif" alt="" width={72} height={72} className="mb-5 invert" unoptimized />
              <p className="text-xl font-bold">Your cart is waiting</p>
              <p className="mt-2 text-sm text-zinc-500">Find a shirt that feels like you.</p>
              <Link href="/#shop-section" onClick={() => setOpen(false)} className="mt-6 rounded-full bg-black px-6 py-3 text-sm text-white">Explore shirts</Link>
            </div>
          ) : (
            <>
              <ul className="min-h-0 flex-1 divide-y divide-zinc-200 overflow-y-auto px-5">
                {lines.map((line) => {
                  const product = products.find((p) => p.id === line.id)!;
                  return (
                    <li key={`${line.id}-${line.size}`} className="flex gap-4 py-5">
                      <Link href={`/shop/${product.id}`} onClick={() => setOpen(false)} className="shrink-0 self-start overflow-hidden rounded-xl bg-zinc-100">
                        <Image src={product.image} alt={product.name} width={88} height={110} className="h-28 w-22 object-cover" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link href={`/shop/${product.id}`} onClick={() => setOpen(false)} className="text-sm font-bold">{product.name}</Link>
                        <p className="mt-1 text-xs text-zinc-500">Size {line.size} · {formatPrice(product.price)} each</p>
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <div role="group" aria-label={`Quantity for ${product.name}, size ${line.size}`} className="flex items-center rounded-lg border border-zinc-300">
                            <button type="button" disabled={line.quantity <= 1} onClick={() => updateQuantity(line.id, line.size, line.quantity - 1)} aria-label={`Decrease ${product.name} size ${line.size} quantity`} className="h-9 w-9 disabled:opacity-30">−</button>
                            <span className="min-w-7 text-center text-sm tabular-nums" aria-label={`Quantity ${line.quantity}`}>{line.quantity}</span>
                            <button type="button" disabled={line.quantity >= MAX_QUANTITY} onClick={() => updateQuantity(line.id, line.size, line.quantity + 1)} aria-label={`Increase ${product.name} size ${line.size} quantity`} className="h-9 w-9 disabled:opacity-30">+</button>
                          </div>
                          <span className="text-sm font-semibold tabular-nums">{formatPrice(product.price * line.quantity)}</span>
                        </div>
                        <button type="button" onClick={() => remove(line.id, line.size)} aria-label={`Remove ${product.name} size ${line.size}`} className="mt-2 py-1 text-xs text-zinc-500 underline underline-offset-2 hover:text-red-700">Remove</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="shrink-0 border-t border-zinc-200 bg-zinc-50 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <div className="flex justify-between text-lg font-bold"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
                <p className="mt-2 text-xs text-zinc-500">Online checkout is coming soon. You can save and edit your cart here.</p>
                <Link href="/#shop-section" onClick={() => setOpen(false)} className="mt-4 block rounded-xl border border-black bg-black py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">Continue shopping</Link>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
