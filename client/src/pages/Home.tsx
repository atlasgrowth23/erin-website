import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Coastal Geriatric Consulting | Home</title>
        <meta name="description" content="Gulf Coast elder care specialists providing care coordination, dementia support, and resource connection including VA benefits for veterans. Serving families throughout Mississippi's Gulf Coast region." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
