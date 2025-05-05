import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-neutral-lightest">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-accent leading-tight">
              Coastal Geriatric Consulting
            </h2>
            <p className="text-xl font-medium text-primary mb-2">
              Elder Care Support on the Gulf Coast
            </p>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Providing comprehensive guidance and support for Gulf Coast families navigating elder care challenges. We assist with everything from home care coordination to facility transitions, emotional support, and specialized dementia care planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button className="w-full sm:w-auto px-6 py-6 bg-primary text-white hover:bg-primary-dark transition-colors">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full sm:w-auto px-6 py-6 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-colors">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Elderly person enjoying quality time with caregiver" 
              className="w-full h-auto object-cover"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
