import type { Metadata } from "next";
import "./globals.css";
import { Fira_Sans, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["300","400","500","600","700","800"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400","500","600","700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {

  title: "Tesseract — Robust ML/CV Systems",
  description: "Tesseract is a lab-style portfolio for production-grade computer vision systems under real-world constraints.",
  metadataBase: new URL("https://tesseract.com"),
  openGraph: {
    title: "Tesseract",
    description: "Robust ML/CV Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesseract",
    description: "Robust ML/CV Systems",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="relative">
          <div className="aurora" aria-hidden="true" />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
