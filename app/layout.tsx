import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jet Hu | Senior Full-Stack Engineer & Tickeasy Founder",
  description:
    "Senior full-stack engineer with 10+ years of experience building production software. Founder and engineer behind Tickeasy, an Australian event ticketing and operations platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-6GFKF1K9Y2" />
    </html>
  );
}
