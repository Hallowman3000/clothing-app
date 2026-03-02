import './globals.css';

export const metadata = {
  title: 'Clothing App',
  description: 'Browse seasonal styles in a Next.js + React storefront.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
