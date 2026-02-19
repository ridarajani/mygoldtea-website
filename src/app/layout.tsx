import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MyGold   Premium Cookies, Tea, Margarine, Rice & Snacks from Malawi",
  description:
    "Discover MyGold's range of premium cookies, fine tea, quality margarine, wholesome Kilombero rice, and delicious snacks. Malawi's most trusted food brand since 2008.",
  keywords: [
    "MyGold",
    "MyGold cookies",
    "MyGold tea",
    "Malawi margarine",
    "Kilombero rice",
    "African snacks",
    "premium food products Malawi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
