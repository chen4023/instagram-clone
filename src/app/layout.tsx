import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className='w-full max-w-screen-xl mx-auto overflow-auto'>
        <header className="sticy top-0 bg-white z-10 border-b"><Navbar /></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
