import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/globals.css";
import Icon from "@/components/ui/icon/Icon";

export const metadata: Metadata = {
  title: "simple smile",
  description: "dentist clinic with simple website design",
  applicationName: "Simple Smile",
  keywords: "dentist, clinic, react",
};

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <a
          className="fixed bottom-10 left-4 z-50 cursor-pointer"
          href="https://api.whatsapp.com/send?phone=201069992895"
          rel="noreferrer"
          target="_blank"
        >
          <Icon icon="fa-brands fa-whatsapp" />
        </a>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
