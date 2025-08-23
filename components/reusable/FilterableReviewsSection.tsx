'use client'

import { useState } from 'react'
import ReviewCard from '@/components/reusable/ReviewCard'
import { Button } from '@/components/ui/button'
import { Tag, Plus } from 'lucide-react'

const REVIEWS_PER_PAGE = 6

// Enhanced reviews with profile pictures and platform info
const featuredReviews = [
  // Google Reviews
  {
    name: 'Jennifer Martinez',
    location: 'Dallas, TX',
    rating: 5,
    review: 'Apex Roofing exceeded all our expectations! From the initial consultation to the final cleanup, their team was professional, efficient, and meticulous. Our new roof looks amazing and we feel confident it will protect our home for years to come.',
    date: 'August 20, 2025',
    platform: 'google' as const
  },
  {
    name: 'Robert Thompson',
    location: 'Richardson, TX',
    rating: 5,
    review: 'Outstanding service and fair pricing. The crew was punctual, courteous, and kept our property clean throughout the project. Highly recommend for anyone needing roof work in Dallas.',
    date: 'August 18, 2025',
    platform: 'google' as const
  },
  {
    name: 'Maria Garcia',
    location: 'Plano, TX',
    rating: 5,
    review: 'Professional team with excellent communication. They explained every step of the process and delivered exactly what they promised. The quality of workmanship is top-notch.',
    date: 'August 15, 2025',
    platform: 'google' as const
  },
  {
    name: 'Michael Davis',
    location: 'Garland, TX',
    rating: 5,
    review: 'Incredible attention to detail and customer service. They walked us through every aspect of the project and helped us choose the perfect materials for our home.',
    date: 'August 12, 2025',
    platform: 'google' as const
  },

  // Yelp Reviews
  {
    name: 'Lisa Chen',
    location: 'Irving, TX',
    rating: 5,
    review: 'Apex Roofing did an amazing job on our roof replacement. The team was professional, efficient, and cleaned up thoroughly. Great value for the quality of work.',
    date: 'August 10, 2025',
    platform: 'yelp' as const
  },
  {
    name: 'David Rodriguez',
    location: 'Frisco, TX',
    rating: 5,
    review: 'Fast, reliable service with competitive pricing. They responded quickly to our emergency repair needs and got our roof fixed perfectly. Highly recommended!',
    date: 'August 8, 2025',
    platform: 'yelp' as const
  },
  {
    name: 'Amanda Wilson',
    location: 'Carrollton, TX',
    rating: 5,
    review: 'Professional crew that completed the job on time and within budget. The quality of materials and workmanship is excellent. Very satisfied with the results.',
    date: 'August 6, 2025',
    platform: 'yelp' as const
  },
  {
    name: 'James Park',
    location: 'Allen, TX',
    rating: 5,
    review: 'Great experience from start to finish. The team was knowledgeable, honest, and delivered high-quality work. Would definitely use them again.',
    date: 'August 4, 2025',
    platform: 'yelp' as const
  },

  // BBB Reviews
  {
    name: 'Susan Taylor',
    location: 'McKinney, TX',
    rating: 5,
    review: 'Apex Roofing provided exceptional service with clear communication throughout the project. Their attention to detail and quality workmanship exceeded our expectations.',
    date: 'August 2, 2025',
    platform: 'bbb' as const
  },
  {
    name: 'John Anderson',
    location: 'Mesquite, TX',
    rating: 5,
    review: 'Outstanding customer service and quality work. The team was professional, courteous, and completed the project efficiently. Highly recommend this company.',
    date: 'July 30, 2025',
    platform: 'bbb' as const
  },
  {
    name: 'Patricia Lee',
    location: 'Grand Prairie, TX',
    rating: 5,
    review: 'Reliable, honest, and skilled professionals. They provided a fair estimate and delivered exactly what was promised. Very pleased with the entire experience.',
    date: 'July 28, 2025',
    platform: 'bbb' as const
  },
  {
    name: 'Christopher Wong',
    location: 'Lewisville, TX',
    rating: 5,
    review: 'Professional service from consultation to completion. The crew was respectful of our property and cleaned up thoroughly. Excellent quality work.',
    date: 'July 26, 2025',
    platform: 'bbb' as const
  },

  // Angie's List Reviews
  {
    name: 'Rachel Green',
    location: 'Flower Mound, TX',
    rating: 5,
    review: 'Apex Roofing delivered exceptional quality and service. The team was professional, punctual, and completed our roof replacement perfectly. Highly recommended!',
    date: 'July 24, 2025',
    platform: 'angies' as const
  },
  {
    name: 'Kevin Brown',
    location: 'Grapevine, TX',
    rating: 5,
    review: 'Excellent workmanship and customer service. They provided detailed explanations and kept us informed throughout the project. Very satisfied with the results.',
    date: 'July 22, 2025',
    platform: 'angies' as const
  },
  {
    name: 'Michelle White',
    location: 'Coppell, TX',
    rating: 5,
    review: 'Professional, reliable, and fair pricing. The crew was courteous and efficient. Our new roof looks fantastic and we feel confident in the quality.',
    date: 'July 20, 2025',
    platform: 'angies' as const
  },
  {
    name: 'Steven Clark',
    location: 'Addison, TX',
    rating: 5,
    review: 'Outstanding service and attention to detail. The team was knowledgeable and professional throughout the entire process. Would definitely recommend.',
    date: 'July 18, 2025',
    platform: 'angies' as const
  }
]

