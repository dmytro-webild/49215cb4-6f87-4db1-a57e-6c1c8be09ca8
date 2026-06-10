"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Car, Facebook, Gauge, Instagram, Paintbrush, Shield, Sparkles, Star, Twitter } from "lucide-react";

export default function LandingPage() {
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
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r6x4nr"
      logoAlt="Luxelay Detailing Logo"
      brandName="Luxelay Detailing"
      button={{
        text: "Schedule Now",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardDashboard
      title="Luxury Detailing for Discerning Car Owners"
      description="Professional handapplied ceramic coatings, paint correction, and interior restoration that preserve your vehicle's pristine condition. Book your transformation today."
      background={{ variant: "plain" }}
      buttons={[
        {
          text: "Schedule Your Detail",          href: "#contact"},
      ]}
      dashboard={{
        title: "Luxelay Detailing Overview",        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EuHt2ZxlmvkmNTdQSd3dWMTSTY/uploaded-1781024400128-d87twxr7.png",        imageAlt: "Luxelay Detailing Dashboard",        logoIcon: Car,
        stats: [
          {
            title: "Jobs Completed",            values: [4500, 5000, 5500],
            description: "Total services rendered"},
          {
            title: "Happy Clients",            values: [950, 1000, 1050],
            description: "Satisfied customers"},
          {
            title: "Avg. Rating",            values: [4.8, 4.9, 5.0],
            valueSuffix: "/5",            valueFormat: { minimumFractionDigits: 1, maximumFractionDigits: 1 },
            description: "Customer feedback"},
        ],
        sidebarItems: [
          { icon: Car, active: true },
          { icon: Gauge },
          { icon: Star },
          { icon: Shield },
        ],
        buttons: [{ text: "View Services", href: "#services" }],
        chartTitle: "Service Trends",        chartData: [{ value: 60 }, { value: 75 }, { value: 90 }, { value: 80 }, { value: 100 }, { value: 120 }],
        listItems: [
          { icon: Car, title: "Ceramic Pro Detail", status: "Upcoming" },
          { icon: Paintbrush, title: "Paint Correction", status: "In Progress" },
          { icon: Shield, title: "Interior Deep Clean", status: "Completed" },
        ],
      }}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Luxelay Detailing"
      description={[
        "At Luxelay Detailing, we are passionate about automotive perfection. We believe every vehicle deserves meticulous care and attention to detail, transforming it beyond its original showroom finish. Our expertise ensures your investment is protected and its aesthetic appeal is maximized.",        "Our team comprises highly skilled professionals who use only the finest products and techniques. From advanced paint correction to durable ceramic coatings and luxurious interior restoration, we deliver unparalleled results that speak for themselves.",        "We cater to discerning car owners who demand the best for their vehicles. With transparent pricing, flexible scheduling, and a commitment to customer satisfaction, Luxelay Detailing is your trusted partner for premium car care."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Ceramic Coatings",          description: "Long-lasting protection for your paintwork, providing incredible gloss, hydrophobicity, and ease of maintenance.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EuHt2ZxlmvkmNTdQSd3dWMTSTY/uploaded-1781025421248-x7yupibh.jpg",          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/car-detailing/water-beading-ceramic-coating.jpg",          buttonText: "Learn More",          buttonHref: "#pricing"},
        {
          title: "Paint Correction",          description: "Restore your vehicle's paint to its pristine condition by eliminating swirls, scratches, and oxidation, revealing a mirror-like finish.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EuHt2ZxlmvkmNTdQSd3dWMTSTY/uploaded-1781025421248-kaafmzan.jpg",          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/car-detailing/swirl-removal-before-after.jpg",          buttonText: "Discover Paint Perfection",          buttonHref: "#pricing"},
        {
          title: "Interior Restoration",          description: "Deep cleaning and conditioning of all interior surfaces, including leather, carpets, and trim, for a fresh, luxurious cabin.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EuHt2ZxlmvkmNTdQSd3dWMTSTY/uploaded-1781029374249-dg45uvps.jpg",          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/car-detailing/leather-conditioning.jpg",          buttonText: "Explore Interior Services",          buttonHref: "#pricing"},
      ]}
      title="Our Premium Services"
      description="Experience unparalleled care with our comprehensive detailing packages tailored to your vehicle's needs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic-package",          badge: "Entry",          price: "$299",          subtitle: "Essential care for a brilliant shine.",          buttons: [
            {
              text: "Select Basic",              href: "#contact"},
          ],
          features: [
            "Exterior wash & wax",            "Interior vacuum & wipe down",            "Tire dressing",            "Window cleaning"],
        },
        {
          id: "premium-package",          badge: "Popular",          badgeIcon: Sparkles,
          price: "$599",          subtitle: "Enhanced detailing for lasting beauty.",          buttons: [
            {
              text: "Choose Premium",              href: "#contact"},
          ],
          features: [
            "All Basic features",            "Single-stage paint correction",            "Sealant application (6-month)",            "Deep interior cleaning",            "Leather conditioning"],
        },
        {
          id: "ceramic-package",          badge: "Ultimate",          badgeIcon: Shield,
          price: "$1299",          subtitle: "Unrivaled protection and perfection.",          buttons: [
            {
              text: "Go Ultimate",              href: "#contact"},
          ],
          features: [
            "All Premium features",            "Multi-stage paint correction",            "Ceramic coating (3-year)",            "Engine bay detailing",            "Wheel & caliper coating"],
        },
      ]}
      title="Transparent Pricing & Packages"
      description="Choose from our meticulously crafted detailing packages designed to offer superior value and protection for your vehicle."
    />
  </div>

  <div id="excellence" data-section="excellence">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "years",          value: "10+",          title: "Years of Experience",          description: "A decade perfecting the art of automotive detailing.",          icon: Gauge,
        },
        {
          id: "vehicles",          value: "5000+",          title: "Vehicles Detailed",          description: "Thousands of cars restored to their showroom glory.",          icon: Car,
        },
        {
          id: "satisfaction",          value: "99%",          title: "Client Satisfaction",          description: "Our clients consistently praise our results and service.",          icon: Star,
        },
        {
          id: "coatings",          value: "1000+",          title: "Ceramic Coatings Applied",          description: "Expertly protecting vehicles with advanced ceramic solutions.",          icon: Paintbrush,
        },
      ]}
      title="Years of Dedicated Craftsmanship"
      description="Our commitment to excellence is reflected in every vehicle we touch and every client we serve."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Michael S.",          role: "Luxury Sedan Owner",          testimonial: "Luxelay Detailing transformed my car! The paint correction is flawless, and the ceramic coating provides an incredible shine. Truly a premium service.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/avatars/man-happy-with-car.jpg"},
        {
          id: "2",          name: "Sarah J.",          role: "Executive SUV Owner",          testimonial: "I'm incredibly particular about my vehicle, and Luxelay exceeded all expectations. The interior detailing made it feel brand new. Highly recommend!",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/avatars/professional-woman-car-owner.jpg"},
        {
          id: "3",          name: "David L.",          role: "Sports Car Enthusiast",          testimonial: "The attention to detail is unmatched. My sports car has never looked so good – the paint depth is phenomenal. Worth every penny for this level of care.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/avatars/professional-man-smiling-car.jpg"},
        {
          id: "4",          name: "Emily R.",          role: "Fleet Manager",          testimonial: "We partnered with Luxelay for our dealership's premium vehicles, and their consistent quality and professionalism are outstanding. An invaluable service.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/avatars/businesswoman-in-car-dealership.jpg"},
        {
          id: "5",          name: "Robert B.",          role: "Classic Car Collector",          testimonial: "Trusting my classic car to Luxelay was the best decision. They treated it with such respect and skill. The results are breathtaking.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/stock/avatars/older-man-classic-car.jpg"},
      ]}
      title="What Our Clients Say"
      description="Hear from discerning car owners who trust Luxelay Detailing for their prized possessions."
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Luxury Motors",        "Classic Ride Club",        "Elite Auto Group",        "Performance Garage",        "Signature Rentals",        "Prestige Insurance",        "Exclusive Properties"]}
      title="Trusted by Car Enthusiasts & Dealers"
      description="Our reputation is built on consistent quality and unwavering dedication to automotive perfection. We partner with leading brands and serve discerning clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "What is ceramic coating and how long does it last?",          content: "Ceramic coating is a liquid polymer applied to a vehicle's exterior that chemically bonds with the factory paint, creating a layer of protection. It offers superior gloss, hydrophobic properties, and protection against UV rays, chemicals, and minor scratches. Depending on the product and maintenance, it can last from 2 to 7 years."},
        {
          id: "faq-2",          title: "How often should I have my car detailed?",          content: "The frequency depends on several factors: how often you drive, where you park, and your personal standards. For optimal protection and appearance, we recommend a full detail every 6-12 months. Regular maintenance washes can extend the life of your detail."},
        {
          id: "faq-3",          title: "What's the difference between waxing and ceramic coating?",          content: "Waxing offers temporary protection and gloss, usually lasting a few weeks to months. Ceramic coatings, being a more advanced technology, form a much harder, more durable, and longer-lasting protective layer that can endure for years, offering enhanced chemical and UV resistance."},
        {
          id: "faq-4",          title: "Do you offer mobile detailing services?",          content: "Currently, Luxelay Detailing operates from our dedicated studio to ensure a controlled environment for the highest quality results, especially for services like ceramic coatings and paint correction. This allows us to deliver unparalleled perfection that mobile services often cannot guarantee due to environmental factors."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our services, booking process, and what to expect."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Schedule Your Service"
      title="Book Your Luxury Detailing Appointment"
      description="Use our simple booking process to select your services and preferred time slot. We'll confirm your appointment shortly."
      buttonText="Proceed to Scheduling"
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
          href: "https://www.facebook.com/luxelaydetailing",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "https://www.instagram.com/luxelay_detailing?igsh=NGJkdWw0d2Q4cHAy&utm_source=qr",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "https://twitter.com/luxelaydetailing",          ariaLabel: "Twitter"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
