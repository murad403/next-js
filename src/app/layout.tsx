import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


// font optimization-------------------------------------
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  // ১. ট্যাবে যে টাইটেল দেখবে
  title: {
    default: "MyStore",                    // হোম পেজে শুধু "MyStore"
    template: "%s | MyStore"               // বাকি পেজে "প্রোডাক্ট | MyStore"
  },

  // ২. গুগলে যে ডেসক্রিপশন দেখাবে
  description: "বাংলাদেশের সবচেয়ে ভরসাযোগ্য অনলাইন শপ",

  // ৩. ফেভিকন
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ৪. Open Graph (Facebook, WhatsApp, LinkedIn এ শেয়ার করলে)
  openGraph: {
    title: "MyStore – সেরা দামে সেরা প্রোডাক্ট",
    description: "দেশের সেরা প্রোডাক্ট কিনুন সবচেয়ে কম দামে",
    url: "https://mystoredotcom.vercel.app",
    siteName: "MyStore",
    images: ["/og-image.jpg"],    // 1200×630 হলে বেস্ট
    locale: "bn_BD",
    type: "website",
  },

  // ৫. Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "MyStore",
    description: "সেরা দামে কেনাকাটা",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
