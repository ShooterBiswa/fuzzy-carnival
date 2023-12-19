import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/client/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Biswajeet Sutar",
  description: "Portfolio of Biswajeet Sutar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col pt-4 items-center ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
