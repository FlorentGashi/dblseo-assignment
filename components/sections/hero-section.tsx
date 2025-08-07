import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Shield, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
                Austin&apos;s #1 Rated Plumber
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional <span className="text-blue-600">Plumbing Services</span> in Austin, TX
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From emergency repairs to routine maintenance, ABC Plumber delivers reliable, 
                high-quality plumbing solutions for your home or business. Licensed, insured, 
                and available 24/7.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>4.9/5 Rating (500+ Reviews)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">Get Free Plumbing Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="tel:+15125551234" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call (512) 555-1234</span>
                </a>
              </Button>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="text-red-800 font-semibold">Emergency? Call Now!</span>
              </div>
              <p className="text-red-700 text-sm mt-1">
                Burst pipes, major leaks, or no hot water? We&apos;re available 24/7 for plumbing emergencies.
              </p>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                {/* Placeholder for plumber image - would be replaced with actual image */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <Phone className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Ready to Help!</h3>
                    <p className="text-gray-600">Expert plumbers standing by</p>  
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9/5</span>
              </div>
              <p className="text-xs text-gray-600">500+ Happy Customers</p>
            </div>

            {/* Floating Service Badge */}
            <div className="absolute -top-6 -right-6 bg-green-600 text-white rounded-lg shadow-lg p-4 text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}