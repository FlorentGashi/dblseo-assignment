import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Heart, Wrench } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About ABC Plumber - Austin's Trusted Plumbing Professionals Since 2010",
  description: "Learn about ABC Plumber, Austin's most trusted plumbing company since 2010. Our story, values, and commitment to providing exceptional plumbing services to the Austin community.",
  keywords: ["about ABC Plumber", "Austin plumbing company", "plumbing professionals Austin", "trusted plumber", "plumbing company history"],
  openGraph: {
    title: "About ABC Plumber - Austin's Trusted Plumbing Professionals Since 2010",
    description: "Learn about ABC Plumber, Austin's most trusted plumbing company since 2010. Our story, values, and commitment to providing exceptional plumbing services.",
    url: "https://abcplumber-austin.com/about",
  },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in honest, transparent communication and fair pricing. No hidden fees, no surprises – just straightforward plumbing solutions."
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen to your concerns, respect your time, and ensure every job is completed to your standards."
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We take pride in our work and stand behind every repair and installation with comprehensive warranties and guarantees."
  },
  {
    icon: Users,
    title: "Community",
    description: "As a local Austin business, we're committed to giving back to our community and supporting our neighbors in times of need."
  }
];

const teamMembers = [
  {
    name: "Mike Johnson",
    role: "Owner & Master Plumber",
    experience: "25+ years",
    specialties: ["Commercial Plumbing", "Repiping", "Water Heater Systems"],
    description: "Mike founded ABC Plumber with a vision to provide honest, reliable plumbing services to Austin families."
  },
  {
    name: "Sarah Chen",
    role: "Lead Technician",
    experience: "15+ years", 
    specialties: ["Leak Detection", "Drain Cleaning", "Emergency Services"],
    description: "Sarah's expertise in advanced leak detection has saved Austin homeowners thousands in water damage."
  },
  {
    name: "Carlos Rodriguez",
    role: "Service Manager",
    experience: "12+ years",
    specialties: ["Customer Service", "Project Management", "Quality Control"],
    description: "Carlos ensures every customer receives the exceptional service that has made ABC Plumber Austin's choice."
  }
];

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description: "ABC Plumber opened its doors with a commitment to honest, reliable plumbing services."
  },
  {
    year: "2013",
    title: "Commercial Division",
    description: "Expanded services to include commercial plumbing for Austin businesses and restaurants."
  },
  {
    year: "2016",
    title: "Emergency Services",
    description: "Launched 24/7 emergency plumbing services to better serve the Austin community."
  },
  {
    year: "2019",
    title: "Technology Upgrade",
    description: "Invested in advanced leak detection and video inspection equipment."
  },
  {
    year: "2022",
    title: "500+ Reviews",
    description: "Reached milestone of 500+ five-star reviews from satisfied Austin customers."
  },
  {
    year: "2024",
    title: "Green Initiative",
    description: "Launched eco-friendly plumbing solutions and water conservation programs."
  }
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "ABC Plumber",
    "foundingDate": "2010",
    "description": "Austin's most trusted plumbing company since 2010, providing professional plumbing services with integrity and quality workmanship.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Congress Ave",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701"
    },
    "telephone": "+15125551234",
    "founder": {
      "@type": "Person",
      "name": "Mike Johnson"
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
              Serving Austin Since 2010
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About ABC Plumber
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, ABC Plumber has been Austin&apos;s most trusted name in plumbing services. 
              Founded on principles of integrity, quality, and community service, we&apos;ve built our 
              reputation one satisfied customer at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                
                <p>
                  ABC Plumber was founded in 2010 by Master Plumber Mike Johnson, who saw a need 
                  for honest, reliable plumbing services in the Austin community. After working 
                  for larger companies and witnessing overcharging and poor customer service, 
                  Mike decided to start his own company based on integrity and quality workmanship.
                </p>
                
               
                <p>
                  What started as a one-man operation has grown into Austin&apos;s most trusted plumbing 
                  company, serving thousands of satisfied customers throughout the greater Austin area. 
                  Despite our growth, we&apos;ve never lost sight of our core values: treating every 
                  customer like family and providing honest, fair-priced plumbing solutions.
                </p>
                
               
                <p>
                  Today, our team of licensed professionals continues Mike&apos;s vision of exceptional 
                  service, using the latest technology and techniques while maintaining the personal 
                  touch that has made us Austin&apos;s plumber of choice.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/contact">Experience ABC Plumber Services</Link>
              </Button>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Wrench className="h-24 w-24 text-blue-600 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">Family-Owned</h3>
                  <p className="text-gray-600">Austin business since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve the Austin community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional plumbing services 
              with the personal touch that sets ABC Plumber apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <Badge variant="outline" className="mb-4">{member.experience}</Badge>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our commitment to serving the Austin community.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="mb-3">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Our commitment to excellence speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Emergency Service</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Experience the ABC Plumber Difference?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the hundreds of satisfied Austin customers who trust ABC Plumber 
              for all their plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Plumbing Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15125551234">Call (512) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}