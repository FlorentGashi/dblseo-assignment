import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residential Roofing Services - Apex Roofing Dallas',
  description: 'Expert residential roofing services in Dallas, TX. New installations, repairs, and maintenance. Free estimates, quality materials, licensed contractors.',
  openGraph: {
    title: 'Residential Roofing Services - Apex Roofing Dallas',
    description: 'Expert residential roofing services in Dallas, TX. Quality materials and workmanship guaranteed.',
    url: 'https://apexroofing.com/services/residential',
    images: [
      {
        url: '/residential-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Residential Roofing Services',
      },
    ],
  },
};

const benefits = [
  {
    title: 'Expert Installation',
    description: 'Our certified technicians ensure proper installation for maximum durability.',
  },
  {
    title: 'Quality Materials',
    description: 'We use only premium roofing materials from trusted manufacturers.',
  },
  {
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty on both materials and workmanship.',
  },
  {
    title: 'Timely Service',
    description: 'Projects completed on schedule with minimal disruption.',
  },
];

const services = [
  'New Roof Installation',
  'Roof Replacement',
  'Shingle Repair',
  'Gutter Installation',
  'Ventilation Systems',
  'Roof Inspections',
  'Maintenance Plans',
  'Storm Damage Repair',
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/residential-hero.jpg"
          alt="Residential roofing services"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-6">
              Residential Roofing Services
            </h1>
            <p className="text-xl mb-8">
              Protect your home with expert roofing solutions. Quality materials and 
              professional installation guaranteed.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Residential Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 border rounded-lg">
                <Check className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Residential Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-4 bg-white rounded-lg shadow-sm flex items-center space-x-3"
              >
                <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your residential roofing project.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              (214) 555-0123
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
