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
          <section className="footerContact panel" aria-label="Contact us">
            <p className="eyebrow">Contact Us</p>
            <div className="footerContactGrid">
              <div>
                <h3>Atelier Lane Studio</h3>
                <p className="muted">742 Willow Street, Suite 18</p>
                <p className="muted">San Francisco, CA 94103</p>
              </div>
              <div>
                <p className="muted">Email</p>
                <a href="mailto:hello@atelierlane.example">hello@atelierlane.example</a>
                <p className="muted footerMeta">Phone</p>
                <a href="tel:+14155550189">+1 (415) 555-0189</a>
              </div>
              <div>
                <p className="muted">Studio Hours</p>
                <p>Mon — Fri · 9:00 AM — 6:00 PM</p>
                <p className="muted footerMeta">Follow</p>
                <p>@atelierlane</p>
              </div>
            </div>
          </section>
          <p className="footerCopyright">© {new Date().getFullYear()} Atelier Lane. Designed for modern essentials.</p>
        </footer>
      </body>
    </html>
  );
}
