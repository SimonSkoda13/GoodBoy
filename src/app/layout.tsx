import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good boy",
  description: "PLease help some cute dogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className="min-h-screen flex flex-col text-black">
        <Header />
        <div className="mx-[15%]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
