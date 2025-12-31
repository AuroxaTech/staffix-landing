import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StaffiX - Workforce Operations Automation",
  description: "Automate attendance, breaks, leave requests, and daily progress updates inside the chat tools your team already uses—no new portals, no workflow change.",
  keywords: "workforce operations automation, attendance tracking automation, Slack attendance bot, Teams attendance tracking, LINE attendance management",
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
      </body>
    </html>
  );
}
