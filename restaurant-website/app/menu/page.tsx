import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"

export const metadata = {
  title: "Menu | Four Crowns Restaurant | Best Food in North Winnipeg",
  description:
    "Explore our delicious menu featuring locally-sourced Manitoba ingredients and chef-crafted recipes at Four Crowns Restaurant in Winnipeg. From burgers to pickerel, we have something for everyone.",
  keywords:
    "Four Crowns menu, Winnipeg restaurant menu, North Winnipeg dining, Manitoba pickerel, best burgers Winnipeg, family restaurant menu, McPhillips Street restaurant",
  alternates: {
    canonical: "https://www.fourcrowns.ca/menu",
  },
  openGraph: {
    title: "Menu | Four Crowns Restaurant | Best Food in North Winnipeg",
    description:
      "Explore our delicious menu featuring locally-sourced Manitoba ingredients and chef-crafted recipes at Four Crowns Restaurant in Winnipeg.",
    url: "https://www.fourcrowns.ca/menu",
  },
}

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Our Menu</h1>
            <p className="text-center text-gray-600 mb-8">Locally-sourced Manitoba ingredients, chef-crafted recipes</p>

            <Tabs defaultValue="mains" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="starters">Starters</TabsTrigger>
                <TabsTrigger value="mains">Mains</TabsTrigger>
                <TabsTrigger value="drinks">Drinks</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
              </TabsList>

              <TabsContent value="starters" className="space-y-8">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Crispy Calamari</h3>
                      <span className="font-medium">$14</span>
                    </div>
                    <p className="text-gray-600">
                      Lightly dusted and fried, served with house-made tzatziki and lemon wedges
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Spinach & Artichoke Dip</h3>
                      <span className="font-medium">$12</span>
                    </div>
                    <p className="text-gray-600">
                      Creamy blend of cheeses, spinach and artichokes, served with tortilla chips
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Chicken Wings</h3>
                      <span className="font-medium">$16</span>
                    </div>
                    <p className="text-gray-600">
                      1lb of wings tossed in your choice of sauce: hot, honey garlic, BBQ, or salt & pepper
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mains" className="space-y-8">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Four Crowns Burger</h3>
                      <span className="font-medium">$18</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <div className="relative h-24 w-full rounded overflow-hidden">
                          <Image
                            src="/images/menu/burger.jpg"
                            alt="Four Crowns Burger - Best burger in North Winnipeg"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 md:w-3/4">
                        House-made 8oz Manitoba beef patty, aged cheddar, bacon, lettuce, tomato, onion, and special
                        sauce on a brioche bun. Served with fries or salad.
                      </p>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Manitoba Pickerel</h3>
                      <span className="font-medium">$24</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <div className="relative h-24 w-full rounded overflow-hidden">
                          <Image
                            src="/images/menu/pickerel.jpg"
                            alt="Manitoba Pickerel - Fresh local fish from Manitoba lakes"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 md:w-3/4">
                        Pan-seared local pickerel from Manitoba lakes, lemon butter sauce, seasonal vegetables, and
                        roasted potatoes
                      </p>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Chicken Parmesan</h3>
                      <span className="font-medium">$22</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <div className="relative h-24 w-full rounded overflow-hidden">
                          <Image
                            src="/images/menu/chicken-parm.jpg"
                            alt="Chicken Parmesan at Four Crowns Winnipeg"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 md:w-3/4">
                        Breaded chicken breast, marinara sauce, mozzarella and parmesan cheese, served with spaghetti
                        and garlic bread
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="drinks" className="space-y-8">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Local Craft Beer</h3>
                      <span className="font-medium">$7</span>
                    </div>
                    <p className="text-gray-600">
                      Rotating selection of Manitoba's finest craft beers from local Winnipeg breweries
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Crown Royal Whisky</h3>
                      <span className="font-medium">$9</span>
                    </div>
                    <p className="text-gray-600">
                      Manitoba's famous whisky, served neat, on the rocks, or in a cocktail
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Community Cocktail</h3>
                      <span className="font-medium">$12</span>
                    </div>
                    <p className="text-gray-600">
                      Our signature cocktail with vodka, fresh lime, mint, and a splash of cranberry
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="desserts" className="space-y-8">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Manitoba Berry Crumble</h3>
                      <span className="font-medium">$9</span>
                    </div>
                    <p className="text-gray-600">
                      Seasonal Manitoba berries with a buttery oat topping, served warm with vanilla ice cream
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Chocolate Brownie</h3>
                      <span className="font-medium">$8</span>
                    </div>
                    <p className="text-gray-600">Warm chocolate brownie with caramel sauce and whipped cream</p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">New York Cheesecake</h3>
                      <span className="font-medium">$10</span>
                    </div>
                    <p className="text-gray-600">
                      Classic creamy cheesecake with your choice of berry compote or chocolate sauce
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                We also offer daily specials and seasonal menu items featuring local Manitoba ingredients. Ask your
                server for details.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/reservations">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

