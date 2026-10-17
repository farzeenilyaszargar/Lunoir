export type CartLine = { id: number; size: string; quantity: number };
type CatalogItem = { id: number; sizes: string[]; price: number };
export const CART_KEY = "cartItems";
export const MAX_QUANTITY = 99;

// Accept the old cart format, discard stale products, and never trust saved prices.
export function normalizeCart(value: unknown, catalog: CatalogItem[]): CartLine[] {
  if (!Array.isArray(value)) return [];
  const result: CartLine[] = [];
  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const product = catalog.find((p) => p.id === entry.id);
    if (!product || !product.sizes.includes(entry.size)) continue;
    const quantity = entry.quantity === undefined ? 1 : entry.quantity;
    if (!Number.isSafeInteger(quantity) || quantity < 1) continue;
    const existing = result.find((line) => line.id === entry.id && line.size === entry.size);
    if (existing) existing.quantity = Math.min(MAX_QUANTITY, existing.quantity + quantity);
    else result.push({ id: entry.id, size: entry.size, quantity: Math.min(MAX_QUANTITY, quantity) });
  }
  return result;
}

export function readCart(raw: string | null, catalog: CatalogItem[]): CartLine[] {
  try { return normalizeCart(raw ? JSON.parse(raw) : [], catalog); }
  catch { return []; }
}

export function addItem(lines: CartLine[], id: number, size: string): CartLine[] {
  const found = lines.some((line) => line.id === id && line.size === size);
  return found
    ? lines.map((line) => line.id === id && line.size === size
      ? { ...line, quantity: Math.min(MAX_QUANTITY, line.quantity + 1) } : line)
    : [...lines, { id, size, quantity: 1 }];
}

export function setQuantity(lines: CartLine[], id: number, size: string, quantity: number): CartLine[] {
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) return lines;
  return lines.map((line) => line.id === id && line.size === size ? { ...line, quantity } : line);
}

export function cartTotal(lines: CartLine[], catalog: CatalogItem[]): number {
  return lines.reduce((total, line) => total + (catalog.find((p) => p.id === line.id)?.price ?? 0) * line.quantity, 0);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
}
