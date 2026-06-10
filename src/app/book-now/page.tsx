"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterCard from '@/components/sections/footer/FooterCard';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function BookNowPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/#about" },
              { name: "Services", id: "/#services" },
              { name: "Pricing", id: "/#pricing" },
              { name: "Testimonials", id: "/#testimonials" },
              { name: "FAQ", id: "/#faq" },
              { name: "Book Now", id: "/book-now" }
            ]}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r6x4nr"
            logoAlt="Luxelay Detailing Logo"
            brandName="Luxelay Detailing"
            button={{
              text: "Schedule Now",              href: "/book-now"
            }}
            animateOnLoad={true}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            useInvertedBackground={false}
            background={{
              variant: "radial-gradient"
            }}
            tag="BOOK NOW"
            title="Get Your Detail Scheduled"
            description="For immediate booking, please send us a text or call us directly at (571) 208-8978. For general inquiries, fill out the form below. No forms are saved, ensuring a direct conversation."
            buttonText="Submit General Inquiry"
            inputPlaceholder="Your Name & Email for general inquiries..."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r6x4nr"
            logoAlt="Luxelay Detailing Logo"
            logoText="Luxelay Detailing"
            copyrightText="© 2024 Luxelay Detailing. All rights reserved."
            socialLinks={[
              {
                icon: Facebook,
                href: "https://www.facebook.com/luxelaydetailing",                ariaLabel: "Facebook"
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/luxelay_detailing?igsh=NGJkdWw0d2Q4cHAy&utm_source=qr",                ariaLabel: "Instagram"
              },
              {
                icon: Twitter,
                href: "https://twitter.com/luxelaydetailing",                ariaLabel: "Twitter"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
