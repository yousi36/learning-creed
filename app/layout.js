'use client';
import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const metadata = {
  title: 'My Next.js App',
  description: 'Example with MUI Navbar outside app folder',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideFooterRoutes = ['/login', '/forgot'];
  const shouldHideFooter = hideFooterRoutes.includes(pathname);
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'white' }}>
        <Navbar />
        <main>{children}</main>
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
