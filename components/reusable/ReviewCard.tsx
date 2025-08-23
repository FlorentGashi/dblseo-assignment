import { Star } from 'lucide-react'
import Image from 'next/image'

interface ReviewCardProps {
  name: string
  location: string
  rating: number
  review: string
  date: string
  platform: 'google' | 'yelp' | 'bbb' | 'angies'
  profileImage?: string
  className?: string
}

const platformConfig = {
  google: {
    name: 'Google',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  yelp: {
    name: 'Yelp',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF1A1A">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM12 18.453c-3.568 0-6.463-2.895-6.463-6.464S8.432 5.525 12 5.525s6.463 2.895 6.463 6.464S15.568 18.453 12 18.453z"/>
      </svg>
    ),
    bgColor: 'bg-red-50',
    textColor: 'text-red-700'
  },
  bbb: {
    name: 'BBB',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1f4e96">
        <rect width="24" height="24" rx="3" fill="#1f4e96"/>
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">BBB</text>
      </svg>
    ),
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800'
  },
  angies: {
    name: "Angie's List",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00a95c">
        <circle cx="12" cy="12" r="12" fill="#00a95c"/>
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AL</text>
      </svg>
    ),
    bgColor: 'bg-green-50',
    textColor: 'text-green-700'
  }
}

export default function ReviewCard({ 
  name, 
  location, 
  rating, 
  review, 
  date, 
  platform,
  profileImage,
  className = ""
}: ReviewCardProps) {
  const config = platformConfig[platform]
  
  // Generate initials from name for fallback
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <div className={`bg-white border border-[#8A9A5B]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Profile Picture */}
          <div className="relative">
            {profileImage ? (
              <Image
                src={profileImage}
                alt={`${name} profile`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#8A9A5B] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{initials}</span>
              </div>
            )}
          </div>
          
          {/* User Info */}
          <div>
            <h4 className="font-semibold text-[#2F4F4F] text-lg">{name}</h4>
            <p className="text-[#4A6741]/70 text-sm">{location}</p>
          </div>
        </div>

        {/* Platform Badge */}
        <div className={`flex items-center gap-2 ${config.bgColor} px-3 py-1 rounded-full`}>
          {config.icon}
          <span className={`text-xs font-medium ${config.textColor}`}>
            {config.name}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="font-semibold text-[#2F4F4F]">{rating}.0</span>
      </div>

      {/* Review Text */}
      <p className="text-[#4A6741]/80 leading-relaxed mb-4 line-clamp-4">
        &quot;{review}&quot;
      </p>

      {/* Date */}
      <p className="text-[#4A6741]/60 text-sm font-medium">
        {date}
      </p>
    </div>
  )
}
