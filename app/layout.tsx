import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ABC Plumber - Professional Plumbing Services in Austin, TX",
    template: "%s | ABC Plumber - Austin, TX"
  },
  description: "Professional plumbing services in Austin, TX. Expert drain cleaning, water heater repair, leak detection, and emergency plumbing. Available 24/7 for all your plumbing needs.",
  keywords: ["plumber Austin TX", "drain cleaning", "water heater repair", "leak detection", "emergency plumbing", "plumbing services Austin"],
  authors: [{ name: "ABC Plumber" }],
  creator: "ABC Plumber",
  publisher: "ABC Plumber",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abcplumber-austin.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Austin",
    "geo.position": "30.2672;-97.7431",
    "ICBM": "30.2672, -97.7431",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abcplumber-austin.com",
    siteName: "ABC Plumber",
    title: "ABC Plumber - Professional Plumbing Services in Austin, TX",
    description: "Professional plumbing services in Austin, TX. Expert drain cleaning, water heater repair, leak detection, and emergency plumbing. Available 24/7 for all your plumbing needs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Plumber - Austin, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abcplumber",
    creator: "@abcplumber",
    title: "ABC Plumber - Professional Plumbing Services in Austin, TX",
    description: "Professional plumbing services in Austin, TX. Expert drain cleaning, water heater repair, leak detection, and emergency plumbing. Available 24/7 for all your plumbing needs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