const platforms = [
  { label: 'All Reviews', value: 'all' },
  { label: 'Google', value: 'google' },
  { label: 'Yelp', value: 'yelp' },
  { label: 'BBB', value: 'bbb' },
  { label: "Angie's List", value: 'angies' }
]

export default function FilterableReviewsSection() {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [visibleReviews, setVisibleReviews] = useState(REVIEWS_PER_PAGE)

  const filteredReviews = selectedPlatform === 'all' 
    ? featuredReviews 
    : featuredReviews.filter(review => review.platform === selectedPlatform)

  const displayedReviews = filteredReviews.slice(0, visibleReviews)
  const hasMoreReviews = visibleReviews < filteredReviews.length

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform)
    setVisibleReviews(REVIEWS_PER_PAGE) // Reset pagination when changing platform
  }

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + REVIEWS_PER_PAGE, filteredReviews.length))
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
            Customer Stories
          </span>
          <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
            Real Reviews from Real Customers
          </h2>
          <p className="mx-auto max-w-2xl text-[#4A6741]/80 mb-8">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with Apex Roofing.
          </p>
          
          {/* Platform Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {platforms.map((platform, index) => (
              <Button
                key={index}
                variant={selectedPlatform === platform.value ? "default" : "outline"}
                onClick={() => handlePlatformChange(platform.value)}
                className={selectedPlatform === platform.value
                  ? "bg-[#8A9A5B] hover:bg-[#4A6741] text-white" 
                  : "border-[#8A9A5B] text-[#8A9A5B] hover:bg-[#8A9A5B] hover:text-white"
                }
              >
                <Tag className="mr-2 h-4 w-4" />
                {platform.label}
              </Button>
            ))}
          </div>
          
          {selectedPlatform !== 'all' && (
            <div className="text-center">
              <p className="text-[#4A6741]/80">
                Showing {displayedReviews.length} of {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''} from {platforms.find(p => p.value === selectedPlatform)?.label}
              </p>
            </div>
          )}
        </div>
        
        {filteredReviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#4A6741]/80 text-lg mb-4">
              No reviews found from {platforms.find(p => p.value === selectedPlatform)?.label}.
            </p>
            <Button 
              onClick={() => handlePlatformChange('all')}
              className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white"
            >
              View All Reviews
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayedReviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  location={review.location}
                  rating={review.rating}
                  review={review.review}
                  date={review.date}
                  platform={review.platform}
                  className="transform transition-all duration-300 hover:scale-105"
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreReviews && (
              <div className="text-center mt-12">
                <Button 
                  onClick={loadMoreReviews}
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#8A9A5B] text-[#8A9A5B] hover:bg-[#8A9A5B] hover:text-white transition-all duration-300 group"
                >
                  <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  Load More Reviews
                </Button>
                <p className="text-sm text-[#4A6741]/60 mt-3">
                  Showing {displayedReviews.length} of {filteredReviews.length} reviews
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
