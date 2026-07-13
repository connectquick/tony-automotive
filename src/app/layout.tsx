import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import JsonLd from "@/components/site/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Tony Automotive — Auto Repair in Gaithersburg, MD",
    template: "%s | Tony Automotive",
  },
  description:
    "Honest, dealer-quality auto repair in Gaithersburg, MD. Brakes, oil changes, tires, engine and transmission repair, and more — serving Montgomery County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
