import Script from 'next/script'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'
import PageHeader from '@/components/reusable/PageHeader'
import ServiceCard from '@/components/reusable/ServiceCard'
import { Button } from '@/components/ui/button'
import {
  Wrench,
  Shield,
  Clock,
  Award,
  Home,
  Building,
  HardHat,
  Phone
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Professional Roofing Services in Dallas, TX | Apex Roofing',
  description: 'Comprehensive roofing services in Dallas including repairs, replacements, inspections, and emergency services. Licensed contractors with quality materials guaranteed.',
  path: '/services',
  ogImage: '/og-services.jpg'
});

const services = [
  {
    title: 'Roof Repair',
    description: 'Expert repairs for leaks, storm damage, and wear & tear with quick response times and lasting solutions.',
    icon: Wrench,
    link: '/services/roof-repair',
    features: [
      'Leak detection and repair',
      'Storm damage restoration',
      'Shingle replacement',
      'Emergency repairs'
    ],
    price: 'Starting at $150'
  },
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacement with quality materials and expert installation backed by comprehensive warranties.',
    icon: Shield,
    link: '/services/roof-replacement',
    features: [
      'Complete tear-off and replacement',
      'Premium material selection',
      'Professional installation',
      'Warranty protection'
    ],
    price: 'From $8,000'
  },
  {
    title: 'Storm Damage',
    description: '24/7 emergency storm damage repair and insurance claim assistance to restore your roof quickly.',
    icon: Clock,
    link: '/services/storm-damage',
    features: [
      '24/7 emergency response',
      'Insurance claim assistance',
      'Temporary protection',
      'Complete restoration'
    ],
    price: 'Emergency rates'
  },
  {
    title: 'Roof Inspection',
    description: 'Thorough roof evaluations to prevent future problems and extend the life of your roofing system.',
    icon: Award,
    link: '/services/inspection',
    features: [
      'Comprehensive inspection',
      'Detailed report',
      'Photo documentation',
      'Maintenance recommendations'
    ],
    price: 'Free estimates'
  },
  {
    title: 'Residential Roofing',
    description: 'Specialized residential roofing services for homes throughout the Dallas metropolitan area.',
    icon: Home,
    link: '/services/residential-roofing',
    features: [
      'Single-family homes',
      'Townhouses and condos',
      'Custom home solutions',
      'HOA approved materials'
    ],
    price: 'Custom quotes'
  },
  {
    title: 'Commercial Roofing',
    description: 'Professional commercial roofing solutions for businesses, warehouses, and industrial buildings.',
    icon: Building,
    link: '/services/commercial-roofing',
    features: [
      'Flat roof systems',
      'TPO & EPDM roofing',
      'Preventive maintenance',
      'Large-scale projects'
    ],
    price: 'Volume pricing'
  },
]

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Professional Roofing Services',
            'description': 'Comprehensive roofing services in Dallas including repairs, replacements, inspections, and emergency services.',
            'provider': {
              '@type': 'RoofingContractor',
              'name': 'Apex Roofing',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Dallas',
                'addressRegion': 'TX'
              }
            },
            'serviceType': 'Roofing Services',
            'areaServed': 'Dallas, TX'
          })
        }}
      />

      <PageHeader
        title="Professional Roofing Services"
        subtitle="Comprehensive roofing solutions for residential and commercial properties in Dallas"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Our Services
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Complete Roofing Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              From emergency repairs to complete replacements, we provide expert roofing services 
              tailored to Dallas homes and businesses.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Our Process
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              How We Work
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Our streamlined process ensures quality results and customer satisfaction from start to finish.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Free inspection and detailed assessment of your roofing needs.'
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description: 'Detailed quote with material options and timeline estimates.'
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Expert installation by our certified roofing professionals.'
              },
              {
                step: '04',
                title: 'Final Inspection',
                description: 'Quality assurance check and cleanup to ensure satisfaction.'
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl bg-white p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 text-4xl font-bold text-[#8A9A5B]">{process.step}</div>
                  <h3 className="mb-3 text-xl font-semibold text-[#2F4F4F]">{process.title}</h3>
                  <p className="text-[#4A6741]/80">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Service Excellence Guaranteed
            </h2>
            <p className="mx-auto max-w-2xl text-[#E8EDE6]/80">
              Our commitment to quality and customer satisfaction sets us apart from other roofing contractors.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed and insured for your complete peace of mind and protection.',
                icon: Shield,
              },
              {
                title: '24/7 Emergency Service',
                description: 'Emergency services available around the clock when you need immediate assistance.',
                icon: Clock,
              },
              {
                title: 'Quality Guarantee',
                description: 'We stand behind our work with comprehensive warranties and quality guarantees.',
                icon: Award,
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Get Started Today
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Need Professional Roofing Services?
            </h2>
            <p className="mb-12 text-[#4A6741]/80">
              Get a free consultation and estimate for your roofing project. Our experts are ready to help 
              you choose the best solution for your needs and budget.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Get Free Estimate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#2F4F4F] text-lg text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white">
                <Link href="tel:+12145551234">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
