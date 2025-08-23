import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
  features?: string[]
  price?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  features,
  price 
}: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-[#8A9A5B]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-[#2F4F4F]">{title}</CardTitle>
          <div className="inline-flex rounded-lg bg-[#8A9A5B]/10 p-3 text-[#4A6741]">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        {price && (
          <div className="text-2xl font-bold text-[#8A9A5B]">{price}</div>
        )}
      </CardHeader>
      <CardContent className="relative z-10 flex-1">
        <CardDescription className="text-[#4A6741]/80 mb-4">
          {description}
        </CardDescription>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-[#4A6741]/70">
                <ArrowRight className="h-4 w-4 text-[#8A9A5B] mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="relative z-10">
        <Button asChild className="w-full bg-[#8A9A5B] hover:bg-[#4A6741] text-white">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
