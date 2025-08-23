import Script from 'next/script'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'
import PageHeader from '@/components/reusable/PageHeader'
import TestimonialCard from '@/components/reusable/TestimonialCard'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Search,
  Shield,
  Camera,
  FileText,
  CheckCircle,
  Clock,
  Award,
  AlertTriangle,
  Home,
  Calendar,
  DollarSign,
  Eye,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Professional Roof Inspection Services in Dallas, TX | Apex Roofing',
  description: 'Comprehensive roof inspections in Dallas. Detailed reports, photos, and maintenance recommendations. Schedule your free inspection today.',
  path: '/services/roof-inspection',
  ogImage: '/og-roof-inspection.jpg'
});

const inspectionTypes = [
  {
    title: 'Pre-Purchase Inspection',
    description: 'Comprehensive assessment for potential homebuyers to identify any issues before purchase.',
    features: [
      'Detailed condition report',
      'Photo documentation',
      'Estimated repair costs',
      'Maintenance recommendations'
    ],
    price: '$150 - $300',
    duration: '1-2 hours'
  },
  {
    title: 'Insurance Inspection',
    description: 'Professional documentation for insurance claims and policy requirements.',
    features: [
      'Insurance-compliant report',
      'Damage documentation',
      'Claim support',
      'Professional testimony'
    ],
    price: '$200 - $400',
    duration: '2-3 hours'
  },
  {
    title: 'Maintenance Inspection',
    description: 'Regular preventive inspections to catch issues early and extend roof life.',
    features: [
      'Annual inspection',
      'Preventive maintenance plan',
      'Issue prioritization',
      'Cost-saving recommendations'
    ],
    price: '$100 - $200',
    duration: '1 hour'
  },
  {
    title: 'Storm Damage Assessment',
    description: 'Emergency inspection after severe weather to document damage for repairs.',
    features: [
      'Emergency response',
      'Damage assessment',
      'Temporary repair recommendations',
      'Insurance documentation'
    ],
    price: '$Free with repair',
    duration: '1-2 hours'
  }
]

const inspectionProcess = [
  {
    step: 1,
    title: 'Exterior Examination',
    description: 'Thorough inspection of roofing materials, gutters, flashing, and structural elements.',
    icon: Eye
  },
  {
    step: 2,
    title: 'Interior Assessment',
    description: 'Check attic spaces, ceilings, and walls for signs of leaks or damage.',
    icon: Home
  },
  {
    step: 3,
    title: 'Documentation',
    description: 'High-resolution photos and detailed notes of all findings and observations.',
    icon: Camera
  },
  {
    step: 4,
    title: 'Detailed Report',
    description: 'Comprehensive written report with recommendations and priority rankings.',
    icon: FileText
  }
]

const inspectionItems = [
  'Shingle condition and wear patterns',
  'Flashing around chimneys and vents',
  'Gutter and downspout condition',
  'Attic ventilation adequacy',
  'Insulation condition and coverage',
  'Signs of water damage or leaks',
  'Structural integrity assessment',
  'Safety hazard identification',
  'Energy efficiency evaluation',
  'Maintenance recommendations'
]

const warningSign = [
  'Age of roof (15+ years)',
  'Missing or damaged shingles',
  'Granule loss in gutters',
  'Sagging roof areas',
  'Water stains on ceilings',
  'Increased energy bills',
  'Daylight visible through roof',
  'Animal or pest entry points'
]

const testimonials = [
  {
    text: 'The inspection report was incredibly detailed and helped us negotiate a better price on our home purchase. Professional and thorough service.',
    author: 'Jennifer Wilson',
    rating: 5,
    location: 'Dallas, TX',
    service: 'Pre-Purchase Inspection'
  },
  {
    text: 'They identified several issues we didn\'t know about and provided a clear plan for addressing them. Saved us thousands in the long run.',
    author: 'Mark Johnson',
    rating: 5,
    location: 'Plano, TX',
    service: 'Maintenance Inspection'
  },
  {
    text: 'Fast, professional inspection after the storm. The detailed report helped streamline our insurance claim process.',
    author: 'Sarah Davis',
    rating: 5,
    location: 'Richardson, TX',
    service: 'Storm Damage Assessment'
  }
]

