import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony Automotive - Auto Repair Shop in Gaithersburg, MD",
  description: "Professional auto repair services in Gaithersburg, MD. Brake repair, oil changes, tire services, emergency auto repair, and suspension repair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Tony Automotive",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8041 Queenair Drive Suite 2",
                "addressLocality": "Gaithersburg",
                "addressRegion": "MD",
                "postalCode": "20879",
                "addressCountry": "US"
              },
              "telephone": "+13014016669",
              "url": "https://www.tonyautomotive.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "08:00",
                  "closes": "13:00"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}