import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is a portfolio website for Madhu Umashankar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen ${oswald.variable} ${barlow.variable} antialiased `}
      >
        <Navbar></Navbar>
        <div className='sm:ml-[2.5rem] flex flex-col items-center '>
          {children}
        </div>
      </body>
    </html>
  );
}
