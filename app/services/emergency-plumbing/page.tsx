import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Phone, Clock, Zap, Shield, Wrench, Droplets } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing Services in Austin, TX | ABC Plumber",
  description: "Emergency plumbing services in Austin, TX available 24/7. Burst pipes, major leaks, no hot water & more. Fast response times. Call (512) 555-1234 now!",
  keywords: ["emergency plumber Austin", "24/7 plumbing", "burst pipe repair", "emergency plumbing services", "Austin emergency plumber"],
  openGraph: {
    title: "24/7 Emergency Plumbing Services in Austin, TX | ABC Plumber",
    description: "Emergency plumbing services in Austin, TX available 24/7. Burst pipes, major leaks, no hot water & more. Fast response times.",
    url: "https://abcplumber-austin.com/services/emergency-plumbing",
  },
};

const emergencyTypes = [
  {
    emergency: "Burst Pipes",
    description: "Immediate water shut-off and pipe repair to prevent extensive water damage",
    responseTime: "30-60 minutes",
    severity: "Critical",
    actions: ["Locate main water shut-off", "Stop water flow", "Emergency pipe repair", "Damage assessment"]
  },
  {
    emergency: "Major Water Leaks",
    description: "Fast leak detection and repair to minimize property damage",
    responseTime: "30-60 minutes", 
    severity: "Critical",
    actions: ["Source identification", "Water containment", "Emergency repairs", "Damage prevention"]
  },
  {
    emergency: "Sewer Backups",
    description: "Immediate cleanup and repair of sewer line blockages and backups",
    responseTime: "45-90 minutes",
    severity: "High",
    actions: ["Blockage removal", "Sanitization", "Backup prevention", "Line inspection"]
  },
  {
    emergency: "No Hot Water",
    description: "Emergency water heater diagnosis and repair or replacement",
    responseTime: "60-120 minutes",
    severity: "Medium",
    actions: ["System diagnosis", "Emergency repairs", "Temporary solutions", "Replacement if needed"]
  },
  {
    emergency: "Frozen Pipes",
    description: "Safe pipe thawing and burst prevention during Austin cold snaps",
    responseTime: "45-90 minutes",
    severity: "High",
    actions: ["Safe thawing process", "Burst prevention", "Insulation repair", "Prevention measures"]
  },
  {
    emergency: "Gas Line Leaks",
    description: "Immediate gas line repair and safety assessment",
    responseTime: "15-30 minutes",
    severity: "Critical",
    actions: ["Safety assessment", "Gas shut-off", "Leak repair", "Safety testing"]
  }
];

const whenToCallEmergency = [
  {
    situation: "Water flowing where it shouldn't",
    description: "Burst pipes, major leaks, or flooding",
    icon: Droplets,
    urgency: "Call immediately"
  },
  {
    situation: "Complete loss of hot water",
    description: "No hot water throughout the home",
    icon: Wrench,
    urgency: "Call within hours"
  },
  {
    situation: "Sewage backup or overflow",
    description: "Raw sewage in your home or yard",
    icon: AlertTriangle,
    urgency: "Call immediately"
  },
  {
    situation: "Gas smell near plumbing",
    description: "Gas odor around water heater or gas lines",
    icon: Shield,
    urgency: "Call immediately & evacuate"
  },
  {
    situation: "Frozen pipes in winter",
    description: "No water flow during freezing weather",
    icon: Clock,
    urgency: "Call within hours"
  },
  {
    situation: "Multiple drain backups",
    description: "Several drains backing up simultaneously",
    icon: Zap,
    urgency: "Call same day"
  }
];

const emergencyTips = [
  {
    step: "1",
    title: "Stay Calm",
    description: "Take a deep breath and assess the situation safely"
  },
  {
    step: "2", 
    title: "Shut Off Water",
    description: "Know where your main water shut-off valve is located"
  },
  {
    step: "3",
    title: "Call ABC Plumber",
    description: "Call (512) 555-1234 for immediate emergency response"
  },
  {
    step: "4",
    title: "Document Damage",
    description: "Take photos for insurance if safe to do so"
  },
  {
    step: "5",
    title: "Clear the Area",
    description: "Remove valuables and allow access for our technicians"
  }
];

const emergencySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Plumbing Services",
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
  "serviceType": "Emergency Plumbing",
  "description": "24/7 emergency plumbing services for burst pipes, major leaks, sewer backups, and other urgent plumbing issues in Austin, TX.",
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "state": "Texas"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "availableLanguage": "English",
    "servicePhone": "+15125551234",
    "serviceUrl": "https://abcplumber-austin.com/services/emergency-plumbing"
  },
  "hoursAvailable": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
};

