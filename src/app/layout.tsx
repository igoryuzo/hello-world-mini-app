import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello World Mini App",
  description: "A simple Hello World Farcaster mini app",
  other: {
    'fc:frame': JSON.stringify({
      version: 'next',
      imageUrl: 'http://localhost:3000/images/image_url.png',
      button: {
        title: '👋 Say Hello',
        action: {
          type: 'launch_frame',
          url: 'http://localhost:3000',
          name: 'Hello World',
          splashImageUrl: 'http://localhost:3000/images/splash_image_url.png',
          splashBackgroundColor: '#855dcd'
        }
      }
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
