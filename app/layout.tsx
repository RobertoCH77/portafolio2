import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Roberto Chacón",
  description: "Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
