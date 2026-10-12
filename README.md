# ECM Marketplace: Frontend

React client for a multi-vendor e-commerce marketplace: a storefront for buyers and a dashboard for sellers, covering products, coupons, flash-sale events, orders, Stripe checkout and buyer–seller messaging.

**Live:** https://ecm-frontend.onrender.com · **Backend repo:** [ecm-backend](https://github.com/umar-abid06/ecm-backend)

<!-- TODO: add 3 screenshots or a 20-second GIF here: storefront, checkout, seller dashboard -->

## Features
- **Storefront:** home with categories, featured products, best deals, best sellers and sponsored items; product details with ratings; cart; FAQ
- **Checkout:** multi-step checkout with address selection and **Stripe Elements** payment, then an order success page and order details
- **Accounts:** registration, email activation, login, profile, order history
- **Seller side:** shop creation and login, seller dashboard for products, coupons, events, orders and withdrawals (MUI DataGrid tables)
- **Events:** flash sales with live countdowns
- **Robustness:** route guards for buyer/seller areas, error boundary, loading and not-found states

## Tech and why
| Concern | Choice |
|---|---|
| Build | Vite + React 18 |
| Server state | **TanStack Query** (caching, refetching) over an Axios/apisauce API client |
| Client state | **Zustand** domain stores: auth, user, cart, wishlist, products, categories, events, orders, seller |
| Forms | react-hook-form + yup validation |
| UI | Tailwind CSS + MUI (DataGrid for seller tables), Framer Motion, Lottie |
| Payments | @stripe/react-stripe-js |
| Quality | ESLint (react, hooks, refresh) |
| Delivery | Docker, deployed on Render |

## Structure
```
src/
  api/         apiClient, endpoints, request wrapper
  auth/        route guards
  components/  feature components (cart, checkout, events, products, profile, shop, layout …)
  pages/       route-level pages (Home, Products, Checkout, Payment, ShopCreate, …)
  routes/      route definitions
  store/       Zustand stores per domain
  hooks/ context/ utils/ styles/
```

## Run locally
```bash
cp .env.sample .env    # VITE_SERVER (API URL), VITE_STRIPE_KEY …
npm install
npm run dev            # http://localhost:5173
```

## Roadmap
- [ ] Remove unused Redux deps · TypeScript migration · Vitest + React Testing Library · Playwright e2e for checkout
- [ ] Real-time chat (Socket.io) and order notifications
- [ ] AI: semantic search and an AI description helper in the seller dashboard
- [ ] Lighthouse/a11y pass and image optimisation

## Author
Muhammad Umar Abid · [LinkedIn](https://linkedin.com/in/muhammad-umar-b3687a196) · built 09/2024 – 05/2025
