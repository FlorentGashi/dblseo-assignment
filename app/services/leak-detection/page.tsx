import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Search, Camera, Thermometer, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Professional Leak Detection Services in Austin, TX | ABC Plumber",
  description: "Expert leak detection in Austin, TX using electronic equipment & thermal imaging. Find hidden leaks behind walls, under slabs & underground. Call (512) 555-1234!",
  keywords: ["leak detection Austin", "water leak repair", "hidden leak detection", "thermal imaging", "electronic leak detection", "Austin leak services"],
  openGraph: {
    title: "Professional Leak Detection Services in Austin, TX | ABC Plumber",
    description: "Expert leak detection in Austin, TX using electronic equipment & thermal imaging. Find hidden leaks behind walls, under slabs & underground.",
    url: "https://abcplumber-austin.com/services/leak-detection",
  },
};

const detectionMethods = [
  {
    icon: Search,
    title: "Electronic Leak Detection",
    description: "Advanced electronic equipment that can pinpoint the exact location of leaks without destructive digging or demolition.",
    benefits: ["Precise location", "Non-destructive", "Cost-effective", "Quick results"],
    accuracy: "99% accurate"
  },
  {
    icon: Thermometer,
    title: "Thermal Imaging",
    description: "Infrared thermal cameras detect temperature variations that indicate moisture and hidden water leaks.",
    benefits: ["See through walls", "No damage to property", "Instant results", "Comprehensive coverage"],
    accuracy: "Highly precise"
  },
  {
    icon: Camera,
    title: "Video Inspection",
    description: "Waterproof cameras inspect inside pipes and sewer lines to identify leaks, cracks, and damage.",
    benefits: ["Visual confirmation", "Detailed documentation", "Preventive insights", "Insurance evidence"],
    accuracy: "100% visual confirmation"
  },
  {
    icon: MapPin,
    title: "Ground Penetrating Radar",
    description: "GPR technology locates underground leaks and pipes without excavation or property damage.",
    benefits: ["Underground detection", "Minimal disruption", "Map pipe locations", "Safe for landscaping"],
    accuracy: "Sub-surface precision"
  }
];

const leakTypes = [
  {
    location: "Slab Leaks",
    description: "Leaks in pipes running under your home&apos;s concrete foundation",
    signs: ["Warm spots on floors", "High water bills", "Sound of running water", "Cracks in foundation"],
    urgency: "High"
  },
  {
    location: "Behind Walls",
    description: "Hidden leaks inside walls that can cause extensive damage",
    signs: ["Water stains", "Peeling paint", "Mold growth", "Musty odors"],
    urgency: "High"
  },
  {
    location: "Underground",
    description: "Service line leaks between the street and your home",
    signs: ["Soggy yard", "Unexplained water bills", "Low water pressure", "Sinkholes"],
    urgency: "Medium"
  },
  {
    location: "Pool/Spa",
    description: "Leaks in swimming pools and spa plumbing systems",
    signs: ["Water level drops", "Wet spots around pool", "Chemical imbalance", "High water bills"],
    urgency: "Medium"
  }
];

const warningSignsGeneral = [
  {
    sign: "Unexplained increase in water bills",
    severity: "high"
  },
  {
    sign: "Sound of running water when no fixtures are on",
    severity: "high"
  },
  {
    sign: "Wet or soggy spots in your yard",
    severity: "medium"
  },
  {
    sign: "Water stains on walls or ceilings",
    severity: "high"
  },
  {
    sign: "Mold or mildew growth",
    severity: "high"
  },
  {
    sign: "Musty odors in your home",
    severity: "medium"
  },
  {
    sign: "Cracks in your foundation",
    severity: "high"
  },
  {
    sign: "Low water pressure",
    severity: "medium"
  }
];

const leakDetectionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Leak Detection Services",
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
  "serviceType": "Leak Detection",
  "description": "Professional leak detection services using electronic equipment, thermal imaging, and video inspection to locate hidden water leaks in Austin, TX.",
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "state": "Texas"
  },
  "offers": {
    "@type": "Offer",
    "price": "250",
    "priceCurrency": "USD",
    "description": "Starting price for leak detection services"
  }
};

export default function LeakDetectionPage() {
  return (
    <>
      <JsonLd data={leakDetectionSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-red-600 text-white border-red-600">
                Advanced Leak Detection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Professional Leak Detection Services in Austin, TX
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Don&apos;t let hidden leaks cause costly water damage. Our advanced leak detection 
                technology can locate leaks behind walls, under slabs, and underground with 
                precision and minimal disruption to your property.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="bg-green-600 text-white border-green-600">
                  99% Accurate Detection
                </Badge>
                <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
                  Non-Destructive Methods
                </Badge>
                <Badge variant="outline" className="bg-yellow-600 text-white border-yellow-600">
                  Insurance Assistance
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Leak Detection Service</Link>
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
              <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Search className="h-24 w-24 text-red-600 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">Find Hidden Leaks</h3>
                  <p className="text-gray-600">Advanced detection technology</p>
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
              Warning Signs of Hidden Leaks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early detection is key to preventing extensive water damage and costly repairs. 
              Watch for these warning signs in your Austin home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warningSignsGeneral.map((item, index) => (
              <div key={index} className={`flex items-center space-x-3 p-4 rounded-lg border ${
                item.severity === 'high' 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-yellow-50 border-yellow-200'
              }`}>
                <AlertTriangle className={`h-6 w-6 flex-shrink-0 ${
                  item.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                }`} />
                <span className="text-gray-900 font-medium">{item.sign}</span>
                {item.severity === 'high' && (
                  <Badge variant="destructive" className="ml-auto">Urgent</Badge>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Emergency Leak Detection Available
              </h3>
              <p className="text-red-700">
                Suspected major leak causing water damage? Our emergency team can respond 
                immediately to locate and stop the source of flooding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Leak Detection Technology
            </h2>
            <p className="text-xl text-gray-600">
              We use state-of-the-art equipment to locate leaks with precision and minimal property damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detectionMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {method.accuracy}
                          </Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{method.description}</p>
                        <ul className="space-y-2">
                          {method.benefits.map((benefit, benefitIndex) => (
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

      {/* Types of Leaks */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Leaks We Detect
            </h2>
            <p className="text-xl text-gray-600">
              Our advanced equipment can locate leaks in various locations and situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leakTypes.map((leak, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{leak.location}</h3>
                    <Badge variant={leak.urgency === 'High' ? 'destructive' : 'secondary'}>
                      {leak.urgency} Priority
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{leak.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Warning Signs:</h4>
                    <ul className="space-y-1">
                      {leak.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                            leak.urgency === 'High' ? 'bg-red-600' : 'bg-yellow-600'
                          }`}></div>
                          {sign}
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leak Detection Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to accurately locate and document leaks with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "We evaluate your property and discuss the signs you&apos;ve noticed to determine the best detection approach."
              },
              {
                step: "2", 
                title: "Equipment Setup",
                description: "Our technicians deploy the appropriate detection equipment based on the suspected leak location and type."
              },
              {
                step: "3",
                title: "Precise Location",
                description: "Using advanced technology, we pinpoint the exact location of the leak without destructive excavation."
              },
              {
                step: "4",
                title: "Documentation & Repair",
                description: "We provide detailed documentation for insurance and coordinate with our repair team for immediate fixes."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Don&apos;t Let Hidden Leaks Cause Damage
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Early detection saves money and prevents extensive water damage. Contact ABC Plumber 
              today for professional leak detection services in Austin, TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <Link href="/contact">Schedule Leak Detection Service</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
                <a href="tel:+15125551234">Emergency: (512) 555-1234</a>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-red-200 mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Same-day service available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Insurance assistance provided</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}