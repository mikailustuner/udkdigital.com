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
  title: "UDK Digital | Venture Platform",
  description:
    "UDK Digital connects Fexio Labs, Tiron Games, B2B SaaS and commerce verticals with a shared design, data and growth platform.",
  metadataBase: new URL("https://udkdigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UDK Digital | Venture Platform",
    description:
      "Fexio Labs, Tiron Games, B2B SaaS and commerce under one integrated platform.",
    url: "https://udkdigital.com",
    siteName: "UDK Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://udkdigital.com/udklogo/black.png",
        width: 1024,
        height: 1024,
        alt: "UDK Digital logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDK Digital | Venture Platform",
    description:
      "Building mobile, gaming and B2B software under one shared backbone.",
    images: ["https://udkdigital.com/udklogo/black.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UDK Digital",
              url: "https://udkdigital.com",
              logo: "https://udkdigital.com/udklogo/black.png",
              sameAs: [],
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
