import Navbar from "@/components/Header/Navbar";
import "./globals.css";
import Banner from "@/components/Header/Banner";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Anytime Fitness",
  description: "Anytime Fitness website concept",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
