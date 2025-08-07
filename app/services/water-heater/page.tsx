import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Thermometer, Wrench, Zap, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Water Heater Repair & Installation in Austin, TX | ABC Plumber",
  description: "Expert water heater services in Austin, TX. Repair, installation & maintenance for tank & tankless water heaters. Energy-efficient solutions. Call (512) 555-1234!",
  keywords: ["water heater repair Austin", "water heater installation", "tankless water heater", "hot water heater", "Austin water heater services"],
  openGraph: {
    title: "Water Heater Repair & Installation in Austin, TX | ABC Plumber",
    description: "Expert water heater services in Austin, TX. Repair, installation & maintenance for tank & tankless water heaters.",
    url: "https://abcplumber-austin.com/services/water-heater",
  },
};

const waterHeaterTypes = [
  {
    type: "Traditional Tank Water Heaters",
    description: "Standard tank water heaters that store and heat water in a large tank",
    capacity: "30-80 gallons",
    lifespan: "8-12 years",
    pros: ["Lower upfront cost", "Simple installation", "Easy maintenance", "Familiar technology"],
    cons: ["Higher energy costs", "Limited hot water supply", "Takes up more space"]
  },
  {
    type: "Tankless Water Heaters",
    description: "On-demand water heating systems that heat water as it flows through the unit",
    capacity: "Unlimited",
    lifespan: "15-20 years",
    pros: ["Energy efficient", "Unlimited hot water", "Space saving", "Longer lifespan"],
    cons: ["Higher upfront cost", "May require electrical upgrades", "Flow rate limitations"]
  },
  {
    type: "Hybrid Heat Pump Water Heaters",
    description: "Energy-efficient units that use heat pump technology to heat water",
    capacity: "50-80 gallons",
    lifespan: "10-15 years",
    pros: ["Very energy efficient", "Lower operating costs", "Environmental friendly", "Tax rebates available"],
    cons: ["Higher upfront cost", "Requires adequate space", "Performance varies with ambient temperature"]
  }
];

const services = [
  {
    icon: Wrench,
    title: "Water Heater Repair",
    description: "Expert diagnosis and repair of all water heater issues including no hot water, insufficient heating, strange noises, and leaks.",
    includes: ["Thermostat replacement", "Heating element repair", "Anode rod replacement", "Valve repairs", "Tank repairs"]
  },
  {
    icon: Thermometer,
    title: "New Installation",
    description: "Professional installation of new water heaters with proper sizing, permits, and code compliance.",
    includes: ["Size calculation", "Permit acquisition", "Professional installation", "Code compliance", "Warranty registration"]
  },
  {
    icon: Zap,
    title: "Tankless Conversion",
    description: "Upgrade to energy-efficient tankless water heaters for unlimited hot water and lower energy bills.",
    includes: ["System assessment", "Electrical upgrades", "Gas line modifications", "Professional installation", "Performance optimization"]
  },
  {
    icon: Clock,
    title: "Maintenance Services",
    description: "Regular maintenance to extend your water heater's lifespan and ensure optimal performance.",
    includes: ["Annual inspections", "Tank flushing", "Anode rod replacement", "Temperature adjustment", "Efficiency optimization"]
  }
];

const warningSignsRepair = [
  {
    sign: "No hot water or insufficient heating",
    urgency: "high",
    description: "Could indicate failed heating elements, thermostat issues, or gas supply problems"
  },
  {
    sign: "Discolored or rusty water",
    urgency: "medium",
    description: "May indicate corrosion inside the tank or deteriorating anode rod"
  },
  {
    sign: "Strange noises (rumbling, popping)",
    urgency: "medium", 
    description: "Usually caused by sediment buildup that needs professional removal"
  },
  {
    sign: "Water leaks around the unit",
    urgency: "high",
    description: "Can cause significant water damage and may require immediate replacement"
  },
  {
    sign: "Fluctuating water temperature",
    urgency: "medium",
    description: "Often indicates thermostat or heating element problems"
  },
  {
    sign: "Higher than normal energy bills",
    urgency: "low",
    description: "May indicate decreased efficiency requiring maintenance or replacement"
  }
];

const waterHeaterSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Water Heater Services",
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
  "serviceType": "Water Heater Repair and Installation",
  "description": "Professional water heater repair, installation, and maintenance services for tank and tankless water heaters in Austin, TX.",
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "state": "Texas"
  },
  "offers": {
    "@type": "Offer",
    "price": "200",
    "priceCurrency": "USD",
    "description": "Starting price for water heater services"
  }
};

export default function WaterHeaterPage() {
  /* eslint-disable */
  return (
    <>
      <JsonLd data={waterHeaterSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-orange-600 text-white border-orange-600">
                Water Heater Experts
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Water Heater Repair & Installation in Austin, TX
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From traditional tank water heaters to modern tankless systems, ABC Plumber provides 
                expert repair, installation, and maintenance services to ensure you always have 
                reliable hot water in your Austin home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="bg-green-600 text-white border-green-600">
                  Tank & Tankless
                </Badge>
                <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
                  Energy Efficient
                </Badge>
                <Badge variant="outline" className="bg-yellow-600 text-white border-yellow-600">
                  Licensed Installation
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Water Heater Quote</Link>
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
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Thermometer className="h-24 w-24 text-orange-600 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">Hot Water Solutions</h3>
                  <p className="text-gray-600">Expert water heater services</p>
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
              Signs Your Water Heater Needs Repair
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't ignore these warning signs. Early intervention can save you from costly emergency repairs 
              and extensive water damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warningSignsRepair.map((item, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                item.urgency === 'high' ? 'border-red-200 bg-red-50' : 
                item.urgency === 'medium' ? 'border-yellow-200 bg-yellow-50' : 
                'border-gray-200'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className={`h-6 w-6 flex-shrink-0 mt-1 ${
                      item.urgency === 'high' ? 'text-red-600' : 
                      item.urgency === 'medium' ? 'text-yellow-600' : 'text-gray-600'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{item.sign}</h3>
                        {item.urgency === 'high' && (
                          <Badge variant="destructive">Urgent</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Water Heater Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete water heater solutions from repair to replacement and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">What's Included:</h4>
                          <ul className="space-y-1">
                            {service.includes.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
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

      {/* Water Heater Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Water Heaters We Service
            </h2>
            <p className="text-xl text-gray-600">
              We work with all types of water heating systems to meet your specific needs and budget.
            </p>
          </div>

          <div className="space-y-8">
            {waterHeaterTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{type.type}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-700 mb-2">Pros:</h4>
                          <ul className="space-y-1">
                            {type.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-700 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {type.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-4 h-4 mr-2 flex-shrink-0 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                </div>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 mb-2">Capacity:</h4>
                        <p className="text-blue-700">{type.capacity}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-medium text-green-900 mb-2">Lifespan:</h4>
                        <p className="text-green-700">{type.lifespan}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Water Heater Service Today?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Don't wait for a complete breakdown. Contact ABC Plumber today for expert 
              water heater repair, installation, and maintenance services in Austin, TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <Link href="/contact">Get Free Water Heater Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                <a href="tel:+15125551234">Call (512) 555-1234</a>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-orange-200 mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Same-day installation available</span>
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