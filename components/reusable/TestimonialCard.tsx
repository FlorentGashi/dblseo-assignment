import { Star } from 'lucide-react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'

// Platform icons
const PlatformIcons = {
  Google: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Yelp: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF1A1A">
      <path d="M12.271,16.718v1.417q-.011,3.257-.067,3.4a.707.707,0,0,1-.669.574,3.062,3.062,0,0,1-2.016-.82A12.314,12.314,0,0,1,6.988,19.2a1.95,1.95,0,0,1-.388-1.486c.093-.466.515-.7,1.293-.711.426-.006.618-.049,1.172-.256a8.7,8.7,0,0,0,2.2-1.344A.36.36,0,0,1,12.271,16.718Z"/>
    </svg>
  ),
  BBB: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1E3A8A">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  "Angie's List": () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#00A32A">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

interface TestimonialCardProps {
  text: string
  author: string
  rating: number
  location: string
  service?: string
  platform?: string
  profileImage?: string
  date?: string
}

export default function TestimonialCard({ 
  text, 
  author, 
  rating, 
  location, 
  service,
  platform,
  profileImage,
  date 
}: TestimonialCardProps) {
  const PlatformIcon = platform && PlatformIcons[platform as keyof typeof PlatformIcons]

  return (
    <Card className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#8A9A5B] text-[#8A9A5B]" />
            ))}
          </div>
          {platform && PlatformIcon && (
            <div className="flex items-center gap-1 text-xs text-[#4A6741]/70">
              <PlatformIcon />
              <span>{platform}</span>
            </div>
          )}
        </div>
        {service && (
          <div className="text-sm text-[#8A9A5B] font-medium mb-2">{service}</div>
        )}
        {date && (
          <div className="text-xs text-[#4A6741]/60">{date}</div>
        )}
      </CardHeader>
      <CardContent className="relative z-10 flex-1">
        <p className="text-[#4A6741]/90 italic leading-relaxed">"{text}"</p>
      </CardContent>
      <CardFooter className="relative z-10 flex items-center gap-3 text-sm">
        {profileImage && (
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center text-[#8A9A5B] font-semibold text-sm">
              {author.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-[#2F4F4F] truncate">{author}</div>
          <div className="text-[#4A6741]/70 text-xs truncate">{location}</div>
        </div>
      </CardFooter>
    </Card>
  )
}
