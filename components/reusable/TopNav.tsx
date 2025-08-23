import { Phone, Clock } from 'lucide-react'

export default function TopNav() {
  return (
    <div className="relative">
      {/* Top Moving Text Bar */}
      <div className="bg-white text-gray-700 py-2 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="animate-marquee whitespace-nowrap text-center font-medium text-sm sm:text-base">
            Trusted by 5000+ Dallas Homeowners • Licensed & Insured • Emergency Storm Damage Repair • Free Roof Inspections • 25 Year Warranty • BBB A+ Rating • GAF Master Elite Contractor • 
          </div>
        </div>
        {/* Enhanced fade effect for moving text - stronger gradual fade */}
        <div className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-white via-white via-white via-white/95 via-white/80 via-white/60 via-white/40 via-white/20 to-transparent pointer-events-none z-20"></div>
      </div>

      {/* Main TopNav */}
      <div className="bg-white border-b border-[#4A6741]/20 relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-end h-16 sm:h-20 relative">
            {/* Contact Section */}
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2F4F4F] bg-[#8A9A5B]/20 px-2 sm:px-3 py-1 rounded-full">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#4A6741]" />
                  <span className="hidden sm:inline">24/7 EMERGENCY SERVICE</span>
                  <span className="sm:hidden">24/7 Emergency</span>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 emergency-pulse">
                <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-[#FF4136]" />
                <a 
                  href="tel:800-317-4791" 
                  className="text-lg sm:text-2xl font-bold text-[#FF4136] hover:text-[#E02D22] transition-colors"
                >
                  800-317-4791
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
