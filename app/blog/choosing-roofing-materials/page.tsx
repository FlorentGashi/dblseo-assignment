import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Choose the Right Roofing Material - Apex Roofing Blog',
  description: 'Learn about different roofing materials, their pros and cons, and how to choose the best option for your home. Expert advice from Dallas\'s trusted roofing professionals.',
  openGraph: {
    title: 'How to Choose the Right Roofing Material - Apex Roofing Blog',
    description: 'Expert guide on choosing the best roofing material for your home.',
    url: 'https://apexroofing.com/blog/choosing-roofing-materials',
    type: 'article',
    publishedTime: '2025-08-23T00:00:00.000Z',
    images: [
      {
        url: '/blog/roofing-materials.jpg',
        width: 1200,
        height: 630,
        alt: 'Different types of roofing materials',
      },
    ],
  },
};

export default function BlogPost() {
  return (
    <article className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4">
            How to Choose the Right Roofing Material
          </h1>
          <div className="flex items-center text-gray-600 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              August 23, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              8 min read
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-12">
          <Image
            src="/blog/roofing-materials.jpg"
            alt="Different types of roofing materials"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose lg:prose-lg">
          <p>
            Choosing the right roofing material is one of the most important decisions
            you'll make for your home. The right choice not only protects your home
            but also adds to its curb appeal and value.
          </p>

          <h2>Common Roofing Materials</h2>
          
          <h3>1. Asphalt Shingles</h3>
          <p>
            The most popular roofing material in America, asphalt shingles offer:
          </p>
          <ul>
            <li>Affordability</li>
            <li>Easy installation</li>
            <li>Wide variety of colors and styles</li>
            <li>15-30 year lifespan</li>
          </ul>

          <h3>2. Metal Roofing</h3>
          <p>
            Growing in popularity, metal roofing provides:
          </p>
          <ul>
            <li>Exceptional durability (50+ years)</li>
            <li>Energy efficiency</li>
            <li>Fire resistance</li>
            <li>Environmental friendliness</li>
          </ul>

          <h3>3. Tile Roofing</h3>
          <p>
            Perfect for specific architectural styles, tile roofs offer:
          </p>
          <ul>
            <li>Distinctive appearance</li>
            <li>Long lifespan (50+ years)</li>
            <li>Low maintenance</li>
            <li>Excellent insulation</li>
          </ul>

          <h2>Factors to Consider</h2>
          <p>
            When choosing your roofing material, consider:
          </p>
          <ul>
            <li>Climate and weather conditions</li>
            <li>Home's architectural style</li>
            <li>Local building codes</li>
            <li>Budget constraints</li>
            <li>Energy efficiency goals</li>
          </ul>

          {/* CTA */}
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">
              Need Help Choosing the Right Material?
            </h3>
            <p className="mb-4">
              Our experts can help you make the best choice for your home.
              Schedule a free consultation today.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Schedule Consultation
              </Button>
            </Link>
          </div>

          {/* Related Services */}
          <h2>Related Services</h2>
          <ul>
            <li>
              <Link href="/services/residential" className="text-blue-600 hover:underline">
                Residential Roofing Services
              </Link>
            </li>
            <li>
              <Link href="/services/repairs" className="text-blue-600 hover:underline">
                Roof Repair Services
              </Link>
            </li>
            <li>
              <Link href="/services/commercial" className="text-blue-600 hover:underline">
                Commercial Roofing Solutions
              </Link>
            </li>
          </ul>

          {/* Author Bio */}
          <div className="border-t mt-8 pt-8">
            <h3 className="text-lg font-bold mb-2">About the Author</h3>
            <p>
              Written by our senior roofing expert with over 15 years of experience
              in residential and commercial roofing projects across Dallas.
            </p>
          </div>
        </div>

        {/* Next Article */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t">
          <Link 
            href="/blog/roof-maintenance-tips"
            className="group flex justify-between items-center"
          >
            <div>
              <span className="text-sm text-gray-500">Next Article</span>
              <h3 className="text-xl font-semibold group-hover:text-blue-600">
                Essential Roof Maintenance Tips for Every Season
              </h3>
            </div>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