export default function EmergencyPlumbingPage() {
  /* eslint-disable */
  return (
    <>
      <JsonLd data={emergencySchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="bg-red-600 text-white border-red-600 text-lg px-4 py-2">
              24/7 Emergency Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Emergency Plumbing Services in Austin, TX
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Plumbing emergencies don't wait for business hours. ABC Plumber provides 24/7 emergency 
              plumbing services throughout Austin, TX with rapid response times and expert solutions 
              to minimize damage and restore your plumbing system.
            </p>
            
            {/* Emergency Call-to-Action */}
            <div className="bg-red-600 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-white text-center space-y-4">
                <Phone className="h-16 w-16 mx-auto" />
                <h2 className="text-3xl font-bold">PLUMBING EMERGENCY?</h2>
                <p className="text-xl text-red-100">Call Now for Immediate Response</p>
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-2xl px-8 py-6" asChild>
                  <a href="tel:+15125551234">(512) 555-1234</a>
                </Button>
                <p className="text-sm text-red-200">Average response time: 30-60 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Emergency */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When to Call Emergency Plumbing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not sure if your plumbing issue is an emergency? Here are situations that require 
              immediate professional attention to prevent extensive damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whenToCallEmergency.map((situation, index) => {
              const IconComponent = situation.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                  situation.urgency.includes('immediately') ? 'border-red-300 bg-red-50' : 'border-yellow-300 bg-yellow-50'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      situation.urgency.includes('immediately') ? 'bg-red-600' : 'bg-yellow-600'
                    }`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{situation.situation}</h3>
                    <p className="text-gray-600 mb-4">{situation.description}</p>
                    <Badge variant={situation.urgency.includes('immediately') ? 'destructive' : 'secondary'}>
                      {situation.urgency}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Plumbing Services We Handle
            </h2>
            <p className="text-xl text-gray-600">
              Our experienced emergency team is equipped to handle any plumbing crisis, 24/7.
            </p>
          </div>

          <div className="space-y-6">
            {emergencyTypes.map((emergency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{emergency.emergency}</h3>
                        <Badge variant={emergency.severity === 'Critical' ? 'destructive' : 
                                       emergency.severity === 'High' ? 'default' : 'secondary'}>
                          {emergency.severity}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{emergency.description}</p>
                    </div>
                    
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-blue-600 font-semibold">{emergency.responseTime}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Our Actions:</h4>
                      <ul className="space-y-1">
                        {emergency.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Do in a Plumbing Emergency
            </h2>
            <p className="text-xl text-gray-600">
              Follow these steps to minimize damage while waiting for our emergency team to arrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {emergencyTips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {tip.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-blue-50 border-blue-200 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Know Your Water Shut-Off Location
                </h3>
                <p className="text-blue-800">
                  The main water shut-off valve is typically located near the water meter, 
                  often at the front of your property near the street. Knowing this location 
                  can save thousands in water damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ABC Plumber for Emergencies?
            </h2>
            <p className="text-xl text-gray-600">
              When every minute counts, you need experienced professionals you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Rapid Response",
                description: "Average 30-60 minute response time throughout Austin"
              },
              {
                icon: Phone,
                title: "24/7 Availability",
                description: "True 24/7 service, 365 days a year including holidays"
              },
              {
                icon: Wrench,
                title: "Fully Equipped",
                description: "Emergency vehicles stocked with parts for immediate repairs"
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Fully licensed emergency technicians with comprehensive insurance"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600">
        <div className="container text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Don't Wait - Call Now!
              </h2>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Every minute counts in a plumbing emergency. Our experienced team is standing by 
                24/7 to provide immediate assistance and prevent costly damage to your Austin home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto">
              <div className="space-y-4">
                <Phone className="h-20 w-20 text-red-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">EMERGENCY HOTLINE</h3>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-3xl px-12 py-8 w-full" asChild>
                  <a href="tel:+15125551234">(512) 555-1234</a>
                </Button>
                <p className="text-gray-600">Available 24/7 - Call Now!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mt-12">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Fast Response</h4>
                <p className="text-red-200">30-60 minute average response time</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Licensed & Insured</h4>
                <p className="text-red-200">Fully licensed emergency technicians</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Guaranteed Work</h4>
                <p className="text-red-200">All emergency repairs guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}