export default function RoofInspectionPage() {
  return (
    <>
      <Script
        id="roof-inspection-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Professional Roof Inspection Services',
            'description': 'Comprehensive roof inspection services for maintenance, insurance, and pre-purchase assessments.',
            'provider': {
              '@type': 'RoofingContractor',
              'name': 'Apex Roofing',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Dallas',
                'addressRegion': 'TX'
              },
              'telephone': '+12145551234'
            },
            'serviceType': 'Roof Inspection',
            'areaServed': 'Dallas, TX'
          })
        }}
      />

      <PageHeader
        title="Professional Roof Inspection Services"
        subtitle="Comprehensive roof assessments to protect your investment and ensure your family's safety"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Roof Inspection' }
        ]}
      />

      {/* Service Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Professional Assessment
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                Know Your Roof's Condition
              </h2>
              <div className="space-y-4 text-[#4A6741]/80">
                <p>
                  A professional roof inspection is one of the most valuable investments you can 
                  make in your home's protection. Our certified inspectors provide detailed 
                  assessments that identify potential issues before they become costly problems.
                </p>
                <p>
                  Whether you're buying a home, filing an insurance claim, or simply maintaining 
                  your property, our comprehensive inspections give you the information you need 
                  to make informed decisions about your roof.
                </p>
                <p>
                  Our detailed reports include high-resolution photos, professional recommendations, 
                  and priority rankings to help you plan and budget for any necessary repairs or maintenance.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white">
                  <Link href="/contact">
                    Schedule Free Inspection
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image/Roof2.avif"
                alt="Professional roof inspection in Dallas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#8A9A5B] text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm">With Repair Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Inspection Types
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Tailored Inspection Services
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              We offer specialized inspection services designed to meet your specific needs and circumstances.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {inspectionTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-[#2F4F4F]">{type.title}</CardTitle>
                    <div className="inline-flex rounded-lg bg-[#8A9A5B]/10 p-3">
                      <Search className="h-6 w-6 text-[#4A6741]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[#8A9A5B] font-semibold">{type.price}</div>
                    <div className="text-sm text-[#4A6741]/60">{type.duration}</div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-[#4A6741]/80 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#4A6741]/70">
                        <CheckCircle className="h-4 w-4 text-[#8A9A5B] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Our Process
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Thorough Inspection Process
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Our systematic approach ensures no detail is overlooked during your roof inspection.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {inspectionProcess.map((item, index) => (
              <Card 
                key={index} 
                className="text-center border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A5B] text-white font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="inline-flex rounded-full bg-[#8A9A5B]/10 p-4">
                      <item.icon className="h-8 w-8 text-[#4A6741]" />
                    </div>
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A6741]/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Inspect */}
      <section className="bg-[#2F4F4F] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
                Comprehensive Review
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl">
                What We Inspect
              </h2>
              <p className="mb-8 text-[#E8EDE6]/80">
                Our comprehensive inspection covers every aspect of your roofing system to ensure 
                complete protection and optimal performance.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {inspectionItems.map((item, index) => (
                  <li key={index} className="flex items-start text-[#E8EDE6]/80">
                    <CheckCircle className="h-5 w-5 text-[#8A9A5B] mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-[#8A9A5B] text-white p-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Warning Signs You Need Inspection</CardTitle>
                  <div className="inline-flex rounded-full bg-white/20 p-3">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {warningSign.map((sign, index) => (
                    <li key={index} className="flex items-start text-white/90">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Benefits
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Why Choose Professional Inspection?
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Professional roof inspections provide valuable insights that can save you money and protect your investment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Cost Savings',
                description: 'Identify issues early before they become expensive repairs or replacements.',
                icon: DollarSign,
              },
              {
                title: 'Peace of Mind',
                description: 'Know the true condition of your roof with professional assessment.',
                icon: Shield,
              },
              {
                title: 'Insurance Support',
                description: 'Professional documentation for insurance claims and policy requirements.',
                icon: Award,
              },
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex rounded-full bg-[#8A9A5B]/10 p-4 mx-auto">
                    <benefit.icon className="h-8 w-8 text-[#4A6741]" />
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-[#4A6741]/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Client Experiences
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Trusted by Dallas Homeowners
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              See what our clients say about our thorough inspection services and detailed reporting.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#8A9A5B] text-[#8A9A5B]" />
                      ))}
                    </div>
                  </div>
                  {testimonial.service && (
                    <div className="text-sm text-[#8A9A5B] font-medium mb-2">{testimonial.service}</div>
                  )}
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-[#4A6741]/90 italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="relative z-10 flex items-center gap-3 text-sm">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center text-[#8A9A5B] font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[#2F4F4F] truncate">{testimonial.author}</div>
                    <div className="text-[#4A6741]/70 text-xs truncate">{testimonial.location}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Schedule Your Roof Inspection
            </h2>
            <p className="mb-12 text-[#E8EDE6]/80">
              Don't wait for problems to become emergencies. Schedule a professional roof inspection 
              today and get the peace of mind that comes with knowing your roof's true condition.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Schedule Free Inspection
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#E8EDE6] text-lg text-[#E8EDE6] hover:bg-[#E8EDE6] hover:text-[#2F4F4F]">
                <Link href="tel:+12145551234">
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
