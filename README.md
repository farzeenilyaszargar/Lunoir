# Lunoir Wear

A Next.js storefront with animated artwork, a static shirt catalog, Google sign-in, and a persistent browser cart.

## Development

```sh
npm ci
npm run dev
```

The default URL is http://localhost:3000. If that port is occupied, use `npm run dev -- --port 3001`.

Google sign-in needs `AUTH_SECRET`, `AUTH_GOOGLE_ID`, and `AUTH_GOOGLE_SECRET` in `.env.local`, with the corresponding callback URL registered in Google OAuth. The catalog and cart work without signing in.

## Checks

```sh
npm test
npm run lint
npm run build
```

## Cart

- Products and prices are defined in `lib/products.ts`.
- `CartProvider` shares the cart between pages; `lib/cart.ts` validates stored entries and handles quantities and totals.
- Items are grouped by product and size, with a maximum of 99 per variant.
- The cart persists under the existing `cartItems` localStorage key and synchronizes across tabs. Old duplicate entries are merged; invalid entries are discarded.
- When browser storage is unavailable, the cart works in memory and displays a warning.
- The drawer supports Escape, focus trapping, scroll locking, and reduced-motion preferences.

Checkout, payment processing, inventory verification, and order creation are not connected. Any future checkout must validate prices and availability on the server.
