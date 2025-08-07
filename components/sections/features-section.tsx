import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, Wrench, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed Master Plumbers with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for plumbing emergencies. We're here when you need us most."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 50 years of combined experience serving the Austin community with professional plumbing services."
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties and a 100% satisfaction guarantee."
  },
  {
    icon: Wrench,
    title: "Latest Equipment",
    description: "State-of-the-art tools and technology for efficient, accurate, and minimally invasive repairs."
  },
  {
    icon: MapPin,
    title: "Local Experts",
    description: "Austin-based team with deep knowledge of local plumbing codes, regulations, and common issues."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose ABC Plumber?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another plumbing company. Here&apos;s what sets us apart from the competition 
            and makes us Austin&apos;s most trusted plumbing professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}