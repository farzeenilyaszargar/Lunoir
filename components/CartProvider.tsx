"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products } from "@/lib/products";
import { addItem, CART_KEY, cartTotal, readCart, setQuantity, type CartLine } from "@/lib/cart";

type CartContextValue = {
  lines: CartLine[];
  ready: boolean;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (id: number, size: string) => void;
  remove: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  count: number;
  total: number;
  storageError: boolean;
};
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    try { setLines(readCart(localStorage.getItem(CART_KEY), products)); }
    catch { setStorageError(true); }
    setReady(true);
    const sync = (event: StorageEvent) => {
      if (event.storageArea === localStorage && (event.key === CART_KEY || event.key === null)) {
        setLines(readCart(event.newValue, products));
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      const serialized = JSON.stringify(lines);
      if (localStorage.getItem(CART_KEY) !== serialized) localStorage.setItem(CART_KEY, serialized);
      setStorageError(false);
    } catch { setStorageError(true); }
  }, [lines, ready]);

  const add = (id: number, size: string) => {
    if (!ready || !products.some((p) => p.id === id && p.sizes.includes(size))) return;
    setLines((previous) => addItem(previous, id, size));
    setOpen(true);
  };

  return (
    <CartContext.Provider value={{
      lines, ready, isOpen, setOpen, add, storageError,
      remove: (id, size) => setLines((previous) => previous.filter((line) => line.id !== id || line.size !== size)),
      updateQuantity: (id, size, quantity) => setLines((previous) => setQuantity(previous, id, size, quantity)),
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      total: cartTotal(lines, products),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used within CartProvider");
  return cart;
}
