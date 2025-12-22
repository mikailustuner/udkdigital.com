import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const themeInitScript = `
(function() {
  try {
    const storageKey = "udk-theme";
    const stored = localStorage.getItem(storageKey);
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : prefersLight ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export const metadata: Metadata = {
  title: {
    default: "UDK Digital | Technology Platform | Excellence in Innovation",
    template: "%s | UDK Digital",
  },
  description:
    "UDK Digital is a leading technology venture platform connecting Fexio Labs, Tiron Games, Aurict, and B2B SaaS companies. Excellence, culture, and future-focused innovation in mobile app development, game development, and enterprise software. Discover the best systems, innovation, and technology excellence.",
  keywords: [
    "UDK",
    "UDK Digital",
    "UDK digital",
    "technology",
    "innovation",
    "excellence",
    "culture",
    "future",
    "best systems",
    "Aurict",
    "Fexio Labs",
    "Fexio",
    "Tiron",
    "Tiron Games",
    "mobile app development",
    "game development",
    "enterprise software",
    "venture platform",
    "design system",
    "growth platform",
    "product development",
    "engineering",
    "software",
    "quality",
    "perfection",
    "startup",
    "technology company",
    "digital transformation",
    "platform",
    "data analytics",
    "best technology companies",
    "top software companies",
    "leading tech platform",
    "innovation platform",
    "excellence in technology",
    "future of technology",
    "technology excellence",
    "best mobile app developers",
    "top game developers",
    "enterprise software solutions",
    "venture capital platform",
    "technology innovation hub",
    "digital excellence",
    "technology culture",
    "innovative technology platform",
  ],
  metadataBase: new URL("https://udkdigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UDK Digital | Technology Platform | Excellence in Innovation",
    description:
      "Leading technology venture platform connecting Fexio Labs, Tiron Games, Aurict, and B2B SaaS companies. Excellence, culture, and future-focused innovation.",
    url: "https://udkdigital.com",
    siteName: "UDK Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://udkdigital.com/udklogo/black.png",
        width: 1024,
        height: 1024,
        alt: "UDK Digital - Technology Platform Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDK Digital | Technology Platform | Excellence in Innovation",
    description:
      "Leading technology venture platform. Excellence, culture, and future-focused innovation in mobile apps, games, and enterprise software.",
    images: ["https://udkdigital.com/udklogo/black.png"],
    creator: "@udkdigital",
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
  icons: {
    icon: [
      { url: "/udklogo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/udklogo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/udklogo/favicon.ico" },
    ],
    apple: "/udklogo/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/udklogo/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/udklogo/android-chrome-512x512.png" },
      { rel: "mask-icon", url: "/udklogo/favico.svg", color: "#00c6d8" },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#050506" },
  ],
  verification: {
    google: undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://udkdigital.com/#organization",
                  name: "UDK Digital",
                  url: "https://udkdigital.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://udkdigital.com/udklogo/black.png",
                    width: 1024,
                    height: 1024,
                  },
                  description:
                    "UDK Digital is a leading technology venture platform connecting Fexio Labs, Tiron Games, Aurict, and B2B SaaS companies with excellence, culture, and future-focused innovation.",
                  foundingDate: "2020",
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "support@udkdigital.com",
                    contactType: "Customer Service",
                  },
                  sameAs: [],
                  knowsAbout: [
                    "Technology",
                    "Mobile App Development",
                    "Game Development",
                    "Enterprise Software",
                    "Product Design",
                    "Engineering",
                    "Growth Marketing",
                    "Innovation",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://udkdigital.com/#website",
                  url: "https://udkdigital.com",
                  name: "UDK Digital",
                  description:
                    "Technology venture platform connecting mobile apps, games, and enterprise software companies.",
                  publisher: {
                    "@id": "https://udkdigital.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://udkdigital.com/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Service",
                  "@id": "https://udkdigital.com/#service",
                  name: "Technology Platform Services",
                  description:
                    "UDK Digital provides technology platform services including product design, engineering, growth marketing, and operations for mobile apps, games, and enterprise software.",
                  provider: {
                    "@id": "https://udkdigital.com/#organization",
                  },
                  serviceType: "Technology Platform",
                  areaServed: "Worldwide",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "UDK Digital Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Product & Design",
                          description: "Apple-like simplicity, usability first, rapid prototyping and user testing.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Engineering",
                          description: "Cloud-native architecture, secure and scalable APIs, performance-driven frontend.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Growth",
                          description: "Data-driven marketing, revenue optimization, go-global strategies.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Operations",
                          description: "Automation, analytics, internal tools and a shared platform backbone.",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
