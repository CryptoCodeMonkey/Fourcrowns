import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Shop | Four Crowns Restaurant",
  description:
    "Shop Four Crowns merchandise, gift cards, and specialty food items. Perfect gifts for food lovers and supporters of our community.",
}

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Four Crowns T-Shirt",
      price: 24.99,
      description: "Soft cotton t-shirt with our logo. Available in multiple sizes and colors.",
      image: "/images/shop/tshirt.jpg",
      category: "apparel",
    },
    {
      id: 2,
      name: "Four Crowns Hoodie",
      price: 49.99,
      description: "Cozy hoodie with embroidered Four Crowns logo. Perfect for those chilly Manitoba evenings.",
      image: "/images/shop/hoodie.jpg",
      category: "apparel",
    },
    {
      id: 3,
      name: "Four Crowns Gift Card",
      price: 50.0,
      description: "Give the gift of great food and community. Available in $25, $50, and $100 denominations.",
      image: "/images/shop/gift-card.jpg",
      category: "gift-cards",
    },
    {
      id: 4,
      name: "Four Crowns Signature Hot Sauce",
      price: 12.99,
      description:
        "Our house-made hot sauce that adds the perfect kick to any dish. Made with locally sourced peppers.",
      image: "/images/shop/hot-sauce.jpg",
      category: "food",
    },
    {
      id: 5,
      name: "Four Crowns Coffee Mug",
      price: 18.99,
      description: "Start your day with our ceramic coffee mug featuring the Four Crowns logo.",
      image: "/images/shop/coffee-mug.jpg",
      category: "merchandise",
    },
    {
      id: 6,
      name: "Four Crowns Cookbook",
      price: 29.99,
      description: "Our chef's collection of favorite recipes from the Four Crowns kitchen. Includes 50+ recipes.",
      image: "/images/shop/cookbook.jpg",
      category: "merchandise",
    },
    {
      id: 7,
      name: "Four Crowns BBQ Sauce",
      price: 10.99,
      description: "Our signature BBQ sauce, perfect for grilling or as a condiment. Sweet with a hint of smoke.",
      image: "/images/shop/bbq-sauce.jpg",
      category: "food",
    },
    {
      id: 8,
      name: "Four Crowns Tote Bag",
      price: 15.99,
      description: "Eco-friendly canvas tote bag with our logo. Great for shopping or carrying your essentials.",
      image: "/images/shop/tote-bag.jpg",
      category: "apparel",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/shop/shop-hero.jpg"
            alt="Four Crowns Shop"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Four Crowns Shop</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">Take a piece of our community home with you</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Products</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse our selection of Four Crowns merchandise, gift cards, and specialty food items. Perfect gifts for
                food lovers and supporters of our community.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="apparel">Apparel</TabsTrigger>
                <TabsTrigger value="merchandise">Merchandise</TabsTrigger>
                <TabsTrigger value="food">Food Items</TabsTrigger>
                <TabsTrigger value="gift-cards">Gift Cards</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>${product.price.toFixed(2)}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Add to Cart</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="apparel">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category === "apparel")
                    .map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>${product.price.toFixed(2)}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="merchandise">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category === "merchandise")
                    .map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>${product.price.toFixed(2)}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="food">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category === "food")
                    .map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>${product.price.toFixed(2)}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="gift-cards">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category === "gift-cards")
                    .map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>Starting at ${product.price.toFixed(2)}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Purchase</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-amber-50 p-6 md:p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
              <p className="text-gray-700 mb-4">
                We ship all products within Canada. Standard shipping takes 3-5 business days. Express shipping (1-2
                business days) is available for an additional fee.
              </p>
              <p className="text-gray-700">
                Local pickup is available at our restaurant location: 1030 McPhillips Street, Winnipeg, Manitoba.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

