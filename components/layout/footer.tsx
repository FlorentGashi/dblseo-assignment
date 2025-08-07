import Link from "next/link";
import { Wrench, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">ABC Plumber</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Austin&apos;s most trusted plumbing professionals since 2010. We provide reliable, 
              high-quality plumbing services for residential and commercial properties throughout 
              the Austin metropolitan area.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/abcplumber" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com/abcplumber" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com/abcplumber" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/abcplumber" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                Our Services
              </Link>
              <Link href="/services/drain-cleaning" className="text-gray-300 hover:text-white transition-colors text-sm">
                Drain Cleaning
              </Link>
              <Link href="/services/water-heater" className="text-gray-300 hover:text-white transition-colors text-sm">
                Water Heater Services
              </Link>
              <Link href="/services/leak-detection" className="text-gray-300 hover:text-white transition-colors text-sm">
                Leak Detection
              </Link>
              <Link href="/services/emergency-plumbing" className="text-gray-300 hover:text-white transition-colors text-sm">
                Emergency Plumbing
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>1234 Congress Ave</p>
                  <p>Austin, TX 78701</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+15125551234" className="text-gray-300 hover:text-white transition-colors">
                    (512) 555-1234
                  </a>
                  <p className="text-xs text-red-400">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@abcplumber-austin.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@abcplumber-austin.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Find Us</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13776.631843709153!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sDowntown%20Austin%2C%20Austin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1635959345738!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABC Plumber Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      <div className="container py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} ABC Plumber. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}