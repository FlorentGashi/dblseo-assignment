import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { generateMetadata } from '@/lib/metadata'
import ReviewCarousel from '@/components/reusable/ReviewCarousel'
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'
import {
  Shield,
  Clock,
  Award,
  Wrench,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Trophy,
  Home,
  CheckCircle,
  Settings
} from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Apex Roofing | Top Roofing Contractors in Dallas, TX',
  description: 'Professional residential roofing services in Dallas including repairs, replacements, and installations. Free quotes available.',
  path: '/',
  ogImage: '/og-home.jpg'
});

const services = [
  {
    title: 'Roof Repair',
    description: 'Expert repairs for leaks, storm damage, and wear & tear.',
    icon: Wrench,
    link: '/services/roof-repair'
  },
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacement with quality materials and expert installation.',
    icon: Shield,
    link: '/services/roof-replacement'
  },
  {
    title: 'Storm Damage',
    description: '24/7 emergency storm damage repair and insurance claim assistance.',
    icon: Clock,
    link: '/services/storm-damage'
  },
  {
    title: 'Roof Inspection',
    description: 'Thorough roof evaluations to prevent future problems.',
    icon: Award,
    link: '/services/inspection'
  },
]

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RoofingContractor',
            'name': 'Apex Roofing',
            'image': '/Apex-Roofing.png',
            '@id': 'https://apexroofing.com',
            'url': 'https://apexroofing.com',
            'telephone': '+12145551234',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '123 Roofing Way',
              'addressLocality': 'Dallas',
              'addressRegion': 'TX',
              'postalCode': '75201',
              'addressCountry': 'US'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 32.7767,
              'longitude': -96.7970
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              'opens': '09:00',
              'closes': '17:00'
            },
            'sameAs': [
              'https://www.facebook.com/apexroofing',
              'https://twitter.com/apexroofing'
            ],
            'priceRange': '$$'
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh]">
        <Image
          src="/image/Roof2.avif"
          alt="Professional roofing services in Dallas"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="mx-auto max-w-7xl relative z-10 flex min-h-[85vh] flex-col items-center justify-center text-center px-4 pt-20 md:pt-0">
          <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#E8EDE6] backdrop-blur-sm">
            Dallas&apos;s Most Trusted Roofing Experts
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#E8EDE6] sm:text-5xl md:text-6xl lg:text-7xl">
            Protecting Your Home,<br className="hidden sm:inline" /> Preserving Your Peace
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-[#E8EDE6]/90 sm:text-xl md:text-2xl">
            Expert roofing solutions with premium materials and craftmanship. 
            Serving Dallas homeowners with pride and excellence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button 
              size="lg" 
              className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741] shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Inspection
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#E8EDE6] text-lg text-[#E8EDE6] hover:bg-white hover:text-[#2F4F4F] shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Now
            </Button>
          </div>
          <div className="mt-12 mb-8 md:mb-0 flex flex-wrap items-center justify-center gap-8">
            {[
              { 
                label: 'Google Rating', 
                value: '4.9/5', 
                Icon: Star,
                className: "text-yellow-300"
              },
              { 
                label: 'Projects Done', 
                value: '2000+', 
                Icon: Home,
                className: "text-[#9CB582]"
              },
              { 
                label: 'Years Experience', 
                value: '15+', 
                Icon: Settings,
                className: "text-[#9CB582]"
              },
            ].map((stat, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2"
              >
                <stat.Icon className={`h-5 w-5 ${stat.className} ${stat.Icon === Star ? 'fill-current' : ''}`} />
                <span className="font-bold text-[#E8EDE6]">{stat.value}</span>
                <span className="text-sm text-[#E8EDE6]/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-[#8A9A5B]/20 bg-[#E8EDE6]/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                label: 'Years Experience', 
                value: '15+', 
                Icon: Trophy,
                className: "text-[#8A9A5B]"
              },
              { 
                label: 'Projects Completed', 
                value: '2,000+', 
                Icon: Home,
                className: "text-[#8A9A5B]"
              },
              { 
                label: 'Customer Rating', 
                value: '4.9/5', 
                Icon: Star,
                className: "text-yellow-400"
              },
              { 
                label: 'BBB Rating', 
                value: 'A+', 
                Icon: CheckCircle,
                className: "text-[#8A9A5B]"
              },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl bg-white p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 inline-flex rounded-full bg-[#E8EDE6] p-3">
                  <stat.Icon className={`h-6 w-6 ${stat.className}`} />
                </div>
                <div className="text-3xl font-bold text-[#2F4F4F]">{stat.value}</div>
                <div className="mt-1 text-sm text-[#4A6741]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Our Services
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Comprehensive Roofing Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              From repairs to replacements, we provide expert roofing services 
              tailored to Dallas homes and weather conditions.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Text Content on Left */}
                    <div className="flex-1">
                      <CardTitle className="text-[#2F4F4F] mb-3 text-lg font-bold">{service.title}</CardTitle>
                      <p className="text-[#4A6741]/80 text-sm leading-relaxed">{service.description}</p>
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-[#4A6741] hover:text-[#2F4F4F] transition-colors mt-3 text-sm font-medium"
                      >
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    
                    {/* Icon on Right */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex rounded-lg bg-[#8A9A5B]/10 p-3 text-[#4A6741] group-hover:bg-[#8A9A5B]/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Excellence in Every Shingle
            </h2>
            <p className="mx-auto max-w-2xl text-[#E8EDE6]/80">
              When it comes to protecting your home, experience and dedication make all the difference.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed and insured for your peace of mind',
                icon: Shield,
              },
              {
                title: 'Expert Team',
                description: 'Skilled professionals with years of experience',
                icon: Award,
              },
              {
                title: '24/7 Support',
                description: 'Emergency services available around the clock',
                icon: Clock,
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl bg-black/10 p-8 text-center transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8A9A5B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-full bg-[#E8EDE6]/10 p-4">
                    <feature.icon className="h-8 w-8 text-[#8A9A5B]" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-[#E8EDE6]">
                    {feature.title}
                  </h3>
                  <p className="text-[#E8EDE6]/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <ReviewCarousel />

      {/* CTA Section */}
      <section className="bg-[#2F4F4F] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Get Started Today
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Protect Your Investment
            </h2>
            <p className="mb-12 text-[#E8EDE6]/80">
              Schedule your free inspection today and join hundreds of satisfied homeowners
              who trust Dallas&apos;s premier roofing experts.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button 
                size="lg" 
                className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741] shadow-lg hover:shadow-xl transition-all"
              >
                Free Inspection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#E8EDE6] text-lg text-[#E8EDE6] hover:bg-[#E8EDE6] hover:text-[#2F4F4F] shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '123 Roofing Way, Dallas, TX 75201',
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: '(214) 555-1234',
                href: 'tel:+12145551234',
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'info@apexroofing.com',
                href: 'mailto:info@apexroofing.com',
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl bg-[#E8EDE6]/30 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-full bg-[#8A9A5B]/20 p-4 text-[#4A6741]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-semibold text-[#2F4F4F]">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#4A6741] hover:text-[#2F4F4F] transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-[#4A6741]">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
