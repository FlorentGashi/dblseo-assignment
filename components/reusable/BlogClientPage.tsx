'use client'

import { useState } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/reusable/PageHeader'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Calendar, Clock, ArrowRight, Tag, Plus } from 'lucide-react'

const POSTS_PER_PAGE = 6

const featuredPost = {
  title: 'Complete Guide to Choosing the Right Roofing Material',
  description: 'Everything you need to know about different roofing materials, their benefits, costs, and which option is best for your Dallas home.',
  image: '/image/Roof2.avif',
  date: 'August 23, 2025',
  readTime: '12 min read',
  slug: 'choosing-roofing-materials',
  category: 'Comprehensive Guides',
  author: 'Mike Rodriguez'
}

const blogPosts = [
  // Maintenance Category
  {
    title: 'Essential Roof Maintenance Tips for Dallas Homeowners',
    description: 'Learn how to maintain your roof throughout the year to prevent damage and extend its lifespan in the Texas climate.',
    image: '/image/Roof2.avif',
    date: 'August 20, 2025',
    readTime: '8 min read',
    slug: 'roof-maintenance-tips',
    category: 'Maintenance',
    author: 'Sarah Johnson'
  },
  {
    title: 'Seasonal Roof Care: Preparing for Texas Weather',
    description: 'Complete seasonal maintenance checklist to protect your roof from extreme Texas weather conditions.',
    image: '/image/Roof2.avif',
    date: 'August 19, 2025',
    readTime: '6 min read',
    slug: 'seasonal-roof-care',
    category: 'Maintenance',
    author: 'Mike Rodriguez'
  },
  {
    title: 'Gutter Maintenance and Roof Health Connection',
    description: 'Understanding how proper gutter maintenance directly impacts your roof\'s longevity and performance.',
    image: '/image/Roof2.avif',
    date: 'August 17, 2025',
    readTime: '7 min read',
    slug: 'gutter-maintenance-roof-health',
    category: 'Maintenance',
    author: 'David Chen'
  },
  {
    title: 'DIY Roof Inspection Checklist for Homeowners',
    description: 'Safe and effective ways to inspect your roof for potential issues before they become major problems.',
    image: '/image/Roof2.avif',
    date: 'August 16, 2025',
    readTime: '9 min read',
    slug: 'diy-roof-inspection',
    category: 'Maintenance',
    author: 'Sarah Johnson'
  },

  // Tips & Advice Category
  {
    title: '10 Warning Signs You Need a Roof Replacement',
    description: 'Identify the key indicators that it\'s time to replace your roof before major problems and costly damage develop.',
    image: '/image/Roof2.avif',
    date: 'August 18, 2025',
    readTime: '6 min read',
    slug: 'roof-replacement-signs',
    category: 'Tips & Advice',
    author: 'David Chen'
  },
  {
    title: 'How to Choose the Right Roofing Contractor',
    description: 'Essential tips for selecting a reliable, licensed, and experienced roofing contractor for your project.',
    image: '/image/Roof2.avif',
    date: 'August 14, 2025',
    readTime: '8 min read',
    slug: 'choosing-roofing-contractor',
    category: 'Tips & Advice',
    author: 'Mike Rodriguez'
  },
  {
    title: 'Roof Color Selection: Impact on Energy Efficiency',
    description: 'How roof color affects your home\'s energy consumption and cooling costs in the Dallas climate.',
    image: '/image/Roof2.avif',
    date: 'August 13, 2025',
    readTime: '5 min read',
    slug: 'roof-color-energy-efficiency',
    category: 'Tips & Advice',
    author: 'Sarah Johnson'
  },
  {
    title: 'Understanding Roof Ventilation Systems',
    description: 'Why proper attic ventilation is crucial for roof longevity and home energy efficiency.',
    image: '/image/Roof2.avif',
    date: 'August 11, 2025',
    readTime: '7 min read',
    slug: 'roof-ventilation-systems',
    category: 'Tips & Advice',
    author: 'David Chen'
  },

  // Emergency Tips Category
  {
    title: 'Storm Damage: What to Do After Severe Weather',
    description: 'Step-by-step guide on what to do immediately after storm damage and how to work with insurance companies.',
    image: '/image/Roof2.avif',
    date: 'August 15, 2025',
    readTime: '10 min read',
    slug: 'storm-damage-guide',
    category: 'Emergency Tips',
    author: 'Mike Rodriguez'
  },
  {
    title: 'Emergency Roof Leak Repair: Temporary Solutions',
    description: 'Quick temporary fixes to prevent further damage while waiting for professional roof repair services.',
    image: '/image/Roof2.avif',
    date: 'August 9, 2025',
    readTime: '6 min read',
    slug: 'emergency-leak-repair',
    category: 'Emergency Tips',
    author: 'Sarah Johnson'
  },
  {
    title: 'Hail Damage Assessment and Insurance Claims',
    description: 'How to assess hail damage to your roof and navigate the insurance claim process effectively.',
    image: '/image/Roof2.avif',
    date: 'August 7, 2025',
    readTime: '9 min read',
    slug: 'hail-damage-assessment',
    category: 'Emergency Tips',
    author: 'David Chen'
  },
  {
    title: 'Wind Damage Prevention and Emergency Response',
    description: 'Protecting your roof from wind damage and emergency steps to take after severe windstorms.',
    image: '/image/Roof2.avif',
    date: 'August 5, 2025',
    readTime: '8 min read',
    slug: 'wind-damage-prevention',
    category: 'Emergency Tips',
    author: 'Mike Rodriguez'
  },

  // Pricing Guides Category
  {
    title: 'The Cost of Roof Replacement in Dallas: 2025 Guide',
    description: 'Comprehensive breakdown of roof replacement costs, factors that affect pricing, and how to budget for your project.',
    image: '/image/Roof2.avif',
    date: 'August 12, 2025',
    readTime: '9 min read',
    slug: 'roof-replacement-costs',
    category: 'Pricing Guides',
    author: 'Sarah Johnson'
  },
  {
    title: 'Roof Repair Costs: What to Expect in 2025',
    description: 'Detailed pricing information for common roof repairs and factors that influence repair costs.',
    image: '/image/Roof2.avif',
    date: 'August 6, 2025',
    readTime: '7 min read',
    slug: 'roof-repair-costs-2025',
    category: 'Pricing Guides',
    author: 'David Chen'
  },
  {
    title: 'Budgeting for Commercial Roofing Projects',
    description: 'Cost considerations and budgeting strategies for commercial roofing installation and maintenance.',
    image: '/image/Roof2.avif',
    date: 'August 4, 2025',
    readTime: '8 min read',
    slug: 'commercial-roofing-budget',
    category: 'Pricing Guides',
    author: 'Mike Rodriguez'
  },
  {
    title: 'Insurance Coverage for Roof Damage: What\'s Included',
    description: 'Understanding what roof damage is typically covered by homeowners insurance and maximizing claims.',
    image: '/image/Roof2.avif',
    date: 'August 2, 2025',
    readTime: '10 min read',
    slug: 'insurance-coverage-roof-damage',
    category: 'Pricing Guides',
    author: 'Sarah Johnson'
  },

  // Energy Efficiency Category
  {
    title: 'Energy-Efficient Roofing Options for Texas Homes',
    description: 'Discover roofing materials and techniques that can help reduce energy costs in the hot Texas climate.',
    image: '/image/Roof2.avif',
    date: 'August 10, 2025',
    readTime: '7 min read',
    slug: 'energy-efficient-roofing',
    category: 'Energy Efficiency',
    author: 'David Chen'
  },
  {
    title: 'Cool Roofing Technology: Reducing Heat Absorption',
    description: 'How modern cool roofing materials reflect sunlight and reduce cooling costs for Dallas homeowners.',
    image: '/image/Roof2.avif',
    date: 'August 3, 2025',
    readTime: '6 min read',
    slug: 'cool-roofing-technology',
    category: 'Energy Efficiency',
    author: 'Mike Rodriguez'
  },
  {
    title: 'Solar Roofing Integration: Benefits and Considerations',
    description: 'Exploring solar roofing options, installation considerations, and long-term energy savings.',
    image: '/image/Roof2.avif',
    date: 'August 1, 2025',
    readTime: '8 min read',
    slug: 'solar-roofing-integration',
    category: 'Energy Efficiency',
    author: 'Sarah Johnson'
  },
  {
    title: 'Attic Insulation and Roof Performance Optimization',
    description: 'How proper attic insulation works with your roofing system to maximize energy efficiency.',
    image: '/image/Roof2.avif',
    date: 'July 30, 2025',
    readTime: '7 min read',
    slug: 'attic-insulation-roof-performance',
    category: 'Energy Efficiency',
    author: 'David Chen'
  },

  // Legal & Warranties Category
  {
    title: 'Understanding Roofing Warranties: What\'s Covered?',
    description: 'Learn about different types of roofing warranties, what they cover, and how to make warranty claims.',
    image: '/image/Roof2.avif',
    date: 'August 8, 2025',
    readTime: '8 min read',
    slug: 'roofing-warranties-guide',
    category: 'Legal & Warranties',
    author: 'Mike Rodriguez'
  },
  {
    title: 'Roofing Permits and Building Codes in Dallas',
    description: 'Navigate Dallas building codes and permit requirements for roofing projects and renovations.',
    image: '/image/Roof2.avif',
    date: 'July 29, 2025',
    readTime: '6 min read',
    slug: 'dallas-roofing-permits-codes',
    category: 'Legal & Warranties',
    author: 'David Chen'
  },
  {
    title: 'Contractor Licensing and Insurance Requirements',
    description: 'What to verify about your roofing contractor\'s licensing, insurance, and legal compliance.',
    image: '/image/Roof2.avif',
    date: 'July 27, 2025',
    readTime: '7 min read',
    slug: 'contractor-licensing-insurance',
    category: 'Legal & Warranties',
    author: 'Sarah Johnson'
  },
  {
    title: 'Homeowner Rights During Roofing Projects',
    description: 'Understanding your rights as a homeowner during roofing installation and repair projects.',
    image: '/image/Roof2.avif',
    date: 'July 25, 2025',
    readTime: '9 min read',
    slug: 'homeowner-rights-roofing',
    category: 'Legal & Warranties',
    author: 'Mike Rodriguez'
  }
]

