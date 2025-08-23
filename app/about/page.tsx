import Image from 'next/image'
import Script from 'next/script'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'
import PageHeader from '@/components/reusable/PageHeader'
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
  Users,
  MapPin,
  Phone,
  Calendar,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'About Apex Roofing | 15+ Years Serving Dallas, TX',
  description: 'Learn about Apex Roofing\'s history, team, and commitment to excellence. Serving Dallas with professional roofing services since 2008.',
  path: '/about',
  ogImage: '/og-about.jpg'
});

const stats = [
  { label: 'Years in Business', value: '15+', icon: Calendar },
  { label: 'Projects Completed', value: '2,000+', icon: CheckCircle },
  { label: 'Team Members', value: '25+', icon: Users },
  { label: 'Service Areas', value: '50+', icon: MapPin },
]

const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'We use only the highest quality materials and employ skilled craftsmen who take pride in their work.',
    icon: Award,
  },
  {
    title: 'Reliable Service',
    description: 'Our team is punctual, professional, and committed to completing projects on time and within budget.',
    icon: Clock,
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind and protection throughout every project.',
    icon: Shield,
  },
]

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About Apex Roofing',
            'description': 'Learn about Apex Roofing\'s history, team, and commitment to excellence.',
            'url': 'https://apexroofing.com/about',
            'mainEntity': {
              '@type': 'RoofingContractor',
              'name': 'Apex Roofing',
              'foundingDate': '2008',
              'numberOfEmployees': '25',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '123 Roofing Way',
                'addressLocality': 'Dallas',
                'addressRegion': 'TX',
                'postalCode': '75201',
                'addressCountry': 'US'
              }
            }
          })
        }}
      />

      <PageHeader
        title="About Apex Roofing"
        subtitle="Dedicated to protecting Dallas homes with quality craftsmanship and exceptional service since 2008"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      {/* Company Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
                Building Trust, One Roof at a Time
              </h2>
              <div className="space-y-4 text-[#4A6741]/80">
                <p>
                  Founded in 2008, Apex Roofing has been Dallas's trusted roofing partner for over 15 years. 
                  What started as a small family business has grown into one of the region's most respected 
                  roofing contractors, serving thousands of satisfied customers throughout the Dallas-Fort Worth area.
                </p>
                <p>
                  Our commitment to excellence, attention to detail, and unwavering dedication to customer 
                  satisfaction has earned us a reputation as the go-to roofing experts in Dallas. We understand 
                  that your roof is one of your home's most important investments, and we treat every project 
                  with the care and precision it deserves.
                </p>
                <p>
                  From emergency repairs to complete roof replacements, our experienced team combines traditional 
                  craftsmanship with modern techniques and materials to deliver results that stand the test of time.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white">
                  <Link href="/contact">
                    Get in Touch <Phone className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image/Roof2.avif"
                alt="Apex Roofing team at work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#8A9A5B] text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#E8EDE6]/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl bg-white p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex rounded-full bg-[#E8EDE6] p-3">
                    <stat.icon className="h-6 w-6 text-[#8A9A5B]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2F4F4F]">{stat.value}</div>
                  <div className="mt-1 text-sm text-[#4A6741]/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Our Values
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              What Sets Us Apart
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Our core values guide everything we do, from the initial consultation to project completion.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-[#8A9A5B]/10 p-4 mx-auto">
                    <value.icon className="h-8 w-8 text-[#4A6741]" />
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-[#4A6741]/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Our Team
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Experienced Professionals
            </h2>
            <p className="mx-auto max-w-2xl text-[#E8EDE6]/80">
              Our skilled team of roofing professionals brings decades of combined experience to every project.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Mike Rodriguez',
                role: 'Founder & Lead Contractor',
                experience: '20+ years',
                specialty: 'Residential Roofing'
              },
              {
                name: 'Sarah Johnson',
                role: 'Project Manager',
                experience: '12+ years',
                specialty: 'Customer Relations'
              },
              {
                name: 'David Chen',
                role: 'Senior Roofer',
                experience: '15+ years',
                specialty: 'Commercial Projects'
              }
            ].map((member, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-black/10 border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A9A5B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 h-20 w-20 mx-auto rounded-full bg-[#8A9A5B]/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-[#8A9A5B]" />
                  </div>
                  <CardTitle className="text-[#E8EDE6]">{member.name}</CardTitle>
                  <div className="text-[#8A9A5B]">{member.role}</div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-[#E8EDE6]/80">{member.experience} experience</p>
                  <p className="text-sm text-[#E8EDE6]/60">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Ready to Work with Dallas's Best?
            </h2>
            <p className="mb-12 text-[#4A6741]/80">
              Experience the Apex Roofing difference. Contact us today for your free consultation 
              and see why thousands of Dallas homeowners trust us with their roofing needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#2F4F4F] text-lg text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
