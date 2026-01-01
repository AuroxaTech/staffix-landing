import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StaffiX - Workforce Operations Automation",
    template: "%s | StaffiX"
  },
  description: "Automate attendance, breaks, leave requests, and daily progress updates inside the tools your team already uses—no new portals, no workflow change. Works with Slack, Microsoft Teams, LINE, and more.",
  keywords: [
    "workforce operations automation",
    "attendance tracking automation",
    "Slack attendance bot",
    "Teams attendance tracking",
    "LINE attendance management",
    "employee time tracking",
    "break tracking software",
    "leave management system",
    "workforce management",
    "HR automation",
    "team productivity",
    "chat-based attendance",
    "remote work tools"
  ],
  authors: [{ name: "StaffiX" }],
  creator: "StaffiX",
  publisher: "StaffiX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://staffix.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "StaffiX",
    title: "StaffiX - Workforce Operations Automation",
    description: "Automate attendance, breaks, leave requests, and daily progress updates inside the tools your team already uses—no new portals, no workflow change.",
    images: [
      {
        url: "/assets/image1.png",
        width: 1200,
        height: 630,
        alt: "StaffiX - Workforce Operations Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StaffiX - Workforce Operations Automation",
    description: "Automate attendance, breaks, leave requests, and daily progress updates inside the tools your team already uses.",
    images: ["/assets/image1.png"],
    creator: "@staffix",
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
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
