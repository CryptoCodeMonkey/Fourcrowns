import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Stay Here | Four Crowns Hotel",
  description:
    "Book your stay at Four Crowns Hotel in Winnipeg. Comfortable rooms, great amenities, and our restaurant just steps away.",
}

export default function StayPage() {
  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      price: 129,
      description: "Comfortable room with one queen bed, perfect for solo travelers or couples.",
      features: [
        "Queen Bed",
        "Free Wi-Fi",
        "Flat-screen TV",
        "Private Bathroom",
        "Air Conditioning",
        "Daily Housekeeping",
      ],
      image: "/images/stay/standard-room.jpg",
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 159,
      description: "Spacious room with one king bed or two queen beds, ideal for couples or small families.",
      features: [
        "King Bed or Two Queen Beds",
        "Free Wi-Fi",
        "Flat-screen TV",
        "Private Bathroom",
        "Air Conditioning",
        "Mini Fridge",
        "Coffee Maker",
        "Daily Housekeeping",
      ],
      image: "/images/stay/deluxe-room.jpg",
    },
    {
      id: 3,
      name: "Suite",
      price: 199,
      description: "Luxurious suite with separate bedroom and living area, perfect for extended stays or families.",
      features: [
        "King Bed",
        "Separate Living Area with Sofa Bed",
        "Free Wi-Fi",
        "Two Flat-screen TVs",
        "Private Bathroom",
        "Air Conditioning",
        "Mini Fridge",
        "Coffee Maker",
        "Microwave",
        "Daily Housekeeping",
      ],
      image: "/images/stay/suite.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/stay/hotel-exterior.jpg"
            alt="Four Crowns Hotel"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Stay With Us</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Comfortable accommodations with our restaurant just steps away
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Accommodations</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Four Crowns offers comfortable and convenient accommodations in Winnipeg. Whether you're visiting for
                business or pleasure, our hotel provides a welcoming atmosphere and all the amenities you need for a
                pleasant stay.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Convenient Location</h3>
                <p className="text-gray-600">
                  Located just 2 minutes from McPhillips Street Station Casino and close to downtown Winnipeg.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">On-Site Restaurant</h3>
                <p className="text-gray-600">
                  Enjoy breakfast, lunch, and dinner at our restaurant without leaving the property.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Free Amenities</h3>
                <p className="text-gray-600">Complimentary Wi-Fi, parking, and continental breakfast for all guests.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Room Types</h3>

            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Rooms</TabsTrigger>
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="deluxe">Deluxe & Suites</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-8">
                  {roomTypes.map((room) => (
                    <Card key={room.id} className="overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-64 md:h-auto">
                          <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                          <CardHeader className="p-0 pb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle>{room.name}</CardTitle>
                                <CardDescription className="text-lg font-medium text-amber-700">
                                  ${room.price} per night
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-0 pb-4">
                            <p className="mb-4">{room.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {room.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-amber-600" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="p-0 pt-4">
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book Now</Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="standard">
                <div className="space-y-8">
                  {roomTypes
                    .filter((room) => room.name === "Standard Room")
                    .map((room) => (
                      <Card key={room.id} className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="relative h-64 md:h-auto">
                            <Image
                              src={room.image || "/placeholder.svg"}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <CardHeader className="p-0 pb-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle>{room.name}</CardTitle>
                                  <CardDescription className="text-lg font-medium text-amber-700">
                                    ${room.price} per night
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-0 pb-4">
                              <p className="mb-4">{room.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {room.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-amber-600" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="p-0 pt-4">
                              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book Now</Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="deluxe">
                <div className="space-y-8">
                  {roomTypes
                    .filter((room) => room.name !== "Standard Room")
                    .map((room) => (
                      <Card key={room.id} className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="relative h-64 md:h-auto">
                            <Image
                              src={room.image || "/placeholder.svg"}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <CardHeader className="p-0 pb-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle>{room.name}</CardTitle>
                                  <CardDescription className="text-lg font-medium text-amber-700">
                                    ${room.price} per night
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-0 pb-4">
                              <p className="mb-4">{room.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {room.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-amber-600" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="p-0 pt-4">
                              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book Now</Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-amber-50 p-6 md:p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4">Hotel Policies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Check-in/Check-out</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Check-in time: 3:00 PM</li>
                    <li>Check-out time: 11:00 AM</li>
                    <li>Early check-in and late check-out available upon request (fees may apply)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Cancellation Policy</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Free cancellation up to 48 hours before check-in</li>
                    <li>Cancellations within 48 hours of check-in are subject to a one-night charge</li>
                    <li>No-shows will be charged for the full reservation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Book Your Stay?</h3>
              <p className="text-gray-600 mb-6">Contact us directly for the best rates and special packages.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Book Online</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-700">
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

