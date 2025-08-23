'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReviewCard from './ReviewCard'

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Dallas, TX",
    rating: 5,
    review: "Exceptional service from start to finish! The team was professional, on time, and the quality of work exceeded our expectations. Our new roof looks amazing and we haven't had any issues since installation.",
    date: "2 weeks ago",
    platform: "google" as const
  },
  {
    name: "Mike Rodriguez",
    location: "Plano, TX", 
    rating: 5,
    review: "After the storm damaged our roof, Apex Roofing came out the same day for emergency repairs. They worked directly with our insurance and made the whole process seamless. Highly recommend!",
    date: "1 month ago",
    platform: "yelp" as const
  },
  {
    name: "Jennifer Chen",
    location: "Richardson, TX",
    rating: 5,
    review: "Outstanding workmanship and customer service. The crew was respectful of our property and cleaned up thoroughly each day. The project was completed on schedule and within budget.",
    date: "3 weeks ago",
    platform: "google" as const
  },
  {
    name: "David Thompson",
    location: "Garland, TX",
    rating: 5,
    review: "Best roofing company in Dallas! They diagnosed the issue quickly and provided a fair quote. The installation was flawless and the warranty gives us peace of mind. Will definitely use again.",
    date: "2 months ago",
    platform: "bbb" as const
  },
  {
    name: "Lisa Martinez",
    location: "Irving, TX",
    rating: 5,
    review: "Professional, reliable, and honest. They could have charged us much more but instead offered the most cost-effective solution. The roof repair was done perfectly and looks great.",
    date: "1 month ago",
    platform: "angies" as const
  },
  {
    name: "Robert Wilson",
    location: "Dallas, TX",
    rating: 5,
    review: "Apex Roofing saved us thousands! Their expertise in insurance claims was invaluable. The new roof is beautiful and installed with precision. Couldn't be happier with the results.",
    date: "6 weeks ago",
    platform: "google" as const
  }
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Set initial value
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const getVisibleReviews = () => {
    // Mobile: show 1 card, Desktop: show 3 cards
    const numVisible = isMobile ? 1 : 3
    const visibleReviews = []
    for (let i = 0; i < numVisible; i++) {
      const index = (currentIndex + i) % reviews.length
      visibleReviews.push(reviews[index])
    }
    return visibleReviews
  }

  return (
    <section className="py-24 bg-[#E8EDE6]/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
            Customer Reviews
          </span>
          <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-[#4A6741]/80">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our roofing services.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-[#8A9A5B]/30 hover:bg-[#8A9A5B]/10 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 text-[#2F4F4F]" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-[#8A9A5B]/30 hover:bg-[#8A9A5B]/10 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 text-[#2F4F4F]" />
          </Button>

          {/* Review Cards */}
          <div className="overflow-hidden px-8">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              {getVisibleReviews().map((review, index) => (
                <ReviewCard
                  key={`${review.name}-${currentIndex}-${index}`}
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
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#8A9A5B] scale-125'
                    : 'bg-[#8A9A5B]/30 hover:bg-[#8A9A5B]/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-[#4A6741]/60 hover:text-[#4A6741] transition-colors"
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-advance
            </button>
          </div>
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-[#8A9A5B] text-white hover:bg-[#4A6741] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="/reviews">
              View All Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
