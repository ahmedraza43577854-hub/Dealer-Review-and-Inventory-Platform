import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DealerNavigationProvider } from "@/contexts/dealer-navigation-context";
import { SITE } from "@/config/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Find Your Next Car Nationwide`,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <DealerNavigationProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </DealerNavigationProvider>
      </body>
    </html>
  );
}
