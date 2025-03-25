import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-amber-50 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-amber-700" />
              <span>1030 McPhillips Street, Winnipeg, MB</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Phone className="h-4 w-4 text-amber-700" />
              <a href="tel:2045897314" className="hover:underline">
                204-589-7314
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              aria-label="Follow us on Instagram"
              className="text-amber-700 hover:text-amber-900"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Follow us on Facebook"
              className="text-amber-700 hover:text-amber-900"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Logo and CTA Buttons */}
      <header className="bg-white py-4 border-b border-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex flex-col items-center md:items-start">
                <div className="relative h-16 w-48 mb-1">
                  <Image
                    src="/images/four-crowns-logo.png"
                    alt="Four Crowns Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-wider text-gray-600">RESTAURANT · HOTEL · COMMUNITY</p>
                  <p className="text-sm italic text-gray-600">Feeding the Community</p>
                </div>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="default"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 h-auto"
              >
                <Link href="/reservations">RESERVATIONS</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-6 py-2 h-auto"
              >
                <Link href="/menu">MENUS</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-6 py-2 h-auto"
              >
                <Link href="/catering">CATERING</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 md:gap-6 py-3 text-sm">
            <li>
              <Link href="/" className="px-3 py-2 hover:text-amber-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="px-3 py-2 hover:text-amber-700">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/catering" className="px-3 py-2 hover:text-amber-700">
                Catering
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="px-3 py-2 hover:text-amber-700">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link href="/events" className="px-3 py-2 hover:text-amber-700">
                Events
              </Link>
            </li>
            <li>
              <Link href="/team" className="px-3 py-2 hover:text-amber-700">
                Join Our Team
              </Link>
            </li>
            <li>
              <Link href="/shop" className="px-3 py-2 hover:text-amber-700">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/stay" className="px-3 py-2 hover:text-amber-700">
                Stay Here
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-3 py-2 hover:text-amber-700">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="px-3 py-2 hover:text-amber-700">
                Reservations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

