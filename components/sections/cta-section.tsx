import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container">
        <div className="text-center space-y-8 text-white">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Solve Your Plumbing Problems?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don&apos;t let plumbing issues disrupt your day. Contact ABC Plumber now for fast, 
              reliable service from Austin&apos;s most trusted plumbing professionals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Get Free Plumbing Estimate</span>
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6" asChild>
              <a href="tel:+15125551234" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Austin Plumber (512) 555-1234</span>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us Today</h3>
              <p className="text-blue-100 mb-4">Speak directly with our plumbing experts</p>
              <a href="tel:+15125551234" className="text-white hover:text-blue-200 font-semibold">
                (512) 555-1234
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">Send us your plumbing questions anytime</p>
              <a href="mailto:info@abcplumber-austin.com" className="text-white hover:text-blue-200 font-semibold">
                Email Austin Plumber: info@abcplumber-austin.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Quote</h3>
              <p className="text-blue-100 mb-4">Request a detailed estimate online</p>
              <Link href="/contact" className="text-white hover:text-blue-200 font-semibold">
                Request Free Plumbing Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}