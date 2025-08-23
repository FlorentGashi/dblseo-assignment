'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Award, ThumbsUp, Quote, TrendingUp } from 'lucide-react'

// Custom platform icons (you can replace these with actual SVG icons later)
const GoogleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const YelpIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF1A1A">
    <path d="M12.271,16.718v1.417q-.011,3.257-.067,3.4a.707.707,0,0,1-.669.574,3.062,3.062,0,0,1-2.016-.82A12.314,12.314,0,0,1,6.988,19.2a1.95,1.95,0,0,1-.388-1.486c.093-.466.515-.7,1.293-.711.426-.006.618-.049,1.172-.256a8.7,8.7,0,0,0,2.2-1.344A.36.36,0,0,1,12.271,16.718Z"/>
  </svg>
)

const BBBIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1E3A8A">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

const AngiesIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00A32A">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const platforms = [
  { 
    name: 'Google Reviews', 
    rating: 4.9, 
    reviews: 287, 
    icon: GoogleIcon,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    recent: '+12 this month'
  },
  { 
    name: 'Yelp', 
    rating: 4.8, 
    reviews: 156, 
    icon: YelpIcon,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    recent: '+8 this month'
  },
  { 
    name: 'BBB', 
    rating: 'A+', 
    reviews: 89, 
    icon: BBBIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    recent: 'Accredited'
  },
  { 
    name: 'Angie\'s List', 
    rating: 4.9, 
    reviews: 134, 
    icon: AngiesIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    recent: '+5 this month'
  }
]

const stats = [
  { label: 'Total Reviews', value: '500+', icon: Quote, trend: '+15%' },
  { label: 'Average Rating', value: '4.9/5', icon: Star, trend: '+0.1' },
  { label: 'Customer Satisfaction', value: '98%', icon: ThumbsUp, trend: '+2%' },
  { label: 'BBB Rating', value: 'A+', icon: Award, trend: 'Maintained' },
]

export default function TrustedPlatformsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Stats Overview */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
              Customer Statistics
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
              Customer Review Average & Rating
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Our commitment to excellence is reflected in consistently high ratings and customer satisfaction scores.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative z-10 pb-3">
                  <div className="mb-3 inline-flex rounded-full bg-[#E8EDE6] p-3 mx-auto">
                    <stat.icon className="h-6 w-6 text-[#8A9A5B]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2F4F4F]">{stat.value}</div>
                  <div className="text-sm text-[#4A6741]/80">{stat.label}</div>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <div className="flex items-center justify-center gap-1 text-xs text-[#8A9A5B]">
                    <TrendingUp className="h-3 w-3" />
                    {stat.trend}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trusted Platforms */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
            Review Platforms
          </span>
          <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
            Trusted Across All Platforms
          </h2>
          <p className="mx-auto max-w-2xl text-[#4A6741]/80 mb-8">
            Our commitment to excellence is reflected in consistent high ratings across all major review platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-[#8A9A5B]/20 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader className="relative z-10">
                <div className={`mb-4 h-12 w-12 mx-auto rounded-lg ${platform.bgColor} flex items-center justify-center`}>
                  <platform.icon />
                </div>
                <CardTitle className="text-[#2F4F4F]">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="mb-2 text-2xl font-bold text-[#8A9A5B]">{platform.rating}</div>
                <p className="text-sm text-[#4A6741]/80 mb-2">{platform.reviews} reviews</p>
                <div className="text-xs text-[#8A9A5B] font-medium bg-[#8A9A5B]/10 px-2 py-1 rounded-full">
                  {platform.recent}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
