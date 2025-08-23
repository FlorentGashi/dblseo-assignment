import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Search, ClipboardCheck, FileText, Calendar } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Professional Roof Inspections Dallas | Apex Roofing',
  description: 'Expert roof inspection services in Dallas. Thorough assessments, detailed reports, and maintenance recommendations. Schedule your inspection today.',
  openGraph: {
    title: 'Professional Roof Inspections Dallas | Apex Roofing',
    description: 'Expert roof inspections with detailed reports and recommendations.',
    url: 'https://apexroofing.com/services/roof-inspections',
    images: [
      {
        url: '/services/roof-inspections.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Roof Inspection Services',
      },
    ],
  },
};

const features = [
  {
    icon: Search,
    title: 'Thorough Assessment',
    description: 'Comprehensive inspection of all roofing components.',
  },
  {
    icon: ClipboardCheck,
    title: 'Detailed Reports',
    description: 'Clear documentation with photos and recommendations.',
  },
  {
    icon: FileText,
    title: 'Digital Records',
    description: 'Easy access to inspection history and reports.',
  },
  {
    icon: Calendar,
    title: 'Scheduled Maintenance',
    description: 'Regular inspection programs available.',
  },
];

const inspectionTypes = [
  {
    title: 'Regular Maintenance Inspection',
    description: 'Routine checks to prevent issues',
    includes: [
      'Visual inspection',
      'Minor repairs check',
      'Gutter assessment',
      'Preventive recommendations',
    ],
  },
  {
    title: 'Pre-Purchase Inspection',
    description: 'Detailed assessment for property buyers',
    includes: [
      'Structural analysis',
      'Life expectancy estimate',
      'Cost projections',
      'Documentation for closing',
    ],
  },
  {
    title: 'Storm Damage Inspection',
    description: 'Assessment after severe weather',
    includes: [
      'Damage documentation',
      'Insurance report preparation',
      'Emergency repairs check',
      'Photo evidence',
    ],
  },
  {
    title: 'Warranty Inspection',
    description: 'Required checks for warranty maintenance',
    includes: [
      'Warranty compliance check',
      'Documentation review',
      'Performance verification',
      'Issue documentation',
    ],
  },
];

const process = [
  {
    step: '1',
    title: 'Schedule',
    description: 'Book your inspection at a convenient time',
  },
  {
    step: '2',
    title: 'Inspect',
    description: 'Thorough assessment of your roof system',
  },
  {
    step: '3',
    title: 'Report',
    description: 'Detailed findings and recommendations',
  },
  {
    step: '4',
    title: 'Review',
    description: 'Discussion of results and next steps',
  },
];

export default function RoofInspectionsPage() {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="/services/inspection-hero.jpg"
              alt="Roof Inspection Services"
              width={1920}
              height={600}
              className="object-cover h-[400px] w-full"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-6">
                    Professional Roof Inspections
                  </h1>
                  <p className="text-xl mb-8">
                    Protect your investment with expert roof inspections.
                    Detailed assessments and clear recommendations.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Schedule Inspection
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

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive Inspection Services
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

          {/* Process Steps */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Inspection Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-blue-100 absolute -top-4 -left-4">
                    {item.step}
                  </div>
                  <div className="relative z-10 p-6 bg-white rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inspection Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Types of Inspections
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {inspectionTypes.map((type, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.includes.map((item, idx) => (
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
          <div className="text-center bg-blue-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait for problems to develop. Regular inspections can save
              you money and prevent major issues.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Download Sample Report
              </Button>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/services/residential-roofing"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Residential Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete home roofing solutions
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
                  Expert solutions for businesses
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
                  24/7 emergency repair services
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
          "name": "Roof Inspection Services",
          "serviceType": "Roof Inspection",
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
          "description": "Professional roof inspection services including maintenance inspections, pre-purchase assessments, and storm damage evaluations.",
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
