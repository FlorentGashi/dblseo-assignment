import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Thermometer, Search, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Plumbing Services in Austin, TX | ABC Plumber",
  description: "Comprehensive plumbing services in Austin, TX. Expert drain cleaning, water heater repair, leak detection, emergency plumbing & more. Licensed, insured & available 24/7.",
  keywords: ["plumbing services Austin", "drain cleaning", "water heater repair", "leak detection", "emergency plumbing", "Austin plumber"],
  openGraph: {
    title: "Plumbing Services in Austin, TX | ABC Plumber",
    description: "Comprehensive plumbing services in Austin, TX. Expert drain cleaning, water heater repair, leak detection, emergency plumbing & more.",
    url: "https://abcplumber-austin.com/services",
  },
};

const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to clear clogs and restore proper flow using advanced hydro-jetting and video inspection technology.",
    features: ["Hydro-jetting", "Video inspection", "Root removal", "Preventive maintenance", "Grease trap cleaning"],
    pricing: "Starting at $150",
    href: "/services/drain-cleaning",
    urgent: false
  },
  {
    icon: Thermometer,
    title: "Water Heater Services", 
    description: "Complete water heater repair, installation, and maintenance for traditional tank and modern tankless systems.",
    features: ["Repair & replacement", "Tankless installation", "Energy efficiency upgrades", "Annual maintenance", "Emergency repairs"],
    pricing: "Starting at $200",
    href: "/services/water-heater",
    urgent: false
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced leak detection services using electronic equipment and thermal imaging to locate hidden leaks with minimal damage.",
    features: ["Electronic leak detection", "Thermal imaging", "Minimal excavation", "Insurance assistance", "Preventive inspections"],
    pricing: "Starting at $250",
    href: "/services/leak-detection",
    urgent: true
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent issues including burst pipes, major leaks, and complete system failures.",
    features: ["24/7 availability", "Rapid response", "Emergency repairs", "Damage prevention", "Insurance claims assistance"],
    pricing: "Emergency rates apply",
    href: "/services/emergency-plumbing",
    urgent: true
  }
];

const additionalServices = [
  "Pipe Repair & Replacement",
  "Sewer Line Services",
  "Toilet Repair & Installation",
  "Faucet & Fixture Installation",
  "Garbage Disposal Services",
  "Backflow Prevention",
  "Repiping Services",
  "Commercial Plumbing",
  "Plumbing Inspections",
  "Preventive Maintenance"
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Plumbing Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ABC Plumber",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Congress Ave",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701"
    },
    "telephone": "+15125551234"
  },
  "serviceType": "Plumbing Services",
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "state": "Texas"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      }
    }))
  }
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Professional Plumbing Services in Austin, TX
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency repairs, ABC Plumber provides comprehensive 
              plumbing solutions for Austin homes and businesses. Licensed, insured, and available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
                Licensed & Insured
              </Badge>
              <Badge variant="outline" className="bg-green-600 text-white border-green-600">
                24/7 Emergency Service
              </Badge>
              <Badge variant="outline" className="bg-yellow-600 text-white border-yellow-600">
                Free Estimates
              </Badge>
            </div>
          </div>
        </div>
      </section>
      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional plumbing services you can trust, backed by years of experience 
              and a commitment to quality workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                          <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                          {service.urgent && (
                            <Badge variant="destructive">Emergency Available</Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between pt-4">
                          <div className="text-lg font-semibold text-blue-600">{service.pricing}</div>
                          <Button asChild>
                            <Link
                              href={service.href}
                              className="flex items-center space-x-2">
                              <span>Learn More About {service.title}</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Plumbing Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a complete range of plumbing services for all your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200">
                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Professional Plumbing Services?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contact ABC Plumber today for reliable, professional plumbing services 
              throughout the Austin area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/contact">Get Free Plumbing Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="tel:+15125551234">Call (512) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}