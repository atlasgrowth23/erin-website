import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-6">
              About Coastal Geriatric Consulting
            </h2>
            <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
              Founded by Erin E. Sanford, Coastal Geriatric Consulting provides specialized elder care guidance and support for families across the Gulf Coast region. Our approach focuses on understanding each elder's unique needs, history, and preferences.
            </p>
            <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
              With particular expertise in dementia care planning and VA benefits for veterans, we help families navigate the complexities of elder care with confidence. Whether you need home-based care coordination or assistance planning for facility transitions, we provide the knowledge and support you need.
            </p>
            
            <div className="border-l-4 border-primary pl-4 py-2 mb-6">
              <p className="text-accent italic">
                "I'm dedicated to helping Gulf Coast families create personalized care plans that preserve dignity and enhance quality of life for their elderly loved ones." - Erin E. Sanford
              </p>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <i className="fas fa-brain text-primary"></i>
              </div>
              <p className="font-medium text-accent">Specialized dementia care planning</p>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <i className="fas fa-flag-usa text-primary"></i>
              </div>
              <p className="font-medium text-accent">VA benefits assistance for veterans</p>
            </div>
            
            <div className="flex justify-center sm:justify-start mt-4">
              <Link href="/about">
                <Button variant="link" className="text-primary p-0 flex items-center">
                  Read More About Us <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Caregiver and elderly person having a conversation" 
                className="w-full h-auto object-cover"
                width="600"
                height="450"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
