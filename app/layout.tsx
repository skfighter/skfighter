import MatrixRain from "./components/MatrixRain";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://skfighter.com'),
  title: {
    default: "Sushant Kumar | Senior Backend Developer (Node.js/PHP) | Chandigarh",
    template: "%s | Sushant Kumar - Backend Developer"
  },
  description: "Expert Backend Developer with 7+ years experience in Node.js, PHP, Laravel, NestJS & MySQL. Building scalable web applications and APIs. Available for hire in Chandigarh, India.",
  keywords: [
    "backend developer",
    "node.js developer", 
    "php developer",
    "laravel developer",
    "nestjs developer",
    "mysql expert",
    "api development",
    "web application development",
    "chandigarh developer",
    "freelance developer",
    "full stack developer",
    "server side development",
    "database design",
    "microservices",
    "aws developer",
    "docker expert"
  ],
  authors: [{ name: "Sushant Kumar", url: "https://skfighter.com" }],
  creator: "Sushant Kumar",
  publisher: "Sushant Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://skfighter.com',
    title: 'Sushant Kumar | Senior Backend Developer (Node.js/PHP)',
    description: 'Expert Backend Developer with 7+ years experience in Node.js, PHP, Laravel, NestJS & MySQL. Building scalable web applications and APIs.',
    siteName: 'Sushant Kumar - Backend Developer',
    images: [
      {
        url: '/images/sushant-kumar-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Sushant Kumar - Backend Developer Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushant Kumar | Senior Backend Developer',
    description: 'Expert Backend Developer specializing in Node.js, PHP, Laravel & MySQL. 7+ years experience building scalable applications.',
    creator: '@skfighter007',
    images: ['/images/sushant-kumar-profile.jpg'],
  },
  verification: {
    google: 'google128df01bc60f775b',
  },
  alternates: {
    canonical: 'https://skfighter.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDQWKSFF"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <MatrixRain />
        {children}
        <GoogleAnalytics />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
