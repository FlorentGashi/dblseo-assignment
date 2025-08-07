import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Thermometer, Search, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to clear clogs and restore proper flow. We use advanced equipment to safely remove blockages from kitchen sinks, bathroom drains, and main sewer lines.",
    features: ["Hydro-jetting", "Video inspection", "Root removal", "Preventive maintenance"],
    href: "/services/drain-cleaning"
  },
  {
    icon: Thermometer,
    title: "Water Heater Services",
    description: "Complete water heater repair, installation, and maintenance services. From traditional tank heaters to modern tankless systems, we ensure you have reliable hot water year-round.",
    features: ["Repair & replacement", "Tankless installation", "Energy efficiency upgrades", "Annual maintenance"],
    href: "/services/water-heater"
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced leak detection services using state-of-the-art technology. We locate hidden leaks behind walls, under slabs, and in underground pipes to prevent costly water damage.",
    features: ["Electronic leak detection", "Thermal imaging", "Minimal excavation", "Insurance assistance"],
    href: "/services/leak-detection"
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent issues that can't wait. Our rapid response team is equipped to handle burst pipes, major leaks, and other plumbing emergencies.",
    features: ["24/7 availability", "Rapid response", "Emergency repairs", "Damage prevention"],
    href: "/services/emergency-plumbing"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, ABC Plumber provides the complete range 
            of plumbing services Austin homeowners and businesses trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-700" asChild>
                        <Link
                          href={service.href}
                          className="flex items-center space-x-2">
                          <span>Learn More About {service.title}</span>
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Plumbing Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}