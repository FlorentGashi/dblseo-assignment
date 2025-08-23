import Script from 'next/script'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'
import PageHeader from '@/components/reusable/PageHeader'
import InteractiveReviewForm from '@/components/reusable/InteractiveReviewForm'
import TrustedPlatformsSection from '@/components/reusable/TrustedPlatformsSection'
import FilterableReviewsSection from '@/components/reusable/FilterableReviewsSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Customer Reviews & Testimonials | Apex Roofing Dallas',
  description: 'Read real customer reviews and testimonials for Apex Roofing. Over 500 five-star reviews from satisfied Dallas homeowners. BBB A+ rated contractor.',
  path: '/reviews',
  ogImage: '/og-reviews.jpg'
});

export default function ReviewsPage() {
  return (
    <>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Apex Roofing',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '123 Roofing Way',
              'addressLocality': 'Dallas',
              'addressRegion': 'TX',
              'postalCode': '75201',
              'addressCountry': 'US'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.9',
              'reviewCount': '500',
              'bestRating': '5',
              'worstRating': '1'
            },
            'review': [
              {
                '@type': 'Review',
                'reviewRating': {
                  '@type': 'Rating',
                  'ratingValue': 5,
                  'bestRating': '5'
                },
                'author': {
                  '@type': 'Person',
                  'name': 'Jennifer Martinez'
                },
                'datePublished': '2025-08-20',
                'reviewBody': 'Apex Roofing exceeded all our expectations! Professional, efficient, and meticulous work.',
                'name': 'Complete Roof Replacement Review'
              },
              {
                '@type': 'Review',
                'reviewRating': {
                  '@type': 'Rating',
                  'ratingValue': 5,
                  'bestRating': '5'
                },
                'author': {
                  '@type': 'Person',
                  'name': 'Robert Thompson'
                },
                'datePublished': '2025-08-18',
                'reviewBody': 'Outstanding emergency service! Quick response and professional repairs.',
                'name': 'Emergency Storm Repair Review'
              },
              {
                '@type': 'Review',
                'reviewRating': {
                  '@type': 'Rating',
                  'ratingValue': 5,
                  'bestRating': '5'
                },
                'author': {
                  '@type': 'Person',
                  'name': 'Lisa Chen'
                },
                'datePublished': '2025-08-15',
                'reviewBody': 'Exceptional quality workmanship and attention to detail.',
                'name': 'Residential Roofing Review'
              }
            ]
          })
        }}
      />

      <PageHeader
        title="Customer Reviews & Testimonials"
        subtitle="See what hundreds of satisfied Dallas homeowners are saying about our professional roofing services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reviews' }
        ]}
      />

      {/* Stats and Trusted Platforms Combined Section */}
      <TrustedPlatformsSection />

      {/* Customer Testimonials */}
      <FilterableReviewsSection />

      {/* Review Form Section */}
      <section className="bg-[#2F4F4F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent opacity-0 animate-shine-once"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
                Share Your Experience
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
                We Value Your Feedback
              </h2>
              <p className="text-[#E8EDE6]/80">
                Help other homeowners by sharing your experience with Apex Roofing. Your review helps us improve and helps others make informed decisions.
              </p>
            </div>
            
            <InteractiveReviewForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
              Join Our Satisfied Customers
            </h2>
            <p className="mb-12 text-[#4A6741]/80">
              Experience the same quality service that has earned us hundreds of five-star reviews. 
              Contact us today for your free consultation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Get Free Estimate
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
