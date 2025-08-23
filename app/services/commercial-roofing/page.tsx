import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Building2, ShieldCheck, Clock, Wrench } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Commercial Roofing Services Dallas | Apex Roofing',
  description: 'Professional commercial roofing services in Dallas. Flat roofs, TPO, EPDM systems, repairs & maintenance. Licensed contractors, competitive pricing.',
  openGraph: {
    title: 'Commercial Roofing Services Dallas | Apex Roofing',
    description: 'Expert commercial roofing solutions in Dallas. Quality materials & competitive pricing.',
    url: 'https://apexroofing.com/services/commercial-roofing',
    images: [
      {
        url: '/services/commercial-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial Roofing Services',
      },
    ],
  },
};

const features = [
  {
    icon: Building2,
    title: 'Multi-System Expertise',
    description: 'Experienced with all commercial roofing systems including TPO, EPDM, modified bitumen, and metal roofing.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured team with specific commercial roofing certifications.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'Strategic planning and execution to minimize impact on your business operations.',
  },
  {
    icon: Wrench,
    title: 'Preventive Maintenance',
    description: 'Regular maintenance programs to extend roof life and prevent costly repairs.',
  },
];

const services = [
  {
    title: 'Commercial Roof Installation',
    description: 'New roof installations for commercial buildings of all sizes',
    items: [
      'Flat roof systems',
      'TPO & EPDM roofing',
      'Modified bitumen',
      'Metal roofing systems',
    ],
  },
  {
    title: 'Commercial Roof Repair',
    description: 'Expert repairs for all types of commercial roofing systems',
    items: [
      'Leak detection & repair',
      'Storm damage repair',
      'Membrane repairs',
      'Emergency services',
    ],
  },
  {
    title: 'Roof Maintenance',
    description: 'Preventive maintenance to protect your investment',
    items: [
      'Regular inspections',
      'Cleaning & debris removal',
      'Drainage maintenance',
      'Seasonal care',
    ],
  },
  {
    title: 'Roof Replacement',
    description: 'Full commercial roof replacement services',
    items: [
      'System evaluation',
      'Material selection',
      'Complete removal',
      'Expert installation',
    ],
  },
];

export default function CommercialRoofingPage() {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="/services/commercial-hero.jpg"
              alt="Commercial Roofing Services"
              width={1920}
              height={600}
              className="object-cover h-[400px] w-full"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-6">
                    Commercial Roofing Solutions
                  </h1>
                  <p className="text-xl mb-8">
                    Protect your business with professional commercial roofing services.
                    Expert installation and maintenance for all building types.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Request Quote
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-white border-white hover:bg-white/10"
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Apex for Commercial Roofing?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center p-6 border rounded-xl">
                    <div className="inline-flex p-3 rounded-full bg-blue-50 mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Commercial Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Commercial Investment
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a comprehensive assessment of your commercial roofing needs.
              Our experts will help you find the most cost-effective solution.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Schedule Assessment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/services/roof-inspections"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Roof Inspections
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional assessments to prevent costly repairs
                </p>
                <span className="text-blue-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services/storm-damage-repair"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Storm Damage Repair
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency service for storm-related issues
                </p>
                <span className="text-blue-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services/residential-roofing"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Residential Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete roofing solutions for homes
                </p>
                <span className="text-blue-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Service Markup */}
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Commercial Roofing Services",
          "serviceType": "Commercial Roofing",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Apex Roofing",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Roofing Way",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75201",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Dallas"
          },
          "description": "Professional commercial roofing services including installations, repairs, maintenance, and replacements for all types of commercial buildings.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        })}
      </Script>
    </>
  );
}
