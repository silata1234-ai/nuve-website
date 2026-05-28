import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingBookingButton from "./components/FloatingBookingButton";
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
  title: "NUVÉ Beauty Salon | Varna",
  description:
    "NUVÉ Beauty Salon във Варна - фризьорство, грим, маникюр, мигли и вежди в премиум beauty пространство.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingBookingButton />
      </body>
    </html>
  );
}
