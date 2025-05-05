import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

export default function About() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us | Coastal Geriatric Consulting</title>
        <meta name="description" content="Meet Erin E. Sanford, owner of Coastal Geriatric Consulting. Providing specialized elder care guidance for Gulf Coast families with expertise in dementia care planning and VA benefits for veterans." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary/10 to-neutral-lightest py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-accent mb-6">
              About Coastal Geriatric Consulting
            </h1>
            <p className="text-lg text-neutral-dark">
              Supporting families with elderly loved ones through expert guidance and compassionate care
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-6">
                Meet Erin E. Sanford
              </h2>
              <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
                Erin is the founder and owner of Coastal Geriatric Consulting, bringing extensive experience in elder care coordination and specialized knowledge in dementia care to families across the Gulf Coast region.
              </p>
              <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
                With a passion for helping families navigate the complex journey of elder care, Erin provides personalized guidance and support that honors each individual's unique history and needs. Her approach combines professional expertise with genuine compassion to make elder care transitions less stressful.
              </p>
              
              <div className="bg-neutral-lightest p-6 rounded-lg border border-neutral-light mb-6">
                <h3 className="font-medium text-accent mb-3">Education & Experience</h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                    <span>Bachelor's in Biology of Nursing from Millsaps College</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                    <span>Bachelor's in Nursing from University of South Alabama</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                    <span>Master's in Gerontology/Aging Services Management from the University of Southern California</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-briefcase text-primary mt-1 mr-3"></i>
                    <span>Extensive experience in both medical and non-medical in-home care settings</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-briefcase text-primary mt-1 mr-3"></i>
                    <span>Years of experience in assisted living and nursing home environments</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-l-4 border-primary pl-4 py-2 mb-8">
                <p className="text-accent italic text-lg">
                  "My mission is to help families find the right resources and create meaningful care plans that preserve dignity and enhance quality of life for their loved ones."
                </p>
              </div>
            </div>
            
            <Card className="overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional care consultation" 
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <Card className="overflow-hidden shadow-lg md:order-1 order-2">
              <img 
                src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Elderly care consultation" 
                className="w-full h-auto object-cover"
              />
            </Card>
            
            <div className="md:order-2 order-1">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-6">
                Our Mission & Values
              </h2>
              <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
                At Coastal Geriatric Consulting, our mission is to provide families with the guidance, support, and resources they need to navigate the complexities of elder care with confidence and peace of mind.
              </p>
              <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
                We believe in treating every individual with dignity and respect, recognizing that each person's journey is unique. Our approach is built on empathy, expertise, and a deep understanding of the challenges families face when caring for aging loved ones.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-8 text-center">
              Our Core Principles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-neutral-lightest border-neutral-light">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-heart text-2xl text-primary"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-accent">Compassion</h3>
                  <p className="text-neutral-dark">
                    We approach every situation with genuine care and understanding, recognizing the emotional challenges of elder care.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-lightest border-neutral-light">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-shield text-2xl text-secondary"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-accent">Dignity</h3>
                  <p className="text-neutral-dark">
                    We honor the unique life history of each elderly adult and ensure they are treated with respect and dignity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-lightest border-neutral-light">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-hands-helping text-2xl text-primary"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-accent">Personalization</h3>
                  <p className="text-neutral-dark">
                    We tailor our approach to each family's unique situation, recognizing that no two care journeys are alike.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-heading font-bold text-2xl text-accent mb-6">
              Ready to Discuss Your Family's Needs?
            </h2>
            <p className="text-neutral-dark text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn how we can support you and your loved ones through the elder care journey.
            </p>
            <Link href="/contact">
              <Button className="px-6 py-3 bg-primary text-white hover:bg-primary-dark transition-colors">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
