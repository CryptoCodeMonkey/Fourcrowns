export default function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Four Crowns Restaurant",
    image: "https://www.fourcrowns.ca/images/four-crowns-logo.png",
    url: "https://www.fourcrowns.ca",
    telephone: "+12045897314",
    priceRange: "$$",
    servesCuisine: ["Canadian", "Bar Food", "Family Restaurant"],
    menu: "https://www.fourcrowns.ca/menu",
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1030 McPhillips Street",
      addressLocality: "Winnipeg",
      addressRegion: "Manitoba",
      postalCode: "R2X 2K9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.9299,
      longitude: -97.1702,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "21:00",
      },
    ],
    hasMap: "https://www.google.com/maps?cid=your-google-business-id", // Replace with actual Google Maps ID
    sameAs: [
      "https://www.facebook.com/fourcrowns",
      "https://www.instagram.com/fourcrownsrestaurant",
      "https://www.yelp.com/biz/four-crowns-winnipeg",
      "https://www.tripadvisor.ca/Restaurant_Review-Four-Crowns-Winnipeg",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "127",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "John Smith",
        },
        datePublished: "2023-08-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody: "Great food and amazing service! The staff really makes you feel like part of the community.",
      },
    ],
    areaServed: ["Winnipeg", "North End", "Garden City", "West Kildonan", "North Winnipeg"],
    department: [
      {
        "@type": "Hotel",
        name: "Four Crowns Hotel",
        description: "Comfortable accommodations in North Winnipeg with easy access to local attractions.",
        url: "https://www.fourcrowns.ca/stay",
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.fourcrowns.ca/reservations",
        inLanguage: "en-CA",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Table reservation",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "amenityFeature",
        value: "Free Parking",
      },
      {
        "@type": "PropertyValue",
        name: "amenityFeature",
        value: "Family-Friendly",
      },
      {
        "@type": "PropertyValue",
        name: "amenityFeature",
        value: "Catering Services",
      },
    ],
  }

  // Local business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Four Crowns",
    image: "https://www.fourcrowns.ca/images/four-crowns-logo.png",
    "@id": "https://www.fourcrowns.ca",
    url: "https://www.fourcrowns.ca",
    telephone: "+12045897314",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1030 McPhillips Street",
      addressLocality: "Winnipeg",
      addressRegion: "Manitoba",
      postalCode: "R2X 2K9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.9299,
      longitude: -97.1702,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Canadian",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: "Winnipeg",
    hasMap: "https://www.google.com/maps?cid=your-google-business-id", // Replace with actual Google Maps ID
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  )
}

