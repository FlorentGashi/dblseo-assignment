import { Metadata } from 'next';

export const BASE_URL = 'https://dblseo-roofing.vercel.app';

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
  robots?: string;
  themeColor?: string;
  viewport?: {
    width: string;
    initialScale: number;
    maximumScale: number;
    userScalable: boolean;
  };
  verification?: {
    google?: string;
  };
  authors?: Array<{ name: string }>;
  category?: string;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  structuredData?: Record<string, any>;
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage = '/og-image.jpg',
  keywords,
  robots,
  themeColor = '#2F4F4F',
  structuredData,
}: MetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  // Generate unique title and description based on page
  const pageTitle = path === '/' ? title : `${title} | Apex Roofing Dallas`;
  const pageDescription = description + ` Contact Apex Roofing Dallas at (800) 317-4791 for expert roofing services.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || `${title.toLowerCase()}, dallas roofing, roof repair, roof replacement, roofing contractor dallas`,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: `${title} - Apex Roofing Dallas`,
        }
      ],
      siteName: 'Apex Roofing Solutions',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [fullOgImage],
      site: '@apexroofing',
      creator: '@apexroofing',
    },
    robots: robots || {
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
    other: {
      'theme-color': themeColor,
      'msapplication-TileColor': themeColor,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
    },
    // Structured data can be added per page
    ...(structuredData && { 
      additionalMetaTags: [
        {
          name: 'application/ld+json',
          content: JSON.stringify(structuredData)
        }
      ]
    })
  };
}
