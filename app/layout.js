import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Atelier Lane | Modern Clothing Ecommerce',
  description: 'Premium apparel storefront built with Next.js and React.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <Link href="/" className="brand">
            Atelier Lane
          </Link>
          <nav>
            <Link href="/shop">Shop</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="siteFooter">
          <p>© {new Date().getFullYear()} Atelier Lane. Designed for modern essentials.</p>
        </footer>
      </body>
    </html>
  );
}
