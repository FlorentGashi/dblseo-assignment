import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'
import BlogClientPage from '@/components/reusable/BlogClientPage'

export const metadata = generateMetadata({
  title: 'Roofing Blog & Expert Tips | Apex Roofing Dallas',
  description: 'Expert roofing tips, maintenance guides, and industry insights from Dallas\'s trusted roofing professionals. Learn about materials, repairs, and more.',
  path: '/blog',
  ogImage: '/og-blog.jpg'
});

export default function BlogPage() {
  return <BlogClientPage />
}
