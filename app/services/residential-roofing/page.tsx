import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Residential Roofing Services Dallas | Apex Roofing',
  description: 'Expert residential roofing services in Dallas. New installations, repairs, replacements & maintenance. Quality materials, licensed contractors, free estimates.',
  openGraph: {
    title: 'Residential Roofing Services Dallas | Apex Roofing',
    description: 'Expert residential roofing solutions in Dallas. Quality materials & workmanship guaranteed.',
    url: 'https://apexroofing.com/services/residential-roofing',
    images: [
      {
        url: '/services/residential-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Residential Roofing Services',
      },
    ],
  },
};

const services = [
  {
    title: 'New Roof Installation',
    description: 'Complete installation of new roofing systems using premium materials',
    features: [
      'Premium shingle options',
      'Expert installation team',
      'Warranty coverage',
      'Proper ventilation setup',
    ],
  },
  {
    title: 'Roof Replacement',
    description: 'Full roof replacement services with minimal disruption to your home',
    features: [
      'Old roof removal',
      'Deck inspection',
      'Quality materials',
      'Professional installation',
    ],
  },
  {
    title: 'Roof Repair',
    description: 'Expert repairs for leaks, storm damage, and general wear',
    features: [
      'Leak detection',
      'Shingle replacement',
      'Flashing repair',
      'Quick response time',
    ],
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance to extend your roof\'s lifespan',
    features: [
      'Annual inspections',
      'Gutter cleaning',
      'Minor repairs',
      'Preventive care',
    ],
  },
];

const benefits = [
  {
    title: 'Quality Materials',
    description: 'We use only premium roofing materials from trusted manufacturers',
  },
  {
    title: 'Expert Installation',
    description: 'Our certified team ensures proper installation every time',
  },
  {
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty on both materials and workmanship',
  },
  {
    title: '24/7 Support',
    description: 'Always here when you need us for emergencies',
  },
];

export default function ResidentialRoofingPage() {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="/services/residential-hero.jpg"
              alt="Residential Roofing Services"
              width={1920}
              height={600}
              className="object-cover h-[400px] w-full"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-6">
                    Residential Roofing Services
                  </h1>
                  <p className="text-xl mb-8">
                    Protect your home with expert roofing solutions. Quality materials
                    and professional installation guaranteed.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Free Estimate
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-white border-white hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Residential Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Apex Roofing?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-blue-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate on your residential
              roofing project. Our experts are ready to help!
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                View Recent Projects
              </Button>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/services/storm-damage-repair"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Storm Damage Repair
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency repairs for storm-related damage
                </p>
                <span className="text-blue-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services/roof-inspections"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Roof Inspections
                </h3>
                <p className="text-gray-600 mb-4">
                  Thorough roof assessments and maintenance checks
                </p>
                <span className="text-blue-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services/commercial-roofing"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Commercial Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert roofing for businesses and commercial buildings
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
          "name": "Residential Roofing Services",
          "serviceType": "Roofing",
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
          "description": "Expert residential roofing services including new installations, repairs, replacements, and maintenance.",
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
