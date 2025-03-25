import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import RestaurantSchema from "@/components/restaurant-schema"
import AutoScrollGallery from "@/components/auto-scroll-gallery"

export const metadata = {
  title: "Four Crowns | Restaurant, Hotel & Community Hub | North Winnipeg, Manitoba",
  description:
    "Four Crowns is a family-friendly restaurant, hotel and community space in North Winnipeg. Located on McPhillips Street, we're known for our amazing menu, rockstar service, and community focus.",
  keywords:
    "Four Crowns Winnipeg, North Winnipeg restaurant, McPhillips Street dining, family restaurant Winnipeg, community restaurant Winnipeg, Winnipeg hotel, Manitoba dining",
  alternates: {
    canonical: "https://www.fourcrowns.ca",
  },
  openGraph: {
    title: "Four Crowns | Restaurant, Hotel & Community Hub | North Winnipeg",
    description:
      "Four Crowns is a family-friendly restaurant, hotel and community space in North Winnipeg. Located on McPhillips Street, we're known for our amazing menu, rockstar service, and community focus.",
    url: "https://www.fourcrowns.ca",
  },
}

export default function Home() {
  const galleryImages = [
    {
      src: "/images/gallery/food-1.jpg",
      alt: "Delicious food at Four Crowns Restaurant",
    },
    {
      src: "/images/gallery/restaurant-1.jpg",
      alt: "Four Crowns Restaurant interior",
    },
    {
      src: "/images/menu/burger.jpg",
      alt: "Four Crowns signature burger",
    },
    {
      src: "/images/gallery/food-2.jpg",
      alt: "Chef's special at Four Crowns",
    },
    {
      src: "/images/gallery/restaurant-2.jpg",
      alt: "Dining area at Four Crowns",
    },
    {
      src: "/images/menu/pickerel.jpg",
      alt: "Manitoba Pickerel dish",
    },
    {
      src: "/images/events/live-music.jpg",
      alt: "Live music event at Four Crowns",
    },
    {
      src: "/images/gallery/food-3.jpg",
      alt: "Appetizers at Four Crowns",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* SEO Schema Markup */}
      <RestaurantSchema />

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
                    src="/placeholder.svg?height=64&width=192"
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
              <Link href="/" className="px-3 py-2 font-medium text-amber-900 border-b-2 border-amber-500">
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
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="w-full h-[60vh] relative">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Four Crowns restaurant interior in North Winnipeg with customers enjoying meals"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg bg-white/90 p-8 rounded-lg shadow-lg">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-amber-700">MAKING A DIFFERENCE</span> IN NORTH WINNIPEG
                  </h1>
                  <p className="text-lg md:text-xl font-medium mb-6">WITH EVERY MEAL & DRINK!</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/reservations">Book a Table</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-amber-600 text-amber-700">
                      <Link href="/menu">View Our Menu</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Auto-scrolling Gallery Section */}
        <section className="py-8 bg-amber-100/50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-amber-800 mb-4 text-center">Experience Four Crowns</h2>
            <AutoScrollGallery images={galleryImages} speed={40} />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif italic text-amber-800 mb-6">Community is everything!</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Four Crowns, located 2 minutes North of the McPhillips Street Station Casino in North Winnipeg, is
                  known for its kick-ass menu, rockstar service, great tunes, being a little loud, and really taking
                  care of its community!
                </p>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  We believe that great food brings people together. Our restaurant is more than just a place to
                  eat—it's a hub where community happens, where friendships are formed, and where everyone is welcome.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="font-medium">Open Daily</p>
                      <p className="text-sm text-gray-600">11am - 11pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:2045897314" className="text-sm text-amber-700 hover:underline">
                        204-589-7314
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/community-event.jpg"
                    alt="Four Crowns community event in North Winnipeg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Makes Us Special</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Amazing Food</h3>
                <p className="text-gray-600">
                  Our kick-ass menu features locally-sourced Manitoba ingredients and chef-crafted recipes that will
                  keep you coming back for more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Rockstar Service</h3>
                <p className="text-gray-600">
                  Our friendly Winnipeg staff provides exceptional service that makes every visit memorable and keeps
                  our customers smiling.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  We're proud to support North Winnipeg initiatives and create a space where our community can gather,
                  connect, and thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience Four Crowns?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join us for great food, drinks, and community in North Winnipeg. Make a reservation today or stop by—we'd
              love to have you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-amber-700 hover:bg-gray-100">
                <Link href="/reservations">Make a Reservation</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-amber-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Four Crowns</h3>
              <p className="text-gray-400 mb-4">Restaurant · Hotel · Community</p>
              <p className="text-gray-400 mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                1030 McPhillips Street, Winnipeg, Manitoba, R2X 2K9
              </p>
              <p className="text-gray-400 mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:2045897314" className="hover:text-white">
                  204-589-7314
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-400 hover:text-white">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/catering" className="text-gray-400 hover:text-white">
                    Catering
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-white">
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">More Info</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-white">
                    Join Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-400 hover:text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/stay" className="text-gray-400 hover:text-white">
                    Stay Here
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>11am - 10pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>11am - 11pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>11am - 9pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Four Crowns. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                aria-label="Follow us on Instagram"
                className="text-gray-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Follow us on Facebook"
                className="text-gray-500 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

