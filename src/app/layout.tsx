import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
<link rel="icon" href="/favicon.ico" />

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "McATTOH LTD | AI, Software & Data Science Solutions",
  description:
    "McATTOH LTD is a cutting-edge development, AI, and data science studio specializing in custom software, website, and mobile app development. We provide AI-driven solutions, machine learning models, NLP, computer vision, and Brain-Computer Interface (BCI) technology to empower businesses with innovation.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
