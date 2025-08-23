import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2F4F4F] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Top Section - Company Info & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* About Column - Made smaller */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E8EDE6]">About Apex Roofing</h3>
            <p className="text-[#E8EDE6]/90 mb-6">
              Trusted roofing experts in Dallas, TX since 2010. Licensed, insured, 
              and committed to your satisfaction.
            </p>
            {/* Social Icons */}
            <div className="flex gap-6">
              <Link 
                href="https://facebook.com/apexroofing" 
                className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Follow Apex Roofing on Facebook</span>
              </Link>
              <Link 
                href="https://twitter.com/apexroofing" 
                className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Follow Apex Roofing on Twitter</span>
              </Link>
              <Link 
                href="https://instagram.com/apexroofing" 
                className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Follow Apex Roofing on Instagram</span>
              </Link>
              <Link 
                href="https://linkedin.com/company/apexroofing" 
                className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">Connect with Apex Roofing on LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E8EDE6]">Business Hours</h3>
            <div className="space-y-3 text-[#E8EDE6]/90">
              <div>
                <div className="font-medium">Mon - Fri</div>
                <div>7:00 AM - 7:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Saturday</div>
                <div>8:00 AM - 5:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Sunday</div>
                <div>Emergency Only</div>
              </div>
              <div className="mt-4 p-3 bg-[#8A9A5B]/20 border border-[#8A9A5B]/30 rounded">
                <div className="text-[#E8EDE6] font-semibold">24/7 Emergency Service</div>
                <div className="text-[#E8EDE6]/80 text-sm">Always here when you need us</div>
              </div>
            </div>
          </div>

          {/* Service Area Map - Made bigger */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E8EDE6]">Service Area</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden bg-[#4A6741]/20 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.14272917!2d-96.87601293106885!3d32.82024590126534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1692824522305!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apex Roofing service area in Dallas, TX"
                aria-label="Google Maps showing Apex Roofing's service area in Dallas, Texas"
              ></iframe>
            </div>
            <div className="space-y-1 text-[#E8EDE6]/90 text-sm">
              <p className="font-medium">Serving Greater Dallas Area</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span>Dallas</span> • <span>Plano</span> • <span>Richardson</span> •
                <span>Garland</span> • <span>Irving</span> • <span>Frisco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8EDE6]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Return to homepage">Home</Link></li>
              <li><Link href="/about" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Learn about our company">About Us</Link></li>
              <li><Link href="/blog" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Read our roofing resources and guides">Blog</Link></li>
              <li><Link href="/reviews" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Read customer reviews">Reviews</Link></li>
              <li><Link href="/contact" className="text-[#8A9A5B] hover:text-[#E8EDE6] transition-colors duration-300 text-sm font-semibold" aria-label="Get your free roofing estimate">Get Free Estimate</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8EDE6]">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/roof-repair" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Professional roof repair services">Roof Repair</Link></li>
              <li><Link href="/services/roof-replacement" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Complete roof replacement">Roof Replacement</Link></li>
              <li><Link href="/services/roof-inspection" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Professional roof inspection">Roof Inspection</Link></li>
              <li><Link href="/services/storm-damage" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="Storm damage repair services">Storm Damage</Link></li>
              <li><Link href="/services" className="text-[#E8EDE6]/90 hover:text-[#8A9A5B] transition-colors duration-300 text-sm" aria-label="View all roofing services">All Services</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8EDE6]">Service Areas</h3>
            <ul className="space-y-2 text-[#E8EDE6]/90 text-sm">
              <li>Dallas</li>
              <li>Plano</li>
              <li>Richardson</li>
              <li>Garland</li>
              <li>Irving</li>
              <li>Frisco</li>
              <li>Allen</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8EDE6]">Contact Info</h3>
            <div className="space-y-3 text-[#E8EDE6]/90 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8A9A5B] mt-0.5 flex-shrink-0" />
                <span>1234 Roofing Way<br />Dallas, TX 75201</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8A9A5B] flex-shrink-0" />
                <a href="tel:214-555-0123" className="hover:text-[#8A9A5B] transition-colors duration-300">
                  (214) 555-0123
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8A9A5B] flex-shrink-0" />
                <a href="mailto:info@apexroofing.com" className="hover:text-[#8A9A5B] transition-colors duration-300 break-all">
                  info@apexroofing.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="border-t border-[#8A9A5B]/20 bg-[#2F4F4F]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#E8EDE6]/70 text-sm">
              © {new Date().getFullYear()} Apex Roofing. All rights reserved. Licensed & Insured in Texas.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-[#E8EDE6]/70 hover:text-[#8A9A5B] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#E8EDE6]/70 hover:text-[#8A9A5B] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-[#E8EDE6]/70 hover:text-[#8A9A5B] transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
