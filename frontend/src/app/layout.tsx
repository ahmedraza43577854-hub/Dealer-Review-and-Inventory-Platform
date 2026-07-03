import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DealerNavigationProvider } from "@/contexts/dealer-navigation-context";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Find Trusted Dealerships in ${SITE.region}`,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <DealerNavigationProvider>
          <Navbar />
          <main className="flex-1 pt-[4.25rem]">{children}</main>
          <Footer />
        </DealerNavigationProvider>
      </body>
    </html>
  );
}
