import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Shield, Clock, Phone, Wrench } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Emergency Storm Damage Repair Dallas | Apex Roofing',
  description: '24/7 emergency storm damage repair in Dallas. Fast response, expert repairs, insurance claim assistance. Licensed contractors ready to help.',
  openGraph: {
    title: 'Emergency Storm Damage Repair Dallas | Apex Roofing',
    description: 'Emergency storm damage repair available 24/7. Expert team ready to help.',
    url: 'https://apexroofing.com/services/storm-damage-repair',
    images: [
      {
        url: '/services/storm-damage.jpg',
        width: 1200,
        height: 630,
        alt: 'Storm Damage Repair Services',
      },
    ],
  },
};

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Available around the clock for urgent storm damage repairs.',
  },
  {
    icon: Shield,
    title: 'Insurance Assistance',
    description: 'Help with documentation and insurance claim processing.',
  },
  {
    icon: Wrench,
    title: 'Complete Repairs',
    description: 'From temporary fixes to permanent solutions.',
  },
  {
    icon: Phone,
    title: 'Immediate Support',
    description: 'Direct line to our emergency response team.',
  },
];

const services = [
  {
    title: 'Emergency Repairs',
    description: 'Immediate response to prevent further damage',
    items: [
      'Temporary patching',
      'Water infiltration prevention',
      'Emergency tarping',
      'Quick response team',
    ],
  },
  {
    title: 'Storm Damage Assessment',
    description: 'Thorough evaluation of storm-related damage',
    items: [
      'Detailed inspection',
      'Photo documentation',
      'Damage report',
      'Repair recommendations',
    ],
  },
  {
    title: 'Insurance Claims',
    description: 'Professional assistance with insurance claims',
    items: [
      'Claim documentation',
      'Damage assessment',
      'Insurance liaison',
      'Cost estimation',
    ],
  },
  {
    title: 'Complete Restoration',
    description: 'Full restoration of storm-damaged roofs',
    items: [
      'Material replacement',
      'Structural repairs',
      'System upgrades',
      'Quality assurance',
    ],
  },
];

const emergencySteps = [
  {
    number: '1',
    title: 'Contact Us',
    description: 'Call our 24/7 emergency line for immediate assistance',
  },
  {
    number: '2',
    title: 'Quick Response',
    description: 'Our team arrives to assess and prevent further damage',
  },
  {
    number: '3',
    title: 'Assessment',
    description: 'Thorough inspection and documentation of damage',
  },
  {
    number: '4',
    title: 'Solution',
    description: 'Immediate repairs or temporary fixes as needed',
  },
];

export default function StormDamageRepairPage() {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="/services/storm-damage-hero.jpg"
              alt="Storm Damage Repair Services"
              width={1920}
              height={600}
              className="object-cover h-[400px] w-full"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-6">
                    24/7 Storm Damage Repair
                  </h1>
                  <p className="text-xl mb-8">
                    Emergency roofing services when you need them most.
                    Fast response, expert repairs, available 24/7.
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency Line
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="text-white border-white hover:bg-white/10"
                    >
                      Schedule Inspection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Emergency Response Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {emergencySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-blue-100 absolute -top-4 -left-4">
                    {step.number}
                  </div>
                  <div className="relative z-10 p-6 border rounded-xl bg-white">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Emergency Service?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center p-6 border rounded-xl">
                    <div className="inline-flex p-3 rounded-full bg-red-50 mb-4">
                      <Icon className="h-8 w-8 text-red-600" />
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
              Our Storm Damage Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-red-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">
              Need Emergency Roof Repair?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait until the damage gets worse. Our emergency team is available
              24/7 to help protect your property.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                (214) 555-1234
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Request Service
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
                <h3 className="font-bold mb-2 group-hover:text-red-600 transition-colors">
                  Roof Inspections
                </h3>
                <p className="text-gray-600 mb-4">
                  Thorough assessment of storm damage
                </p>
                <span className="text-red-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services/residential-roofing"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-red-600 transition-colors">
                  Residential Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete home roofing solutions
                </p>
                <span className="text-red-600 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/services/commercial-roofing"
                className="group p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2 group-hover:text-red-600 transition-colors">
                  Commercial Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert solutions for businesses
                </p>
                <span className="text-red-600 flex items-center">
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
          "name": "Storm Damage Repair",
          "serviceType": "Emergency Roofing",
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
            },
            "telephone": "+12145551234",
            "availableLanguage": "English",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Dallas"
          },
          "description": "24/7 emergency storm damage repair services including immediate response, temporary repairs, and complete restoration.",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://apexroofing.com/services/storm-damage-repair",
            "servicePhone": "+12145551234",
            "availabilityStarts": "2025-01-01T00:00",
            "availabilityEnds": "2025-12-31T23:59"
          }
        })}
      </Script>
    </>
  );
}
