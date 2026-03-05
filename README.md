# Clothing App

A starter storefront built with **React** and **Next.js**.

## Stack

- Next.js 14 (App Router)
- React 18
- ESLint with `next/core-web-vitals`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` – start the local dev server
- `npm run build` – build for production
- `npm run start` – run the production server
- `npm run lint` – lint the project

## Installing additional npm packages in restricted networks

If your environment returns `403 Forbidden` when installing packages (for example `tailwindcss`), use the helper command:

```bash
npm run add -- tailwindcss
```

If public npm is blocked, point to your allowed internal registry/mirror:

```bash
NPM_REGISTRY_URL=https://<your-internal-registry>/npm/ npm run add -- tailwindcss postcss autoprefixer
```

