import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <HomeIcon className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <div className="mt-8">
            <p className="text-gray-600">Looking for something specific?</p>
            <div className="mt-4 space-x-4">
              <Link href="/services" className="text-blue-600 hover:underline">
                Our Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/about" className="text-blue-600 hover:underline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
