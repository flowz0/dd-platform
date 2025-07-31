import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ductdaddykc.com'),
  title: {
    default: "Kansas City's Trusted Air Duct & Dryer Vent Cleaning Experts | Duct Daddy Duct Cleaning",
    template: "%s | Duct Daddy Duct Cleaning"
  },
  keywords: [
    "Kansas City HVAC cleaning", 
    "Air duct cleaning Kansas City MO",
    "Duct cleaning Kansas City Missouri",
    "Dryer vent cleaning Kansas City",
    "Professional duct cleaning Kansas City",
    "HVAC duct cleaning Kansas City",
    "AC vent cleaning Kansas City",
    "Residential duct cleaning Kansas City",
    "Commercial duct cleaning Kansas City",
  ],
  description: "Looking for trusted air duct cleaning or dryer vent services near you? Duct Daddy proudly serves homeowners and businesses across the KC metro.",
  openGraph: {
    title: "Kansas City's Trusted Air Duct & Dryer Vent Cleaning Experts | Duct Daddy Duct Cleaning",
    description: "Looking for trusted air duct cleaning or dryer vent services near you? Duct Daddy proudly serves homeowners and businesses across the KC metro.",
    url: 'https://www.ductdaddykc.com',
    siteName: "Duct Daddy Duct Cleaning",
    images: [
      {
        url: '/app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: "Duct Daddy Duct Cleaning open graph image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Duct Daddy Duct Cleaning",
    image: "https://www.ductdaddykc.com/assets/duct-daddy-vehicle.png",
    "@id": "https://www.ductdaddykc.com",
    url: "https://www.ductdaddykc.com",
    telephone: "+1-816-708-2608",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1212 NE White Oaks Ln",
      addressLocality: "Oak Grove",
      addressRegion: "MO",
      postalCode: "64075",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.02936754700943,
      longitude: -94.12149446094872,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/ductdaddykc",
      "https://www.tiktok.com/@ductdaddykc",
    ],
    description:
      "Duct Daddy is a family-owned duct cleaning company in Kansas City, Missouri, providing air duct and dryer vent cleaning to improve indoor air quality.",
  };

  return (
    <html lang="en">
      <body
        className={`${arimo.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: "#F2F2F2",
            }
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
