import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Catering | Four Crowns Restaurant",
  description:
    "Four Crowns offers catering services for events of all sizes in Winnipeg. From corporate lunches to weddings, we'll make your event special.",
}

export default function CateringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/catering/catering-hero.jpg"
            alt="Four Crowns catering spread"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Catering Services</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Bringing the Four Crowns experience to your special events
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Let Us Cater Your Next Event</h2>
              <p className="text-gray-600">
                Whether you're planning a corporate lunch, family celebration, or wedding reception, Four Crowns
                catering brings our delicious food and exceptional service to your event.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Corporate Events</CardTitle>
                  <CardDescription>Impress your clients and team</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Breakfast meetings</li>
                    <li>Lunch buffets</li>
                    <li>Conference catering</li>
                    <li>Holiday parties</li>
                    <li>Team building events</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Gatherings</CardTitle>
                  <CardDescription>Celebrate life's special moments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Birthday parties</li>
                    <li>Anniversaries</li>
                    <li>Graduation celebrations</li>
                    <li>Family reunions</li>
                    <li>Holiday gatherings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weddings</CardTitle>
                  <CardDescription>Make your big day memorable</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Rehearsal dinners</li>
                    <li>Wedding receptions</li>
                    <li>Bridal showers</li>
                    <li>Post-wedding brunches</li>
                    <li>Custom menu planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 p-6 md:p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4">Our Catering Packages</h3>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                  <div>
                    <h4 className="font-bold">Breakfast Package</h4>
                    <p className="text-gray-600">Continental or hot breakfast options</p>
                  </div>
                  <p className="font-medium">Starting at $15 per person</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                  <div>
                    <h4 className="font-bold">Lunch Package</h4>
                    <p className="text-gray-600">Sandwich platters, salads, and desserts</p>
                  </div>
                  <p className="font-medium">Starting at $20 per person</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                  <div>
                    <h4 className="font-bold">Dinner Package</h4>
                    <p className="text-gray-600">Buffet or plated dinner options</p>
                  </div>
                  <p className="font-medium">Starting at $30 per person</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-bold">Hors d'oeuvres Package</h4>
                    <p className="text-gray-600">Selection of hot and cold appetizers</p>
                  </div>
                  <p className="font-medium">Starting at $25 per person</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Plan Your Event?</h3>
              <p className="text-gray-600 mb-6">
                Contact our catering team to discuss your event needs and create a custom menu that will delight your
                guests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <a href="mailto:catering@fourcrowns.ca">Email Catering Team</a>
                </Button>
                <Button variant="outline" className="border-amber-600 text-amber-700">
                  <a href="tel:2045897314">Call 204-589-7314</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

