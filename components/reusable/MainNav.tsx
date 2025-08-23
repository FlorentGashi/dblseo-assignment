'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
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

export default function MainNav() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <div className="bg-[#2F4F4F] shadow-md relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:block w-full">
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
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
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
                {/* Mobile Header */}
                <div className="bg-[#2F4F4F] p-6 text-white">
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
                    className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium"
                  >
                    🏠 Home
                  </Link>
                  <Link 
                    href="/about"
                    className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium"
                  >
                    ℹ️ About Us
                  </Link>
                  
                  {/* Services Section */}
                  <div className="pt-2">
                    <p className="text-[#2F4F4F] font-bold px-4 py-2 text-sm uppercase tracking-wide">Our Services</p>
                    <div className="space-y-1 ml-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="text-[#4A6741] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/30 transition-all duration-200 rounded-lg px-4 py-2 text-sm flex items-center space-x-2"
                        >
                          <span className="w-2 h-2 bg-[#8A9A5B] rounded-full"></span>
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="/blog"
                    className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium"
                  >
                    📝 Blog & Tips
                  </Link>
                  <Link 
                    href="/reviews"
                    className="text-[#2F4F4F] hover:text-[#8A9A5B] hover:bg-[#E8EDE6]/50 transition-all duration-200 rounded-lg px-4 py-3 font-medium"
                  >
                    ⭐ Customer Reviews
                  </Link>
                  
                  {/* Emergency Contact */}
                  <div className="mt-6 p-4 bg-[#FF4136]/10 border border-[#FF4136]/20 rounded-lg">
                    <p className="text-[#FF4136] font-bold text-sm mb-2">24/7 EMERGENCY SERVICE</p>
                    <a href="tel:800-317-4791" className="text-[#FF4136] font-bold text-lg">
                      📞 800-317-4791
                    </a>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-4">
                    <Button 
                      asChild
                      className="w-full bg-[#8A9A5B] text-white hover:bg-[#4A6741] font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/contact">
                        Get Free Estimate
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Contact Button - Always Visible */}
          <div className="flex-shrink-0">
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="bg-[#8A9A5B] text-white hover:bg-[#4A6741] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
            >
              <Link href="/contact">
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
