import Script from 'next/script'
import Image from 'next/image'
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
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  CheckCircle,
  Shield,
  Award,
  Users
} from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Contact Apex Roofing - Get Your Free Estimate Today | Dallas, TX',
  description: 'Contact Dallas\'s premier roofing experts for your free estimate. 24/7 emergency service available. Licensed, insured, and trusted since 2010.',
  path: '/contact',
  ogImage: '/og-contact.jpg'
});

const contactMethods = [
  {
    icon: Phone,
    title: '24/7 Emergency Line',
    primary: '(214) 555-1234',
    secondary: 'Always Available',
    link: 'tel:+12145551234',
    color: 'text-red-600'
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@apexroofing.com',
    secondary: 'Response within 2 hours',
    link: 'mailto:info@apexroofing.com',
    color: 'text-[#8A9A5B]'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    primary: '1234 Roofing Way',
    secondary: 'Dallas, TX 75201',
    link: 'https://maps.google.com/search/1234+Roofing+Way+Dallas+TX',
    color: 'text-[#2F4F4F]'
  }
]

const serviceOptions = [
  'Roof Repair',
  'Roof Replacement', 
  'Roof Inspection',
  'Storm Damage Repair',
  'Emergency Service',
  'Insurance Claims',
  'Maintenance',
  'Other'
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed contractors with comprehensive insurance coverage'
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Trusted roofing experts serving Dallas since 2010'
  },
  {
    icon: Users,
    title: 'Local Family Owned',
    description: 'Dallas-based company committed to our community'
  }
]

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact Apex Roofing',
            'description': 'Contact Dallas premier roofing company for free estimates and consultations.',
            'url': 'https://dblseo-roofing.vercel.app/contact',
            'mainEntity': {
              '@type': 'RoofingContractor',
              'name': 'Apex Roofing',
              'telephone': '+12145551234',
              'email': 'info@apexroofing.com',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '1234 Roofing Way',
                'addressLocality': 'Dallas',
                'addressRegion': 'TX',
                'postalCode': '75201'
              }
            }
          })
        }}
      />

      <PageHeader
        title="Get Your Free Roofing Estimate"
        subtitle="Contact Dallas's premier roofing experts for professional consultation and detailed estimates"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      {/* Contact Methods */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Get In Touch
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Contact us today for your free estimate. Our roofing experts are standing by to help with all your roofing needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex rounded-full bg-[#8A9A5B]/10 p-4 mx-auto">
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <CardTitle className="text-[#2F4F4F]">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <a 
                    href={method.link}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <p className={`font-semibold ${method.color} text-lg mb-1`}>
                      {method.primary}
                    </p>
                    <p className="text-[#4A6741]/70 text-sm">
                      {method.secondary}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-[#E8EDE6]/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <Card className="border-[#8A9A5B]/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <CardTitle className="text-[#2F4F4F] text-2xl">Request Your Free Estimate</CardTitle>
                  <div className="flex-shrink-0 rounded-full bg-[#8A9A5B]/10 p-3">
                    <MessageSquare className="h-6 w-6 text-[#4A6741]" />
                  </div>
                </div>
                <p className="text-[#4A6741]/80">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service.toLowerCase().replace(' ', '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Street address, city, state, zip"
                      className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2F4F4F] mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Please describe your roofing needs, timeline, and any specific concerns..."
                      className="w-full px-4 py-3 border border-[#8A9A5B]/30 rounded-lg focus:ring-2 focus:ring-[#8A9A5B] focus:border-transparent transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#8A9A5B] hover:bg-[#4A6741] text-white py-3 text-lg font-semibold transition-colors"
                  >
                    Get My Free Estimate
                  </Button>
                  
                  <p className="text-xs text-[#4A6741]/60 text-center">
                    By submitting this form, you agree to receive communications from Apex Roofing. 
                    Your information will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Company Info & Map */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card className="border-[#8A9A5B]/20">
                <CardHeader>
                  <CardTitle className="text-[#2F4F4F] text-xl">Why Choose Apex Roofing?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 rounded-full bg-[#8A9A5B]/10 p-2">
                        <item.icon className="h-5 w-5 text-[#4A6741]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2F4F4F]">{item.title}</h4>
                        <p className="text-sm text-[#4A6741]/80">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-[#8A9A5B]/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#8A9A5B]/10 p-2">
                      <Clock className="h-5 w-5 text-[#4A6741]" />
                    </div>
                    <CardTitle className="text-[#2F4F4F] text-xl">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-[#4A6741]/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Emergency Only</span>
                    </div>
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-700 font-semibold">
                        🚨 24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-[#8A9A5B]/20">
                <CardHeader>
                  <CardTitle className="text-[#2F4F4F] text-xl">Our Service Area</CardTitle>
                  <p className="text-[#4A6741]/80">Proudly serving Dallas and surrounding communities</p>
                </CardHeader>
                <CardContent>
                  <div className="h-64 rounded-lg overflow-hidden bg-[#4A6741]/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.14272917!2d-96.87601293106885!3d32.82024590126534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1692824522305!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Apex Roofing service area in Dallas, TX"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-sm text-[#4A6741]/80">
                    <p>Serving: Dallas, Plano, Richardson, Garland, Irving, and surrounding areas</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-[#2F4F4F] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl">
              Need Emergency Roofing Service?
            </h2>
            <p className="mb-8 text-[#E8EDE6]/80 max-w-2xl mx-auto">
              Don't wait when your roof is compromised. Our emergency response team is available 24/7 
              to protect your home and family.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-red-600 text-lg text-white hover:bg-red-700">
                <a href="tel:+12145551234">
                  Call Emergency Line
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#E8EDE6] text-lg text-[#E8EDE6] hover:bg-[#E8EDE6] hover:text-[#2F4F4F]">
                <a href="mailto:emergency@apexroofing.com">
                  Email Emergency Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
