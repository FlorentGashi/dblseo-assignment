import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Clock, Home, Shield, Wrench, FileText, Star, X } from 'lucide-react'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services = [
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description: 'Expert repairs for leaks, storm damage, and wear & tear.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description: 'Complete roof replacement with quality materials and expert installation.',
  },
  {
    title: 'Storm Damage',
    href: '/services/storm-damage',
    description: '24/7 emergency storm damage repair and insurance claim assistance.',
  },
  {
    title: 'Roof Inspection',
    href: '/services/roof-inspection',
    description: 'Professional roof evaluations and detailed condition reports.',
  },
]

interface UnifiedNavProps {
  currentPath?: string
}

export default function UnifiedNav({ currentPath = '/' }: UnifiedNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/'
    }
    return currentPath.startsWith(path)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative sticky top-0 z-50">
      {/* Top Moving Text Bar - Centered at top for all screen sizes */}
      <div className="bg-white text-gray-700 py-2 overflow-hidden relative border-b border-[#4A6741]/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="animate-marquee whitespace-nowrap text-center font-medium text-sm text-gray-700">
            Trusted by 5000+ Dallas Homeowners • Licensed & Insured • Emergency Storm Damage Repair • Free Roof Inspections • 25 Year Warranty • BBB A+ Rating • GAF Master Elite Contractor • 
          </div>
          {/* Fade effects */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
        </div>
      </div>

      {/* Logo and Emergency Contact Bar */}
      <div className="bg-white border-b border-[#4A6741]/20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <Image
                src="/ApexTransparentLogo.png"
                alt="Apex Roofing - Professional Roofing Services"
                width={80}
                height={80}
                className="h-[80px] w-[80px] object-contain"
                priority
              />
            </Link>

            {/* Emergency Contact Section */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2F4F4F] bg-[#8A9A5B]/20 px-2 sm:px-3 py-1 rounded-full">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#4A6741]" />
                  <span className="hidden sm:inline">24/7 EMERGENCY SERVICE</span>
                  <span className="sm:hidden">24/7 Emergency</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1 sm:gap-2">
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

      {/* Main Navigation Bar */}
      <div className="bg-[#2F4F4F] shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-full">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link 
                      href="/" 
                      className={`px-4 py-2 transition-colors relative ${
                        isActive('/') 
                          ? 'text-white' 
                          : 'text-[#E8EDE6] hover:text-white'
                      }`}
                    >
                      Home
                      {isActive('/') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A9A5B]"></div>
                      )}
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      href="/about" 
                      className={`px-4 py-2 transition-colors relative ${
                        isActive('/about') 
                          ? 'text-white' 
                          : 'text-[#E8EDE6] hover:text-white'
                      }`}
                    >
                      About
                      {isActive('/about') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A9A5B]"></div>
                      )}
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={`transition-colors relative ${
                        isActive('/services') 
                          ? 'text-white data-[state=open]:text-white' 
                          : 'text-[#E8EDE6] hover:text-white data-[state=open]:text-white'
                      }`}
                    >
                      Services
                      {isActive('/services') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A9A5B]"></div>
                      )}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#E8EDE6]">
                        {services.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#8A9A5B]/20 hover:text-[#2F4F4F]"
                                href={service.href}
                              >
                                <div className="text-sm font-medium leading-none text-[#2F4F4F]">
                                  {service.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-[#4A6741]">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      href="/blog" 
                      className={`px-4 py-2 transition-colors relative ${
                        isActive('/blog') 
                          ? 'text-white' 
                          : 'text-[#E8EDE6] hover:text-white'
                      }`}
                    >
                      Blog
                      {isActive('/blog') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A9A5B]"></div>
                      )}
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      href="/reviews" 
                      className={`px-4 py-2 transition-colors relative ${
                        isActive('/reviews') 
                          ? 'text-white' 
                          : 'text-[#E8EDE6] hover:text-white'
                      }`}
                    >
                      Reviews
                      {isActive('/reviews') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A9A5B]"></div>
                      )}
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Button 
                asChild
                size="lg"
                className="bg-[#8A9A5B] text-white hover:bg-[#4A6741] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                <Link href="/contact">
                  Get Free Estimate
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-3 text-[#E8EDE6] hover:text-white hover:bg-[#4A6741]/50 rounded-lg transition-all duration-300"
                  >
                    <div className="flex flex-col space-y-1">
                      <div className="w-6 h-0.5 bg-current transform transition-all duration-300"></div>
                      <div className="w-6 h-0.5 bg-current transform transition-all duration-300"></div>
                      <div className="w-6 h-0.5 bg-current transform transition-all duration-300"></div>
                    </div>
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[320px] bg-white border-r-[#4A6741] p-0">
                  {/* Close Button */}
                  <div className="absolute top-4 right-4 z-50">
                    <SheetClose asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 p-0 hover:bg-[#2F4F4F]/10 rounded-full"
                      >
                        <X className="h-6 w-6 text-white" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  
                  {/* Mobile Header */}
                  <div className="bg-[#2F4F4F] p-6 text-white relative">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#8A9A5B] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Apex Roofing</h3>
                        <p className="text-[#E8EDE6]/80 text-sm">Professional Roofing Services</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Links */}
                  <nav className="flex flex-col p-6 space-y-1">
                    <Link 
                      href="/"
                      onClick={handleLinkClick}
                      className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium flex items-center gap-3"
                    >
                      <Home className="w-5 h-5" />
                      Home
                    </Link>
                    <Link 
                      href="/about"
                      onClick={handleLinkClick}
                      className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium flex items-center gap-3"
                    >
                      <Shield className="w-5 h-5" />
                      About Us
                    </Link>
                    
                    {/* Services Section */}
                    <div className="pt-2">
                      <p className="text-[#2F4F4F] font-bold px-4 py-2 text-sm uppercase tracking-wide">Our Services</p>
                      <div className="space-y-1 ml-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={handleLinkClick}
                            className="text-[#4A6741] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/30 transition-all duration-200 rounded-lg px-4 py-2 text-sm flex items-center space-x-3"
                          >
                            <Wrench className="w-4 h-4 text-[#8A9A5B]" />
                            <span>{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href="/blog"
                      onClick={handleLinkClick}
                      className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium flex items-center gap-3"
                    >
                      <FileText className="w-5 h-5" />
                      Blog & Tips
                    </Link>
                    <Link 
                      href="/reviews"
                      onClick={handleLinkClick}
                      className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium flex items-center gap-3"
                    >
                      <Star className="w-5 h-5" />
                      Customer Reviews
                    </Link>
                    
                    {/* Emergency Contact */}
                    <div className="mt-6 p-4 bg-[#FF4136]/10 border border-[#FF4136]/20 rounded-lg">
                      <p className="text-[#FF4136] font-bold text-sm mb-2">24/7 EMERGENCY SERVICE</p>
                      <a href="tel:800-317-4791" className="text-[#FF4136] font-bold text-lg flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        800-317-4791
                      </a>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-4">
                      <Button 
                        asChild
                        className="w-full bg-[#8A9A5B] text-white hover:bg-[#4A6741] font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/contact" onClick={handleLinkClick}>
                          Get Free Estimate
                        </Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>

              {/* Mobile CTA Button */}
              <Button 
                asChild
                size="sm"
                className="bg-[#8A9A5B] text-white hover:bg-[#4A6741] transition-all duration-300 font-semibold"
              >
                <Link href="/contact">
                  Get Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
