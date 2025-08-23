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
  Shield,
  Clock,
  Award,
  CheckCircle,
  Home,
  Phone,
  DollarSign,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Complete Roof Replacement Services in Dallas, TX | Apex Roofing',
  description: 'Professional roof replacement in Dallas with quality materials and expert installation. Licensed contractors, warranties included. Free estimates available.',
  path: '/services/roof-replacement',
  ogImage: '/og-roof-replacement.jpg'
});

const roofingMaterials = [
  {
    title: 'Asphalt Shingles',
    description: 'Popular, cost-effective option with excellent durability and variety of styles.',
    features: [
      '20-30 year warranty',
      'Weather resistant',
      'Multiple color options',
      'Affordable pricing'
    ],
    priceRange: '$8,000 - $15,000'
  },
  {
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles offering enhanced curb appeal and longevity.',
    features: [
      '25-50 year warranty',
      'Dimensional appearance',
      'Superior wind resistance',
      'Enhanced aesthetics'
    ],
    priceRange: '$12,000 - $20,000'
  },
  {
    title: 'Metal Roofing',
    description: 'Long-lasting, energy-efficient option perfect for Texas weather conditions.',
    features: [
      '40-70 year lifespan',
      'Energy efficient',
      'Fire resistant',
      'Low maintenance'
    ],
    priceRange: '$15,000 - $25,000'
  },
  {
    title: 'Tile Roofing',
    description: 'Premium option offering exceptional durability and distinctive appearance.',
    features: [
      '50+ year lifespan',
      'Excellent insulation',
      'Weather resistant',
      'Timeless appeal'
    ],
    priceRange: '$20,000 - $35,000'
  }
]

const replacementSigns = [
  'Age of roof (20+ years)',
  'Multiple missing shingles',
  'Widespread granule loss',
  'Frequent leak repairs',
  'Curling or buckling shingles',
  'Extensive storm damage',
  'High energy bills',
  'Visible roof deck damage'
]

const testimonials = [
  {
    text: 'Our new roof looks incredible! The team was professional, clean, and completed the job on schedule. The quality is outstanding.',
    author: 'Patricia Williams',
    rating: 5,
    location: 'Dallas, TX',
    service: 'Complete Roof Replacement'
  },
  {
    text: 'From consultation to completion, Apex Roofing exceeded our expectations. Great communication and beautiful results.',
    author: 'Robert Martinez',
    rating: 5,
    location: 'Richardson, TX',
    service: 'Metal Roof Installation'
  },
  {
    text: 'The investment was worth every penny. Our new roof has improved our home\'s value and energy efficiency significantly.',
    author: 'Susan Chen',
    rating: 5,
    location: 'Plano, TX',
    service: 'Architectural Shingle Replacement'
  }
]

export default function RoofReplacementPage() {
  return (
    <>
      <Script
        id="roof-replacement-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Roof Replacement Services',
            'description': 'Complete roof replacement services with quality materials and professional installation.',
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
            'serviceType': 'Roof Replacement',
            'areaServed': 'Dallas, TX'
          })
        }}
      />

      <PageHeader
        title="Complete Roof Replacement Services"
        subtitle="Transform your Dallas home with a new roof featuring quality materials, expert installation, and comprehensive warranties"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Roof Replacement' }
        ]}
      />

      {/* Service Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Complete Replacement
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                New Roof, New Protection
              </h2>
              <div className="space-y-4 text-[#4A6741]/80">
                <p>
                  When repairs are no longer enough, a complete roof replacement is the best 
                  investment in your home's protection and value. Our expert team provides 
                  comprehensive replacement services using the highest quality materials.
                </p>
                <p>
                  We handle every aspect of the replacement process, from the initial assessment 
                  and material selection to professional installation and final cleanup. Your 
                  satisfaction and home's protection are our top priorities.
                </p>
                <p>
                  With decades of experience and thousands of successful installations, we're 
                  Dallas's trusted choice for roof replacement services.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white">
                  <Link href="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image/Roof2.avif"
                alt="New roof installation in Dallas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#8A9A5B] text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Year Warranties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Material Options
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Choose Your Perfect Roof
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              We offer a wide range of premium roofing materials to match your style, budget, and performance needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {roofingMaterials.map((material, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-[#8A9A5B]/10 p-3">
                    <Home className="h-6 w-6 text-[#4A6741]" />
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{material.title}</CardTitle>
                  <div className="text-[#8A9A5B] font-semibold">{material.priceRange}</div>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-[#4A6741]/80 mb-4">{material.description}</p>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
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

      {/* When to Replace */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Replacement Indicators
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                When to Replace Your Roof
              </h2>
              <p className="mb-8 text-[#4A6741]/80">
                Knowing when to replace your roof can save you thousands in repairs and protect 
                your home from damage. Here are key signs it's time for a replacement:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {replacementSigns.map((sign, index) => (
                  <li key={index} className="flex items-start text-[#4A6741]/80">
                    <CheckCircle className="h-5 w-5 text-[#8A9A5B] mr-3 mt-0.5 flex-shrink-0" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-[#2F4F4F] text-white p-8">
              <CardHeader>
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                  <Calendar className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Replacement Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A5B] flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <div className="font-semibold">Consultation & Quote</div>
                      <div className="text-sm text-white/80">1-2 days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A5B] flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <div className="font-semibold">Material Ordering</div>
                      <div className="text-sm text-white/80">3-7 days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A5B] flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <div className="font-semibold">Installation</div>
                      <div className="text-sm text-white/80">2-5 days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A5B] flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <div className="font-semibold">Final Inspection</div>
                      <div className="text-sm text-white/80">1 day</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Benefits
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Investment Benefits
            </h2>
            <p className="mx-auto max-w-2xl text-[#E8EDE6]/80">
              A new roof is more than protection—it's an investment in your home's future.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Increased Home Value',
                description: 'Add significant value to your property with a new roof installation.',
                icon: DollarSign,
              },
              {
                title: 'Energy Efficiency',
                description: 'Reduce energy costs with modern, efficient roofing materials.',
                icon: Shield,
              },
              {
                title: 'Peace of Mind',
                description: 'Enjoy worry-free protection with comprehensive warranties.',
                icon: Award,
              },
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-black/10 border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A9A5B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex rounded-full bg-[#E8EDE6]/10 p-4 mx-auto">
                    <benefit.icon className="h-8 w-8 text-[#8A9A5B]" />
                  </div>
                  <CardTitle className="text-[#E8EDE6]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-[#E8EDE6]/70">{benefit.description}</p>
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
              Success Stories
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Happy Homeowners
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              See what our customers say about their roof replacement experience.
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
              Ready for a New Roof?
            </h2>
            <p className="mb-12 text-[#4A6741]/80">
              Transform your home with a beautiful, durable new roof. Contact us today for a free 
              consultation and detailed estimate for your roof replacement project.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Get Free Estimate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#2F4F4F] text-lg text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
