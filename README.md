# Clothing App

A starter storefront built with **React** and **Next.js**.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS (configured with PostCSS + Autoprefixer)
- ESLint with `next/core-web-vitals`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Configuration

1. Copy `.env.example` to `.env.local`.
2. Fill in real values in `.env.local` (never commit secrets).

```bash
cp .env.example .env.local
```

The repository is configured to ignore local env files (`.env`, `.env.*`) while still allowing `.env.example` to be committed for safe defaults.


## Available Scripts

- `npm run dev` – start the local dev server
- `npm run build` – build for production
- `npm run start` – run the production server
- `npm run lint` – lint the project
