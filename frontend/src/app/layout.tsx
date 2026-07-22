import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { DealerNavigationProvider } from "@/contexts/dealer-navigation-context";
import { SITE } from "@/config/constants";
import { INDEXABLE_ROBOTS } from "@/config/seo";
import { getMetadataBase } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  robots: INDEXABLE_ROBOTS,
  verification: {
    google: "uH0NcvaewFx90B1HkKZhtA363nR4POJUN5N7FnLKu54",
  },
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  other: {
    publisher: SITE.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <GoogleAnalytics />
        <DealerNavigationProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </DealerNavigationProvider>
      </body>
    </html>
  );
}
