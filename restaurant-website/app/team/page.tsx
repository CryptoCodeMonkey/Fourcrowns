import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "Join Our Team | Four Crowns Restaurant",
  description:
    "Explore career opportunities at Four Crowns Restaurant in Winnipeg. Join our team and be part of our community-focused establishment.",
}

export default function TeamPage() {
  const openPositions = [
    {
      id: 1,
      title: "Line Cook",
      type: "Full-time",
      description:
        "We're looking for an experienced line cook to join our kitchen team. Must have at least 2 years of experience in a fast-paced kitchen environment.",
      department: "Kitchen",
    },
    {
      id: 2,
      title: "Server",
      type: "Part-time",
      description:
        "Join our front-of-house team as a server. Previous serving experience preferred but not required. Must be available to work evenings and weekends.",
      department: "Front of House",
    },
    {
      id: 3,
      title: "Bartender",
      type: "Full-time",
      description:
        "Experienced bartender needed for our busy bar. Must have knowledge of classic cocktails and be able to work in a fast-paced environment.",
      department: "Bar",
    },
    {
      id: 4,
      title: "Host/Hostess",
      type: "Part-time",
      description:
        "Greet and seat guests, manage reservations, and ensure a positive first impression for all visitors. Perfect for students!",
      department: "Front of House",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/team/team-hero.jpg"
            alt="Join the Four Crowns team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Join Our Team</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Be part of a community-focused restaurant that values its team members
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At Four Crowns, we believe our team members are the heart of our business. We offer competitive wages,
                flexible scheduling, opportunities for growth, and a positive work environment where everyone is treated
                with respect.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Pay</h3>
                <p className="text-gray-600">
                  We offer competitive wages and benefits to ensure our team members are well compensated for their hard
                  work.
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">
                  We believe in promoting from within and providing opportunities for career advancement and skill
                  development.
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Team Environment</h3>
                <p className="text-gray-600">
                  Join a supportive team that works together, celebrates successes, and creates a positive work
                  environment.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Current Openings</h2>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="all">All Positions</TabsTrigger>
                  <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
                  <TabsTrigger value="foh">Front of House</TabsTrigger>
                  <TabsTrigger value="bar">Bar</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {openPositions.map((position) => (
                    <Card key={position.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{position.title}</CardTitle>
                            <CardDescription>
                              {position.type} | {position.department}
                            </CardDescription>
                          </div>
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Open</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{position.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                          <Link href="#application-form">Apply Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="kitchen" className="space-y-4">
                  {openPositions
                    .filter((p) => p.department === "Kitchen")
                    .map((position) => (
                      <Card key={position.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{position.title}</CardTitle>
                              <CardDescription>
                                {position.type} | {position.department}
                              </CardDescription>
                            </div>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Open</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{position.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                            <Link href="#application-form">Apply Now</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="foh" className="space-y-4">
                  {openPositions
                    .filter((p) => p.department === "Front of House")
                    .map((position) => (
                      <Card key={position.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{position.title}</CardTitle>
                              <CardDescription>
                                {position.type} | {position.department}
                              </CardDescription>
                            </div>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Open</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{position.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                            <Link href="#application-form">Apply Now</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="bar" className="space-y-4">
                  {openPositions
                    .filter((p) => p.department === "Bar")
                    .map((position) => (
                      <Card key={position.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{position.title}</CardTitle>
                              <CardDescription>
                                {position.type} | {position.department}
                              </CardDescription>
                            </div>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Open</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{position.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                            <Link href="#application-form">Apply Now</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </div>

            <div id="application-form" className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Apply Now</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="(204) 555-1234"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="font-medium">
                      Position
                    </label>
                    <select id="position" className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                      <option value="">Select a position</option>
                      {openPositions.map((position) => (
                        <option key={position.id} value={position.title}>
                          {position.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="font-medium">
                    Experience
                  </label>
                  <textarea
                    id="experience"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Tell us about your relevant experience..."
                    required
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="font-medium">
                    Resume (PDF or Word)
                  </label>
                  <input
                    id="resume"
                    type="file"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

