import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
