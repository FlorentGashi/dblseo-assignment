import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Phone, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  /* eslint-disable */
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* 404 Graphic */}
          <div className="space-y-4">
            <div className="text-8xl md:text-9xl font-bold text-blue-600 opacity-20">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              It looks like this page got lost in the pipes! The page you're looking for 
              doesn't exist or may have been moved to a new location.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Go Home</h3>
                <p className="text-gray-600 mb-4">
                  Return to our homepage to explore our plumbing services.
                </p>
                <Button asChild>
                <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Services</h3>
                <p className="text-gray-600 mb-4">
                  Browse our comprehensive plumbing services in Austin.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services">
                    <Search className="h-4 w-4 mr-2" />
                    View Services
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Have a plumbing emergency or need immediate assistance?
                </p>
                <Button variant="outline" asChild>
                  <a href="tel:+15125551234">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Notice */}
          <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-red-600" />
                <div className="text-center">
                  <h3 className="font-semibold text-red-800">Plumbing Emergency?</h3>
                  <p className="text-red-700 text-sm">
                    Don't let a 404 error stop you from getting help! Call us immediately for emergencies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Pages */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/services/drain-cleaning">Drain Cleaning</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/services/water-heater">Water Heater Services</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/services/leak-detection">Leak Detection</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/services/emergency-plumbing">Emergency Plumbing</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/about">About Us</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Back Button */}
          <div className="pt-8">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}