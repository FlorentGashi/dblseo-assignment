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
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  CloudRain,
  Shield,
  Phone,
  Clock,
  CheckCircle,
  FileText,
  Camera,
  Wrench,
  AlertTriangle,
  Wind,
  Snowflake
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Storm Damage Roof Repair & Insurance Claims | Apex Roofing Dallas',
  description: 'Expert storm damage roof repair in Dallas. We work with insurance companies for hail, wind, and severe weather damage. Emergency services available.',
  path: '/services/storm-damage',
  ogImage: '/og-storm-damage.jpg'
});

const stormTypes = [
  {
    title: 'Hail Damage',
    description: 'Hail can cause significant damage to shingles, gutters, and roof components.',
    icon: Snowflake,
    signs: [
      'Granule loss on shingles',
      'Dented or cracked shingles',
      'Damaged gutters and downspouts',
      'Exposed roof deck areas'
    ]
  },
  {
    title: 'Wind Damage',
    description: 'High winds can lift, tear, or completely remove roofing materials.',
    icon: Wind,
    signs: [
      'Missing or loose shingles',
      'Exposed underlayment',
      'Damaged flashing',
      'Debris on roof'
    ]
  },
  {
    title: 'Water Damage',
    description: 'Heavy rains can exploit weaknesses and cause extensive water infiltration.',
    icon: CloudRain,
    signs: [
      'Water stains on ceilings',
      'Mold or mildew growth',
      'Warped or sagging areas',
      'Interior moisture issues'
    ]
  }
]

const insuranceProcess = [
  {
    step: 1,
    title: 'Document the Damage',
    description: 'Take photos and videos of all visible damage before making any temporary repairs.',
    icon: Camera
  },
  {
    step: 2,
    title: 'Contact Your Insurance',
    description: 'Report the claim to your insurance company as soon as possible after the storm.',
    icon: Phone
  },
  {
    step: 3,
    title: 'Schedule Inspection',
    description: 'We\'ll provide a detailed assessment and work with your insurance adjuster.',
    icon: FileText
  },
  {
    step: 4,
    title: 'Begin Repairs',
    description: 'Once approved, we\'ll start the repair or replacement process immediately.',
    icon: Wrench
  }
]

const emergencyTips = [
  'Prioritize safety - avoid going on the roof',
  'Document damage with photos/videos',
  'Place buckets under active leaks',
  'Move valuables away from damaged areas',
  'Remove standing water to prevent mold',
  'Contact your insurance company immediately',
  'Schedule professional inspection',
  'Keep receipts for temporary repairs'
]

const testimonials = [
  {
    text: 'After the hailstorm, Apex Roofing handled everything - the insurance claim, repairs, and cleanup. Outstanding service during a stressful time.',
    author: 'David Thompson',
    rating: 5,
    location: 'Plano, TX',
    service: 'Storm Damage Repair'
  },
  {
    text: 'The team responded immediately after the storm and had our roof repaired within days. Professional, efficient, and understanding.',
    author: 'Lisa Rodriguez',
    rating: 5,
    location: 'Dallas, TX',
    service: 'Emergency Storm Repair'
  },
  {
    text: 'They made the insurance process seamless. The new roof looks better than our original! Highly recommend for storm damage.',
    author: 'Michael Brown',
    rating: 5,
    location: 'Richardson, TX',
    service: 'Insurance Claim Assistance'
  }
]

