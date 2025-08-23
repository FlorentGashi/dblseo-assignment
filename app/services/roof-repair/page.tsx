import Script from 'next/script'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'
import PageHeader from '@/components/reusable/PageHeader'
import ServiceCard from '@/components/reusable/ServiceCard'
import TestimonialCard from '@/components/reusable/TestimonialCard'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Phone,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Professional Roof Repair Services in Dallas, TX | Apex Roofing',
  description: 'Expert roof repair services in Dallas. Fix leaks, storm damage, and wear issues fast. Licensed contractors with warranty. Call for emergency repairs.',
  path: '/services/roof-repair',
  ogImage: '/og-roof-repair.jpg'
});

const repairTypes = [
  {
    title: 'Leak Repair',
    description: 'Quick identification and permanent repair of roof leaks to prevent water damage.',
    icon: Shield,
    features: [
      'Advanced leak detection',
      'Waterproof sealing',
      'Interior damage assessment',
      'Preventive measures'
    ]
  },
  {
    title: 'Storm Damage Repair',
    description: 'Comprehensive repair of storm-related roof damage including hail, wind, and debris.',
    icon: AlertTriangle,
    features: [
      'Emergency tarping',
      'Insurance documentation',
      'Structural assessment',
      'Complete restoration'
    ]
  },
  {
    title: 'Shingle Replacement',
    description: 'Professional replacement of damaged, missing, or worn shingles.',
    icon: Wrench,
    features: [
      'Color matching',
      'Quality materials',
      'Proper installation',
      'Warranty coverage'
    ]
  },
  {
    title: 'Flashing Repair',
    description: 'Expert repair of roof flashing around chimneys, vents, and roof joints.',
    icon: CheckCircle,
    features: [
      'Chimney flashing',
      'Vent boot replacement',
      'Valley repair',
      'Seamless integration'
    ]
  }
]

const commonIssues = [
  'Missing or damaged shingles',
  'Roof leaks and water damage',
  'Cracked or damaged flashing',
  'Loose or damaged gutters',
  'Storm and hail damage',
  'Worn or curling shingles',
  'Damaged or missing caulking',
  'Structural damage from age'
]

const testimonials = [
  {
    text: 'Apex Roofing fixed our leak quickly and professionally. No more water stains on our ceiling!',
    author: 'Maria Gonzalez',
    rating: 5,
    location: 'Dallas, TX',
    service: 'Leak Repair'
  },
  {
    text: 'After the storm, they were out the same day to assess and make emergency repairs. Excellent service!',
    author: 'James Wilson',
    rating: 5,
    location: 'Richardson, TX',
    service: 'Storm Damage Repair'
  },
  {
    text: 'Professional job replacing our damaged shingles. You can\'t even tell where the repair was made.',
    author: 'Linda Chen',
    rating: 5,
    location: 'Plano, TX',
    service: 'Shingle Replacement'
  }
]

export default function RoofRepairPage() {
  return (
    <>
      <Script
        id="roof-repair-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Roof Repair Services',
            'description': 'Professional roof repair services including leak repair, storm damage, and shingle replacement.',
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
            'serviceType': 'Roof Repair',
            'areaServed': 'Dallas, TX'
          })
        }}
      />

      <PageHeader
        title="Professional Roof Repair Services"
        subtitle="Fast, reliable roof repairs to protect your Dallas home from leaks, storm damage, and wear"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Roof Repair' }
        ]}
      />

      {/* Service Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Expert Repairs
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                Quick, Reliable Roof Repairs
              </h2>
              <div className="space-y-4 text-[#4A6741]/80">
                <p>
                  Don't let small roof problems become major headaches. Our experienced repair team 
                  quickly identifies and fixes roof issues before they cause costly interior damage.
                </p>
                <p>
                  From minor shingle repairs to complex leak resolution, we handle all types of 
                  roofing repairs with precision and care. Our goal is to restore your roof's 
                  integrity and protect your home for years to come.
                </p>
                <p>
                  We use quality materials that match your existing roof and provide warranties 
                  on all repair work for your peace of mind.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button asChild className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white">
                  <Link href="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-[#2F4F4F] text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white">
                  <Link href="tel:+12145551234">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Repair
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image/Roof2.avif"
                alt="Professional roof repair in Dallas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#8A9A5B] text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Repair Services
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Complete Repair Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              We handle all types of roof repairs with professional expertise and quality materials.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {repairTypes.map((repair, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-[#8A9A5B]/10 p-4 mx-auto">
                    <repair.icon className="h-8 w-8 text-[#4A6741]" />
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{repair.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-[#4A6741]/80 mb-4">{repair.description}</p>
                  <ul className="space-y-2 text-sm">
                    {repair.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#4A6741]/70">
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

      {/* Common Issues */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Common Problems
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                Signs You Need Roof Repair
              </h2>
              <p className="mb-8 text-[#4A6741]/80">
                Don't wait until small problems become major issues. Here are common signs 
                that indicate your roof needs professional attention:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start text-[#4A6741]/80">
                    <AlertTriangle className="h-5 w-5 text-[#8A9A5B] mr-3 mt-0.5 flex-shrink-0" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card className="bg-[#8A9A5B] text-white p-8">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white">Repair Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Minor Repairs</span>
                      <span className="font-bold">$150 - $500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Moderate Repairs</span>
                      <span className="font-bold">$500 - $1,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Major Repairs</span>
                      <span className="font-bold">$1,500 - $5,000</span>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm text-white/80">
                        * Prices vary based on materials and complexity. 
                        Free estimates available.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Our Process
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              How We Handle Repairs
            </h2>
            <p className="mx-auto max-w-2xl text-[#E8EDE6]/80">
              Our systematic approach ensures efficient, quality repairs that last.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Emergency Response',
                description: 'Quick assessment and temporary measures if needed.'
              },
              {
                step: '02',
                title: 'Detailed Inspection',
                description: 'Thorough evaluation to identify all issues and damage.'
              },
              {
                step: '03',
                title: 'Repair Execution',
                description: 'Professional repair using quality materials and techniques.'
              },
              {
                step: '04',
                title: 'Quality Assurance',
                description: 'Final inspection and cleanup to ensure satisfaction.'
              }
            ].map((process, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-black/10 border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A9A5B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 text-4xl font-bold text-[#8A9A5B]">{process.step}</div>
                  <CardTitle className="text-[#E8EDE6]">{process.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-[#E8EDE6]/70">{process.description}</p>
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
              Customer Stories
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Repair Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              See what our customers say about our roof repair services.
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
              Need Roof Repair Today?
            </h2>
            <p className="mb-12 text-[#4A6741]/80">
              Don't let roof problems get worse. Contact us now for fast, professional repair services 
              that protect your home and save you money in the long run.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Schedule Repair
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#2F4F4F] text-lg text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white">
                <Link href="tel:+12145551234">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Emergency
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
