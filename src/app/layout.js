import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='light'>
      <body>
        <Navbar />
        <div className='min-h-screen'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
