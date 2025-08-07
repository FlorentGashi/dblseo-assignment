import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturesSection } from "@/components/sections/features-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CTASection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Professional Plumbing Services in Austin, TX | ABC Plumber",
  description: "Austin's trusted plumber since 2010. Expert drain cleaning, water heater repair, leak detection & emergency plumbing services. Licensed, insured & available 24/7. Get your free quote today!",
  keywords: ["plumber Austin", "plumbing services Austin TX", "drain cleaning Austin", "water heater repair", "emergency plumber Austin", "leak detection", "Austin plumbing company"],
  openGraph: {
    title: "Professional Plumbing Services in Austin, TX | ABC Plumber",
    description: "Austin's trusted plumber since 2010. Expert drain cleaning, water heater repair, leak detection & emergency plumbing services. Licensed, insured & available 24/7.",
    url: "https://abcplumber-austin.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Plumber - Austin's Trusted Plumbing Professionals",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ABC Plumber",
  "image": "https://abcplumber-austin.com/logo.jpg",
  "telephone": "+15125551234",
  "email": "info@abcplumber-austin.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Congress Ave",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "url": "https://abcplumber-austin.com",
  "sameAs": [
    "https://facebook.com/abcplumber",
    "https://twitter.com/abcplumber",
    "https://instagram.com/abcplumber",
    "https://linkedin.com/company/abcplumber"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "geoRadius": 50000
  },
  "areaServed": [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Georgetown",
    "Pflugerville",
    "Leander"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drain Cleaning",
          "description": "Professional drain cleaning and unclogging services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Heater Repair",
          "description": "Water heater repair, installation, and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Leak Detection",
          "description": "Advanced leak detection and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Plumbing",
          "description": "24/7 emergency plumbing services"
        }
      }
    ]
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Check"],
  "currenciesAccepted": "USD"
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <HeroSection />
      <ServicesOverview />
      <FeaturesSection />
      <BlogSection />
      <CTASection />
    </>
  );
}