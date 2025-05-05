import { Helmet } from "react-helmet";
import ContactSection from "@/components/contact/ContactSection";
import { useEffect } from "react";

export default function Contact() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us | Coastal Geriatric Consulting</title>
        <meta name="description" content="Contact Erin E. Sanford at Coastal Geriatric Consulting to discuss your elder care needs. Specialized dementia care planning, VA benefits assistance for veterans, and personalized care solutions on the Gulf Coast." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary/10 to-neutral-lightest py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-accent mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-dark">
              We're here to answer your questions and discuss how we can support your family's elder care journey.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-accent mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-neutral-lightest p-6 rounded-lg border border-neutral-light">
                <h3 className="font-heading font-bold text-xl text-accent mb-3">
                  What areas do you serve?
                </h3>
                <p className="text-neutral-dark">
                  We currently provide services primarily for in-home care situations, with plans to expand to facility coordination. Our service area includes the Gulf Coast region and surrounding communities.
                </p>
              </div>
              
              <div className="bg-neutral-lightest p-6 rounded-lg border border-neutral-light">
                <h3 className="font-heading font-bold text-xl text-accent mb-3">
                  How do I know if my family needs your services?
                </h3>
                <p className="text-neutral-dark">
                  If you're feeling overwhelmed with caring for an elderly loved one, uncertain about care options, or need assistance with home modifications or engagement planning, our services may be beneficial. Contact us for a free initial consultation to discuss your specific situation.
                </p>
              </div>
              
              <div className="bg-neutral-lightest p-6 rounded-lg border border-neutral-light">
                <h3 className="font-heading font-bold text-xl text-accent mb-3">
                  Do you provide hands-on care services?
                </h3>
                <p className="text-neutral-dark">
                  We focus on care coordination, family support, and resource connection rather than direct hands-on care. However, we can help you find and coordinate with qualified caregivers and care agencies to meet your loved one's physical care needs.
                </p>
              </div>
              
              <div className="bg-neutral-lightest p-6 rounded-lg border border-neutral-light">
                <h3 className="font-heading font-bold text-xl text-accent mb-3">
                  How do I get started with your services?
                </h3>
                <p className="text-neutral-dark">
                  Simply contact us through our form, by phone, or email to schedule an initial consultation. During this conversation, we'll discuss your situation and how our services might help, and develop a personalized plan to address your family's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
