# Clothing App Ecommerce Blueprint

## 1) Product Vision
Build a premium, modern clothing ecommerce storefront that feels like a polished Figma-to-web implementation, with responsive sections, clear conversion paths, and a functioning Next.js backend.

## 2) Requirements Blueprint (Before Build)

### Core user journeys
1. **Discover products** via homepage highlights and `/shop` filtering/search.
2. **Inspect products** on `/product/[slug]` with imagery, specs, and CTAs.
3. **Add to cart** from cards and detail pages with API-backed cart updates.
4. **Manage cart** on `/cart` with quantity edits and removal.
5. **Subscribe to updates** through newsletter form with backend validation.

### Functional requirements
- Dynamic catalog source (single data model for UI + API).
- API routes:
  - `GET /api/products` (filter/search/featured).
  - `GET/POST/PATCH/DELETE /api/cart` for cart operations.
  - `POST /api/newsletter` for email capture (mock success response).
- Responsive pages:
  - `/` home (hero, category chips, featured grid, style story, social proof, newsletter).
  - `/shop` product listing with live filtering.
  - `/product/[slug]` detail view.
  - `/cart` checkout-prep cart summary.
- Functioning buttons for navigation and cart actions.

### Non-functional requirements
- Mobile-first responsive layout.
- Accessible semantic HTML and descriptive alt text.
- Visual consistency through design tokens (color, spacing, radii, shadows).
- Performance-aware image loading via `next/image`.

## 3) Figma-to-Web Component Mapping

| Figma Component Pattern | Web Implementation | Responsive Behavior |
|---|---|---|
| Top navigation bar | Sticky header with brand + nav links + cart badge | Collapses spacing and wraps controls on small screens |
| Hero split section | Two-column text + featured model image | Converts to single column stack on mobile |
| Category pills | Chip button row | Wraps to multiple rows with equal touch target |
| Product card grid | CSS grid cards with image, tags, CTA | 1 col mobile, 2-3 tablet, 4 desktop |
| Feature banners | Elevated panels with neutral gradient background | Stacks vertically under 900px |
| Newsletter block | Card with heading, text, form + status | Input/button stack on narrow viewports |
| Footer links | Multi-column simple footer | Condenses to single column on mobile |

## 4) Visual Direction and Color Grading
- **Primary background:** warm ivory (`#f7f3ef`) to keep fashion-editorial feel.
- **Surface cards:** white with soft shadow.
- **Accent color:** deep plum (`#6f3df4`) for primary actions.
- **Secondary CTA:** charcoal (`#1f2430`) for contrast.
- **Support tones:** muted slate and soft mauve for depth and hierarchy.

## 5) Content & Media Sourcing
Use free-to-access web-hosted fashion images from Unsplash with proper attribution links stored in product data (`sourceUrl` fields).

## 6) Implementation Plan
1. Establish tokens and global layout.
2. Build shared catalog model and API endpoints.
3. Build pages/components tied to API + client state.
4. Validate via lint/build and visual screenshot.
