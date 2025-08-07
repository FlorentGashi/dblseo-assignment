'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, Phone, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Drain Cleaning',
    href: '/services/drain-cleaning',
    description: 'Professional drain cleaning and unclogging services',
  },
  {
    title: 'Water Heater Services',
    href: '/services/water-heater',
    description: 'Water heater repair, installation, and maintenance',
  },
  {
    title: 'Leak Detection',
    href: '/services/leak-detection',
    description: 'Advanced leak detection and repair services',
  },
  {
    title: 'Emergency Plumbing',
    href: '/services/emergency-plumbing',
    description: '24/7 emergency plumbing services',
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Wrench className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">ABC Plumber</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link 
                          href={service.href}
                          className={cn(
                            'block space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {service.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button & Emergency Phone */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+15125551234" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Emergency Plumbing: (512) 555-1234</span>
          </a>
          <Button asChild>
            <Link href="/contact">
              Get Free Plumbing Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open mobile navigation menu">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <p className="text-lg font-medium">Services</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link 
                      key={service.title} 
                      href={service.href}
                      className="block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t">
                <a href="tel:+15125551234" className="flex items-center space-x-2 text-red-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">Emergency Plumbing: (512) 555-1234</span>
                </a>
                <Button asChild>
                  <Link 
                    href="/contact"
                    className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Get Free Plumbing Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
