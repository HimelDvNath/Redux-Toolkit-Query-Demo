# Redux Toolkit Query Demo 
*Redux Toolkit Query + Tailwind CSS demo*

This is a minimal **Next.js** application that demonstrates how to use
[Redux Toolkit](https://redux-toolkit.js.org/) and
[RTK Query](https://redux-toolkit.js.org/rtk-query/overview) to fetch and
cache data from an API. It displays a list of products in a responsive table,
with the ability to select a product and highlight the row.

The app was bootstrapped with `create-next-app` and uses TypeScript.

---

## 🔧 Features

- Next.js pages and API routes
- `@reduxjs/toolkit` store with slices for data (`apiSlice`) and UI state
  (`uiSlice`)
- RTK Query `createApi` for fetching `/products`
- Tailwind CSS for simple styling and dark mode support
- Selectable table rows with Redux state

---

## 🚀 Getting started

1. **Clone the repo**  
   ```bash
   git clone <project‑repo‑url>
   cd mini-project3
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set environment variable**
    Create a .env.local (or use your shell) with:
    ```bash
    NEXT_PUBLIC_API_URL=https:api.com   # or your real API
    ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.
   
## 🧩 Project structure
```bash
/components   – reusable UI (e.g. ProductTable)
/pages        – Next.js pages/API routes
/rtk          – Redux Toolkit store, apiSlice, uiSlice
```
   
