import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-dark text-lg">
              We're here to answer your questions and discuss how we can support your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-neutral-light shadow-sm">
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
            
            <div className="flex flex-col justify-between">
              <Card className="bg-white border-neutral-light shadow-sm mb-6">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-accent mb-4">Get in Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-darkest">Phone</p>
                        <p className="text-neutral-dark">{contactInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-darkest">Email</p>
                        <p className="text-neutral-dark">{contactInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-darkest">Hours</p>
                        {contactInfo.hours.map((hour, index) => (
                          <p key={index} className="text-neutral-dark">{hour}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-accent text-white p-8 rounded-lg">
                <h3 className="font-heading font-bold text-xl mb-4">Gulf Coast Elder Care Specialists</h3>
                <p className="mb-4">
                  Serving families across the Gulf Coast region with specialized dementia care guidance and VA benefits assistance for veterans. Contact Erin for a no-obligation consultation about your unique situation.
                </p>
                <div className="flex items-start mb-4">
                  <div className="text-secondary mr-3 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p className="font-medium">Based in Mississippi's Gulf Coast region</p>
                </div>
                <div className="flex items-start">
                  <div className="text-secondary mr-3 mt-1">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <p className="font-medium">Professional, personalized guidance when you need it most</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
