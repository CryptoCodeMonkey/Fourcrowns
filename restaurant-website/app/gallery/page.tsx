import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Photo Gallery | Four Crowns Restaurant",
  description: "Browse photos of our restaurant, food, drinks, and community events at Four Crowns in Winnipeg.",
}

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Photo Gallery</h1>
          <p className="text-center text-gray-600 mb-8">Explore our restaurant, food, and community events</p>

          <Tabs defaultValue="restaurant" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
              <TabsTrigger value="food">Food & Drinks</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="restaurant" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "/images/gallery/restaurant-1.jpg",
                  "/images/gallery/restaurant-2.jpg",
                  "/images/gallery/restaurant-3.jpg",
                  "/images/gallery/restaurant-4.jpg",
                  "/images/gallery/restaurant-5.jpg",
                  "/images/gallery/restaurant-6.jpg",
                  "/images/gallery/restaurant-7.jpg",
                  "/images/gallery/restaurant-8.jpg",
                  "/images/gallery/restaurant-9.jpg",
                ].map((src, i) => (
                  <div key={`restaurant-${i}`} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Four Crowns restaurant interior ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="food" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "/images/gallery/food-1.jpg",
                  "/images/gallery/food-2.jpg",
                  "/images/gallery/food-3.jpg",
                  "/images/gallery/food-4.jpg",
                  "/images/gallery/food-5.jpg",
                  "/images/gallery/food-6.jpg",
                  "/images/gallery/food-7.jpg",
                  "/images/gallery/food-8.jpg",
                  "/images/gallery/food-9.jpg",
                ].map((src, i) => (
                  <div key={`food-${i}`} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Four Crowns food dish ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div key={`event-${i}`} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Event+${i + 1}`}
                      alt={`Event ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div key={`community-${i}`} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Community+${i + 1}`}
                      alt={`Community event ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Follow us on{" "}
              <a href="https://instagram.com" className="text-amber-700 hover:underline">
                Instagram
              </a>{" "}
              and{" "}
              <a href="https://facebook.com" className="text-amber-700 hover:underline">
                Facebook
              </a>{" "}
              for more photos and updates!
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

