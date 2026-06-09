import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Luxelay Detailing | Premium Car Care Services',
  description: 'Experience luxury automotive detailing: ceramic coatings, paint correction, and interior restoration for discerning car owners. Book your appointment today.',
  openGraph: {
    "title": "Luxelay Detailing | Premium Car Care Services",
    "description": "Experience luxury automotive detailing: ceramic coatings, paint correction, and interior restoration for discerning car owners. Book your appointment today.",
    "url": "https://www.luxelaydetailing.com",
    "siteName": "Luxelay Detailing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193581.jpg",
        "alt": "Luxurious black sports car being detailed"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Luxelay Detailing | Premium Car Care Services",
    "description": "Experience luxury automotive detailing: ceramic coatings, paint correction, and interior restoration for discerning car owners. Book your appointment today.",
    "images": [
      "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193581.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
