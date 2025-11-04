// import 'globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'My Next.js App',
  description: 'Example with MUI Navbar outside app folder',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'white' }}>
        <Navbar />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
