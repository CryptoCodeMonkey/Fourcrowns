import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Events | Four Crowns Restaurant",
  description: "Discover upcoming events, live music, and special occasions at Four Crowns Restaurant in Winnipeg.",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Live Music Friday",
      description:
        "Join us for live music featuring local artists every Friday night. Enjoy great food, drinks, and entertainment.",
      date: "Every Friday",
      time: "8:00 PM - 11:00 PM",
      image: "/images/events/live-music.jpg",
    },
    {
      id: 2,
      title: "Community Fundraiser",
      description:
        "Help us support local charities with our monthly fundraiser. 10% of all sales will be donated to this month's featured charity.",
      date: "First Tuesday of every month",
      time: "All day",
      image: "/images/events/fundraiser.jpg",
    },
    {
      id: 3,
      title: "Trivia Night",
      description:
        "Test your knowledge with our weekly trivia night. Form a team and compete for prizes and bragging rights!",
      date: "Every Wednesday",
      time: "7:00 PM - 9:00 PM",
      image: "/images/events/trivia-night.jpg",
    },
    {
      id: 4,
      title: "Wine Tasting",
      description:
        "Sample a selection of fine wines paired with appetizers prepared by our chef. Reservations required.",
      date: "Last Thursday of every month",
      time: "6:30 PM - 8:30 PM",
      image: "/images/events/wine-tasting.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/events/events-hero.jpg"
            alt="Events at Four Crowns"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Events & Happenings</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Join us for special occasions and regular community events
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-gray-600">
                There's always something happening at Four Crowns! Check out our upcoming events and join us for food,
                fun, and community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/reservations">Reserve a Table</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-amber-50 p-6 md:p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4">Private Events</h3>
              <p className="text-gray-700 mb-6">
                Looking to host your own event at Four Crowns? We offer private event spaces for birthdays,
                anniversaries, corporate events, and more. Our team will work with you to create a custom menu and
                experience for your guests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Inquire About Private Events</Link>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for the latest event announcements and updates.
              </p>
              <div className="flex justify-center gap-4">
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
      </main>

      <SiteFooter />
    </div>
  )
}

