import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopNav from "@/components/reusable/TopNav";
import UnifiedNavWrapper from "@/components/reusable/UnifiedNavWrapper";
import Footer from "@/components/reusable/Footer";
import { generateMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = generateMetadata({
  title: "Apex Roofing Solutions | Residential Roofing in Dallas, TX",
  description: "Dallas's premier roofing company providing expert installation, repair, and replacement services. Licensed, insured, and trusted since 2010. Get your free quote today!",
  path: "/",
  keywords: "Dallas roofing, roof repair Dallas, roof replacement, storm damage repair, emergency roofing, residential roofing",
  robots: "index, follow",
  themeColor: "#2F4F4F"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2F4F4F" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Navigation */}
        <header>
          <UnifiedNavWrapper />
        </header>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* ✅ JSON-LD Schema for LocalBusiness */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "Apex Roofing Solutions",
            url: "https://dblseo-roofing.vercel.app",
            logo: "/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main St",
              addressLocality: "Dallas",
              addressRegion: "TX",
              postalCode: "75201",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7767,
              longitude: -96.797,
            },
            telephone: "+1-214-555-1234",
            service: [
              { "@type": "Service", serviceType: "Roof Installation" },
              { "@type": "Service", serviceType: "Roof Repair" },
              { "@type": "Service", serviceType: "Roof Replacement" },
              {
                "@type": "Service",
                serviceType: "Roof Inspection and Maintenance",
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
