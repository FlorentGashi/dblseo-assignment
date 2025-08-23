"use client";

import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Home, 
  Building2, 
  Zap, 
  Search
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Residential Roofing",
    href: "/services/residential-roofing",
    description: "Complete roofing solutions for homes and properties",
    Icon: Home,
  },
  {
    title: "Commercial Roofing",
    href: "/services/commercial-roofing",
    description: "Expert roofing for businesses and commercial buildings",
    Icon: Building2,
  },
  {
    title: "Storm Damage Repair",
    href: "/services/storm-damage-repair",
    description: "24/7 emergency repairs for storm-related damage",
    Icon: Zap,
  },
  {
    title: "Roof Inspections",
    href: "/services/roof-inspections",
    description: "Thorough roof assessments and maintenance checks",
    Icon: Search,
  },
];

const scrollingMessages = [
  "Servicing Broward",
  "Miami",
  "Palm Beach",
  "Free Roofing Consultation",
  "Next Virtual Class Aug 30th - Hurricane Preparedness"
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  // Auto scroll through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % scrollingMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top bar with phone number */}
      <div className="bg-[#2F4F4F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8A9A5B]/10" />
        <svg
          className="absolute left-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L300 6L600 2L900 8L1200 4V12H0V0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
        <div className="relative mx-auto max-w-7xl flex justify-between items-center px-4 py-3 text-sm">
          <span className="font-medium text-[#E8EDE6]">
            <span className="opacity-75">24/7 Emergency Service:</span>{" "}
            <a
              href="tel:+12145551234"
              className="font-bold hover:text-[#8A9A5B] transition-colors"
            >
              (214) 555-1234
            </a>
          </span>
          <div className="hidden md:flex items-center space-x-6 text-[#E8EDE6]">
            <a href="#" className="hover:text-[#8A9A5B] transition-colors">
              <Phone size={16} className="inline mr-1" />
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling announcement bar */}
      <div className="bg-[#4A6741] py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <div className="inline-flex items-center space-x-8 text-[#E8EDE6] font-medium px-4">
            {scrollingMessages.map((message, index) => (
              <span key={index} className="inline-block">
                {message} <span className="text-[#8A9A5B] mx-2">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-[#8A9A5B]/20">
        <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
          {/* Logo with background */}
          <Link 
            href="/" 
            className="relative group flex items-center bg-gradient-to-r from-[#2F4F4F] to-[#4A6741] p-4 -ml-4 rounded-r-full transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8A9A5B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-full" />
            <Image
              src="/Apex-Roofing.png"
              alt="Apex Roofing Logo"
              width={160}
              height={60}
              priority
              className="relative z-10 brightness-[1.15]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-full text-[#2F4F4F] hover:bg-[#E8EDE6] transition-all"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="px-4 py-2 rounded-full text-[#2F4F4F] hover:bg-[#E8EDE6] transition-all"
            >
              About
            </Link>

            {/* Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 rounded-full text-[#2F4F4F] hover:bg-[#E8EDE6] transition-all">
                <span>Services</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-lg border-[#8A9A5B]/20 p-3 grid gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="group flex items-start p-2 rounded-lg hover:bg-[#E8EDE6] transition-all"
                    >
                      <span className="mr-3 text-[#4A6741] group-hover:scale-110 transition-transform">
                        <service.Icon className="w-6 h-6" />
                      </span>
                      <div>
                        <div className="font-medium text-[#2F4F4F]">{service.title}</div>
                        <div className="text-sm text-[#4A6741]/70">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/blog"
              className="px-4 py-2 rounded-full text-[#2F4F4F] hover:bg-[#E8EDE6] transition-all"
            >
              Blog
            </Link>
            <Link 
              href="/reviews"
              className="px-4 py-2 rounded-full text-[#2F4F4F] hover:bg-[#E8EDE6] transition-all"
            >
              Reviews
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#2F4F4F] to-[#4A6741] text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-20 p-2 rounded-full hover:bg-[#E8EDE6] transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "fixed inset-0 z-10 bg-white transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="grid gap-4">
            <Link 
              href="/" 
              className="p-4 text-lg font-medium text-[#2F4F4F] hover:bg-[#E8EDE6] rounded-xl transition-all"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="p-4 text-lg font-medium text-[#2F4F4F] hover:bg-[#E8EDE6] rounded-xl transition-all"
            >
              About
            </Link>

            {/* Mobile Services */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="p-4 text-lg font-medium text-left text-[#2F4F4F] hover:bg-[#E8EDE6] rounded-xl transition-all flex justify-between items-center"
            >
              Services 
              <ChevronDown 
                size={20} 
                className={cn(
                  "transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            
            <div 
              className={cn(
                "grid gap-2 transition-all",
                servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center p-4 pl-8 hover:bg-[#E8EDE6] rounded-xl transition-all"
                  >
                    <span className="mr-3 text-[#4A6741]"><service.Icon className="w-5 h-5" /></span>
                    <span className="text-[#2F4F4F]">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/blog" 
              className="p-4 text-lg font-medium text-[#2F4F4F] hover:bg-[#E8EDE6] rounded-xl transition-all"
            >
              Blog
            </Link>
            <Link 
              href="/reviews" 
              className="p-4 text-lg font-medium text-[#2F4F4F] hover:bg-[#E8EDE6] rounded-xl transition-all"
            >
              Reviews
            </Link>

            <Link
              href="/contact"
              className="p-4 text-lg font-medium text-center text-white bg-gradient-to-r from-[#2F4F4F] to-[#4A6741] rounded-xl shadow-md"
            >
              Get Free Estimate
            </Link>

            <a
              href="tel:+12145551234"
              className="p-4 text-lg font-medium text-center text-[#2F4F4F] border-2 border-[#8A9A5B]/20 rounded-xl"
            >
              <Phone className="inline-block mr-2" />
              (214) 555-1234
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
