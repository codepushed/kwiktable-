import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Kwiktable - The Online Layer for Restaurants | Bookings, Menus & More",
  description:
    "Kwiktable helps restaurants go digital with online table bookings, dynamic menus, pre-ordering, custom websites, and a powerful dashboard. Join 250+ restaurants already using Kwiktable.",
  keywords: [
    "restaurant booking system",
    "online table reservation",
    "restaurant management software",
    "digital menu",
    "restaurant website builder",
    "table booking",
    "pre-order food",
    "restaurant dashboard",
    "kwiktable",
    "restaurant online presence",
    "cloud kitchen management",
    "restaurant SEO",
    "restaurant marketing",
  ],
  authors: [{ name: "Kwiktable", url: "https://kwiktable.com" }],
  creator: "Kwiktable",
  publisher: "Kwiktable",
  metadataBase: new URL("https://kwiktable.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kwiktable - The Online Layer for Restaurants",
    description:
      "Go digital with online table bookings, dynamic menus, pre-ordering, custom websites, and a powerful dashboard. Join 250+ restaurants already using Kwiktable.",
    url: "https://kwiktable.com",
    siteName: "Kwiktable",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwiktable - The Online Layer for Restaurants",
    description:
      "Go digital with online table bookings, dynamic menus, pre-ordering, custom websites, and a powerful dashboard. Join 250+ restaurants.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kwiktable",
    applicationCategory: "BusinessApplication",
    description:
      "The online layer for restaurants — table bookings, digital menus, pre-ordering, custom websites, and a powerful management dashboard.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "0",
      offerCount: "3",
    },
    operatingSystem: "Web",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
