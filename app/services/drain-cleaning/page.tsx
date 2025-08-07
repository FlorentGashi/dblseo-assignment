
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Droplets, Camera, Zap, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";


export const metadata: Metadata = {
  title: "Professional Drain Cleaning Services in Austin, TX | ABC Plumber",
  description: "Expert drain cleaning services in Austin, TX. Hydro-jetting, video inspection, root removal & more. Fast, effective solutions for clogged drains. Call (512) 555-1234!",
  keywords: ["drain cleaning Austin", "clogged drain repair", "hydro jetting", "sewer cleaning", "drain snake", "Austin drain services"],
  openGraph: {
    title: "Professional Drain Cleaning Services in Austin, TX | ABC Plumber",
    description: "Expert drain cleaning services in Austin, TX. Hydro-jetting, video inspection, root removal & more. Fast, effective solutions for clogged drains.",
    url: "https://abcplumber-austin.com/services/drain-cleaning",
  },
};

const drainTypes = [
  {
    name: "Kitchen Sinks",
    description: "Grease, food particles, and soap buildup removal",
    commonIssues: ["Grease clogs", "Food debris", "Soap scum"]
  },
  {
    name: "Bathroom Drains",
    description: "Hair, soap, and personal care product blockages",
    commonIssues: ["Hair clogs", "Soap buildup", "Toothpaste residue"]
  },
  {
    name: "Main Sewer Lines",
    description: "Tree roots, debris, and major blockage removal",
    commonIssues: ["Tree root intrusion", "Pipe collapse", "Major debris"]
  },
  {
    name: "Floor Drains",
    description: "Basement and garage drain cleaning and maintenance",
    commonIssues: ["Sediment buildup", "Debris accumulation", "Standing water"]
  }
];

const services = [
  {
    icon: Zap,
    title: "Hydro-Jetting",
    description: "High-pressure water cleaning that removes even the toughest blockages and buildup from your pipes.",
    benefits: ["Removes all debris", "Cleans pipe walls", "Long-lasting results", "Environmentally friendly"]
  },
  {
    icon: Camera,
    title: "Video Inspection",
    description: "Camera inspection technology to accurately diagnose drain problems and locate blockages.",
    benefits: ["Accurate diagnosis", "Non-invasive", "Detailed reporting", "Cost-effective"]
  },
  {
    icon: Droplets,
    title: "Traditional Snaking",
    description: "Professional drain snaking for routine clogs and blockages in residential and commercial drains.",
    benefits: ["Quick solution", "Cost-effective", "Minimal disruption", "Immediate results"]
  },
  {
    icon: AlertTriangle,
    title: "Root Removal",
    description: "Specialized equipment to remove tree roots that have invaded your sewer lines and drains.",
    benefits: ["Permanent solution", "Prevents damage", "Restores flow", "Prevents future issues"]
  }
];

const warningSigns = [
  "Slow draining water",
  "Gurgling sounds from drains",
  "Foul odors coming from drains",
  "Water backing up in sinks or tubs",
  "Multiple drains clogging simultaneously",
  "Sewage odors in your home"
];

const drainCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Drain Cleaning Services",
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
  "serviceType": "Drain Cleaning",
  "description": "Professional drain cleaning services including hydro-jetting, video inspection, and root removal for Austin, TX homes and businesses.",
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "state": "Texas"
  },
  "offers": {
    "@type": "Offer",
    "price": "150",
    "priceCurrency": "USD",
    "description": "Starting price for drain cleaning services"
  }
};

export default function DrainCleaningPage() {
  /* eslint-disable */
  return (
    <>
      <JsonLd data={drainCleaningSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
                Professional Drain Cleaning
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Expert Drain Cleaning Services in Austin, TX
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Don't let clogged drains disrupt your daily routine. Our professional drain cleaning 
                services use advanced hydro-jetting and video inspection technology to clear even 
                the toughest blockages quickly and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Drain Cleaning Service</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15125551234" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>(512) 555-1234</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Droplets className="h-24 w-24 text-blue-600 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">Fast & Effective</h3>
                  <p className="text-gray-600">Professional drain cleaning solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signs You Need Professional Drain Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't ignore these warning signs. Early intervention can prevent costly repairs 
              and major plumbing emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{sign}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Emergency Drain Cleaning Available
              </h3>
              <p className="text-yellow-700">
                Experiencing a complete drain blockage? Our emergency team is available 24/7 
                to restore your plumbing system quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drain Cleaning Methods
            </h2>
            <p className="text-xl text-gray-600">
              We use the latest technology and proven techniques to ensure your drains flow freely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Drain Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Drains We Service
            </h2>
            <p className="text-xl text-gray-600">
              Professional drain cleaning for all types of residential and commercial drains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {drainTypes.map((drain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{drain.name}</h3>
                  <p className="text-gray-600 mb-4">{drain.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Issues:</h4>
                    <ul className="space-y-1">
                      {drain.commonIssues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Clear Your Drains?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Don't let clogged drains slow you down. Contact ABC Plumber today for fast, 
              professional drain cleaning services in Austin, TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/contact">Get Free Drain Cleaning Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="tel:+15125551234">Emergency Service: (512) 555-1234</a>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-blue-200 mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Same-day service available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Licensed & insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
      );
}