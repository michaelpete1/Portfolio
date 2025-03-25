import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar"; // Ensure Navbar is included
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gray-100">
        {/* Navbar is included */}
        <Navbar />

        {/* Wrapper div to apply font variables */}
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
