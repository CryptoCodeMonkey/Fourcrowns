import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"

export const metadata = {
  title: "Contact Us | Four Crowns Restaurant | Winnipeg, Manitoba",
  description:
    "Get in touch with Four Crowns Restaurant in North Winnipeg. Contact us for reservations, inquiries, or feedback. Located at 1030 McPhillips Street, Winnipeg, MB.",
  keywords:
    "Four Crowns contact, Winnipeg restaurant contact, McPhillips Street restaurant, North Winnipeg restaurant phone, Four Crowns address, Four Crowns location",
  alternates: {
    canonical: "https://www.fourcrowns.ca/contact",
  },
  openGraph: {
    title: "Contact Us | Four Crowns Restaurant | Winnipeg, Manitoba",
    description:
      "Get in touch with Four Crowns Restaurant in North Winnipeg. Located at 1030 McPhillips Street, Winnipeg, MB.",
    url: "https://www.fourcrowns.ca/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Contact Us</h1>
            <p className="text-center text-gray-600 mb-12">We'd love to hear from you</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Reservation Inquiry" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">1030 McPhillips Street</p>
                      <p className="text-gray-600">Winnipeg, Manitoba, R2X 2K9</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Located in North Winnipeg, 2 minutes from McPhillips Station Casino
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:2045897314" className="hover:text-amber-700">
                          204-589-7314
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@fourcrowns.ca" className="hover:text-amber-700">
                          info@fourcrowns.ca
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <div className="text-gray-600">
                        <div className="flex justify-between gap-4">
                          <span>Monday - Thursday:</span>
                          <span>11am - 10pm</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Friday - Saturday:</span>
                          <span>11am - 11pm</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Sunday:</span>
                          <span>11am - 9pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-4">
                    Follow us on social media for updates, events, and special offers.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-3 rounded-full"
                      aria-label="Follow us on Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-3 rounded-full"
                      aria-label="Follow us on Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">Find Us in North Winnipeg</h2>
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/map.jpg"
                    alt="Map showing Four Crowns location at 1030 McPhillips Street, Winnipeg, Manitoba"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Located in North Winnipeg, just 2 minutes from McPhillips Station Casino. Easy access from Garden City,
                West Kildonan, and North End neighborhoods. Free parking available on-site.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

