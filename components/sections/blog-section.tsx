import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "5 Signs You Need Professional Drain Cleaning",
    excerpt: "Learn to recognize the warning signs that indicate your drains need professional attention before small issues become major problems.",
    category: "Maintenance Tips",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    href: "/blog/signs-need-drain-cleaning",
    image: "/blog/drain-cleaning.jpg"
  },
  {
    title: "Water Heater Maintenance: What Every Austin Homeowner Should Know",
    excerpt: "Essential maintenance tips to extend your water heater's lifespan and ensure reliable hot water throughout the year.",
    category: "Water Heaters",
    readTime: "7 min read",
    date: "Dec 10, 2024",
    href: "/blog/water-heater-maintenance",
    image: "/blog/water-heater.jpg"
  },
  {
    title: "How to Prevent Frozen Pipes in Austin Winter",
    excerpt: "Even in Austin's mild climate, pipes can freeze during cold snaps. Here's how to protect your plumbing system.",
    category: "Winter Tips",
    readTime: "4 min read",
    date: "Dec 5, 2024",
    href: "/blog/prevent-frozen-pipes",
    image: "/blog/frozen-pipes.jpg"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="space-y-4 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Plumbing Tips & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay informed with expert advice, maintenance tips, and industry insights 
              from Austin&apos;s plumbing professionals.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog" className="flex items-center space-x-2">
              <span>View All Plumbing Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative">
                {/* Placeholder for blog post image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-blue-700 font-medium">Featured Article</p>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-700" asChild>
                    <Link href={post.href} className="flex items-center space-x-2">
                      <span>Read Full Article: {post.title}</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}