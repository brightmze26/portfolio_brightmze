// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],   
  subsets: ["latin"],
  variable: "--font-poppins",      
});

export const metadata: Metadata = {
  title: "Bright — Portfolio",
  description: "Portfolio",
  icons: {
    icon: "/images/logo-bright.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* hanya gunakan font yang dipakai */}
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
