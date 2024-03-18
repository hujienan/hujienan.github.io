import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jet Hu - Fullstack Developer | UpUpStudy Creator",
  description:
    "Explore Jet Hu's portfolio as a fullstack developer and discover UpUpStudy, the online education platform created by Jet. Learn more about Jet's projects, work experience, and insights into technology and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-6GFKF1K9Y2" />
    </html>
  );
}