export default function StormDamagePage() {
  return (
    <>
      <Script
        id="storm-damage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Storm Damage Roof Repair',
            'description': 'Emergency storm damage roof repair and insurance claim assistance services.',
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
            'serviceType': 'Storm Damage Repair',
            'areaServed': 'Dallas, TX',
            'availableChannel': {
              '@type': 'ServiceChannel',
              'serviceType': 'Emergency Service',
              'availableLanguage': 'English'
            }
          })
        }}
      />

      <PageHeader
        title="Storm Damage Roof Repair"
        subtitle="Expert storm damage assessment, repair, and insurance claim assistance for Dallas homeowners"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Storm Damage' }
        ]}
      />

      {/* Emergency Banner */}
      <section className="bg-[#8A9A5B] py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-white md:flex-row">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
              <span className="font-semibold">Emergency Storm Damage?</span>
            </div>
            <div className="flex items-center gap-6">
              <span>24/7 Emergency Service Available</span>
              <Button asChild variant="secondary" className="bg-white text-[#8A9A5B] hover:bg-gray-100">
                <Link href="tel:+12145551234">
                  Call Now: (214) 555-1234
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Storm Response
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                When Nature Strikes, We Respond
              </h2>
              <div className="space-y-4 text-[#4A6741]/80">
                <p>
                  Texas weather can be unpredictable and destructive. When storms damage your roof, 
                  you need immediate, professional assistance to protect your home and family. Our 
                  experienced team provides rapid response and comprehensive storm damage services.
                </p>
                <p>
                  We work directly with insurance companies to streamline the claims process and 
                  ensure you receive the coverage you deserve. From emergency repairs to complete 
                  roof replacement, we're here when you need us most.
                </p>
                <p>
                  Available 24/7 for emergency situations, our certified professionals will assess 
                  the damage, provide temporary protection, and develop a comprehensive repair plan.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white">
                  <Link href="/contact">
                    Schedule Inspection
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white">
                  <Link href="tel:+12145551234">
                    Emergency Call
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image/Roof2.avif"
                alt="Storm damage roof repair in Dallas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage Types */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Damage Assessment
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Types of Storm Damage
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Recognizing storm damage early can prevent costly repairs and protect your home from further damage.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {stormTypes.map((storm, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10 text-center">
                  <div className="mb-4 inline-flex rounded-lg bg-[#8A9A5B]/10 p-4 mx-auto">
                    <storm.icon className="h-8 w-8 text-[#4A6741]" />
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{storm.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-[#4A6741]/80 mb-6">{storm.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#2F4F4F]">Warning Signs:</h4>
                    <ul className="space-y-2">
                      {storm.signs.map((sign, idx) => (
                        <li key={idx} className="flex items-start text-sm text-[#4A6741]/70">
                          <CheckCircle className="h-4 w-4 text-[#8A9A5B] mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Insurance Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Insurance Claims
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              We Work With Your Insurance
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Our experienced team will guide you through the insurance claims process to ensure 
              you receive fair compensation for storm damage repairs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {insuranceProcess.map((item, index) => (
              <Card 
                key={index} 
                className="text-center border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-full bg-[#8A9A5B]/10 p-4 mx-auto">
                    <item.icon className="h-8 w-8 text-[#4A6741]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8A9A5B] text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
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

      {/* Emergency Tips */}
      <section className="bg-[#2F4F4F] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
                Emergency Response
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl">
                What to Do After a Storm
              </h2>
              <p className="mb-8 text-[#E8EDE6]/80">
                Taking the right steps immediately after storm damage can minimize further harm 
                to your property and streamline the repair process.
              </p>
              <ul className="space-y-3">
                {emergencyTips.map((tip, index) => (
                  <li key={index} className="flex items-start text-[#E8EDE6]/80">
                    <CheckCircle className="h-5 w-5 text-[#8A9A5B] mr-3 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-[#8A9A5B] text-white p-8">
              <CardHeader>
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Emergency Response Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="font-semibold">Immediate (0-24 hours)</div>
                    <div className="text-sm text-white/80">Emergency assessment and temporary repairs</div>
                  </div>
                  <div>
                    <div className="font-semibold">Short-term (1-3 days)</div>
                    <div className="text-sm text-white/80">Insurance documentation and detailed inspection</div>
                  </div>
                  <div>
                    <div className="font-semibold">Medium-term (1-2 weeks)</div>
                    <div className="text-sm text-white/80">Insurance approval and repair planning</div>
                  </div>
                  <div>
                    <div className="font-semibold">Long-term (2-4 weeks)</div>
                    <div className="text-sm text-white/80">Complete repair or replacement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Storm Recovery Stories
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Helping Families Recover
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              See how we've helped Dallas families recover from storm damage and get back to normal.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                rating={testimonial.rating}
                location={testimonial.location}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Need Storm Damage Assistance?
            </h2>
            <p className="mb-12 text-[#4A6741]/80">
              Don't wait - storm damage can worsen quickly. Contact our emergency response team 
              for immediate assistance and expert guidance through the repair process.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-red-600 text-lg text-white hover:bg-red-700">
                <Link href="tel:+12145551234">
                  Emergency Service
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Schedule Inspection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