const categories = [
  'All Posts',
  'Maintenance', 
  'Tips & Advice',
  'Emergency Tips',
  'Pricing Guides',
  'Energy Efficiency',
  'Legal & Warranties'
]

export default function BlogClientPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE)

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const loadMore = () => {
    setVisiblePosts(prev => prev + POSTS_PER_PAGE)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setVisiblePosts(POSTS_PER_PAGE) // Reset to initial number when changing categories
  }

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'name': 'Apex Roofing Blog',
            'description': 'Expert roofing tips and insights from Dallas professionals',
            'url': 'https://apexroofing.com/blog',
            'publisher': {
              '@type': 'Organization',
              'name': 'Apex Roofing',
              'logo': '/Apex-Roofing.png'
            }
          })
        }}
      />

      <PageHeader
        title="Roofing Blog & Expert Tips"
        subtitle="Professional insights, maintenance guides, and industry knowledge from Dallas's trusted roofing experts"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]}
      />

      {/* Categories */}
      <section className="py-12 bg-[#E8EDE6]/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category
                  ? "bg-[#8A9A5B] hover:bg-[#4A6741] text-white" 
                  : "border-[#8A9A5B] text-[#8A9A5B] hover:bg-[#8A9A5B] hover:text-white"
                }
              >
                <Tag className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
          {selectedCategory !== 'All Posts' && (
            <div className="text-center mt-4">
              <p className="text-[#4A6741]/80">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in &quot;{selectedCategory}&quot;
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All Posts' && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-[#8A9A5B]/20 px-6 py-2 text-[#2F4F4F] text-sm font-medium">
                Featured Article
              </span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="md:flex">
                  <div className="relative h-64 md:h-auto md:w-1/2">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-[#8A9A5B] px-4 py-2 text-sm font-medium text-white">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h2 className="mb-4 text-2xl font-bold text-[#2F4F4F] group-hover:text-[#8A9A5B] transition-colors md:text-3xl">
                        {featuredPost.title}
                      </h2>
                      <p className="mb-6 text-[#4A6741]/80">
                        {featuredPost.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-[#4A6741]/70">
                        <span className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" className="group-hover:bg-[#8A9A5B]/10">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2F4F4F] sm:text-4xl">
              {selectedCategory === 'All Posts' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="mx-auto max-w-2xl text-[#4A6741]/80">
              Stay informed with our latest roofing insights, tips, and industry updates.
            </p>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4A6741]/80 text-lg mb-4">
                No articles found in the &quot;{selectedCategory}&quot; category.
              </p>
              <Button 
                onClick={() => handleCategoryChange('All Posts')}
                className="bg-[#8A9A5B] hover:bg-[#4A6741] text-white"
              >
                View All Posts
              </Button>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayedPosts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`}>
                    <Card className="group h-full overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-56">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block rounded-full bg-[#8A9A5B]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Title overlay on image */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#E8EDE6] transition-colors">
                            {post.title}
                          </h3>
                        </div>
                      </div>
                      
                      <CardContent className="flex-1 p-6">
                        <p className="text-[#4A6741]/80 mb-4 leading-relaxed">{post.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start gap-3 p-6 pt-0">
                        <div className="flex items-center gap-3 text-sm text-[#4A6741]/70 w-full">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F4F4F] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#2F4F4F] hover:bg-[#E8EDE6] hover:text-[#4A6741] h-10 px-4 py-2 group-hover:bg-[#8A9A5B]/10 w-full justify-start"
                        >
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {hasMorePosts && (
                <div className="text-center mt-12">
                  <Button 
                    onClick={loadMore}
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#8A9A5B] text-[#8A9A5B] hover:bg-[#8A9A5B] hover:text-white transition-all duration-300 group"
                  >
                    <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                    Load More Articles
                  </Button>
                  <p className="text-sm text-[#4A6741]/60 mt-3">
                    Showing {displayedPosts.length} of {filteredPosts.length} articles
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#2F4F4F] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-black/20 px-6 py-2 text-[#E8EDE6] text-sm font-medium">
              Stay Updated
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#E8EDE6] sm:text-4xl lg:text-5xl">
              Get Expert Roofing Tips
            </h2>
            <p className="mb-12 text-[#E8EDE6]/80">
              Subscribe to our newsletter for the latest roofing tips, maintenance guides, 
              and special offers delivered directly to your inbox.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button asChild size="lg" className="bg-[#8A9A5B] text-lg text-white hover:bg-[#4A6741]">
                <Link href="/contact">
                  Subscribe to Newsletter
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#E8EDE6] text-lg text-[#E8EDE6] hover:bg-white hover:text-[#2F4F4F]">
                <Link href="/services">
                  Browse Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
