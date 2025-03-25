import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Four Crowns</h3>
            <p className="text-gray-400 mb-4">Restaurant · Hotel · Community</p>
            <p className="text-gray-400 mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              1030 McPhillips Street, Winnipeg, Manitoba, Canada
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
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">More Info</h3>
            <ul className="space-y-2">
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
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-400 hover:text-white">
                  Reservations
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
  )
}

