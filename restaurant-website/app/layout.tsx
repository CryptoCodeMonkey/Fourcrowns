import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Four Crowns | Restaurant, Hotel & Community Hub | Winnipeg, Manitoba",
  description:
    "Four Crowns is a family-friendly restaurant, hotel and community space in North Winnipeg, Manitoba. Located on McPhillips Street, we're known for our amazing menu, rockstar service, and community focus. Visit us today!",
  keywords:
    "Four Crowns Winnipeg, Winnipeg restaurant, McPhillips Street restaurant, North Winnipeg dining, Winnipeg hotel, Manitoba dining, family restaurant Winnipeg, community restaurant Winnipeg, best restaurant North End",
  openGraph: {
    title: "Four Crowns | Restaurant, Hotel & Community Hub | Winnipeg, Manitoba",
    description:
      "Four Crowns is a family-friendly restaurant, hotel and community space in North Winnipeg, Manitoba. Located on McPhillips Street, we're known for our amazing menu, rockstar service, and community focus. Visit us today!",
    url: "https://www.fourcrowns.ca",
    siteName: "Four Crowns",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.fourcrowns.ca/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Four Crowns Restaurant in Winnipeg, Manitoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Four Crowns | Restaurant, Hotel & Community Hub | Winnipeg, Manitoba",
    description:
      "Four Crowns is a family-friendly restaurant, hotel and community space in North Winnipeg, Manitoba. Located on McPhillips Street, we're known for our amazing menu, rockstar service, and community focus. Visit us today!",
    images: ["https://www.fourcrowns.ca/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.fourcrowns.ca",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  authors: [{ name: "Four Crowns Restaurant" }],
  category: "Restaurant",
  metadataBase: new URL("https://www.fourcrowns.ca"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'