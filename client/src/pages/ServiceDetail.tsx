import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { services } from "@/lib/utils";
import { cn } from "@/lib/utils";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

export default function ServiceDetail() {
  const [_, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading font-bold text-3xl text-accent mb-4">Service Not Found</h1>
        <p className="text-neutral-dark mb-8">The service you are looking for could not be found.</p>
        <Link href="/#services">
          <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
            View All Services
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{service.title} | Coastal Geriatric Consulting</title>
        <meta name="description" content={service.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <section className="bg-gradient-to-br from-primary/10 to-neutral-lightest py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-accent mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-neutral-dark">
              {service.description}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex justify-center sm:justify-start mb-6">
                <div className={cn("p-4 rounded-full w-16 h-16 flex items-center justify-center", service.iconBgColor)}>
                  <i className={`fas fa-${service.icon} text-2xl ${service.iconColor}`}></i>
                </div>
              </div>
              
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-6 text-center sm:text-left">
                How We Can Help
              </h2>
              
              <p className="text-neutral-dark text-lg mb-6 leading-relaxed text-center sm:text-left">
                At Coastal Geriatric Consulting, we understand that navigating the world of elder care can be overwhelming. Our {service.title.toLowerCase()} services are designed to provide you and your loved ones with the support and guidance you need during this journey.
              </p>
              
              <h3 className="font-medium text-accent mb-4 text-center sm:text-left">What We Provide:</h3>
              <ul className="space-y-3 text-neutral-dark mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <i className={`fas fa-check ${service.checkIconColor} mt-1 mr-3`}></i>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {service.id === 1 && (
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-8">
                  <h3 className="font-medium text-accent mb-3 text-center sm:text-left">Facility & Home Care Coordination</h3>
                  <p className="text-neutral-dark mb-4 text-center sm:text-left">
                    Our comprehensive care coordination ensures that your loved one receives the appropriate level of care whether they are living at home or transitioning to a facility. We help with:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Comprehensive needs assessment and care planning</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Screening and selection of qualified in-home caregivers</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Facility research and selection based on your specific needs</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Transition support during moves between home and facilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Regular check-ins and care plan adjustments as needs change</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {service.id === 2 && (
                <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10 mb-8">
                  <h3 className="font-medium text-accent mb-3">Home Safety & Accessibility</h3>
                  <p className="text-neutral-dark mb-4">
                    Our home adaptation services focus on creating safe, accessible environments that promote independence while reducing fall risk and other hazards. We provide:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Comprehensive home safety assessments</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Coordination of grab bar and handrail installations</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Bathroom modification recommendations for safety</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Furniture arrangement for optimal mobility paths</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Connections to trusted equipment vendors and installation professionals</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {service.id === 3 && (
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-8">
                  <h3 className="font-medium text-accent mb-3">Veterans Benefits Support</h3>
                  <p className="text-neutral-dark mb-4">
                    For veterans and their families, we provide specialized assistance navigating the VA benefits system, helping identify and access benefits that can significantly improve care options:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Aid & Attendance benefit application assistance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Connection with local VA resources and services</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Guidance on VA healthcare options and community care</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Coordination with veteran-friendly facilities and care providers</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {service.id === 4 && (
                <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10 mb-8">
                  <h3 className="font-medium text-accent mb-3">Personalized Activity Planning</h3>
                  <p className="text-neutral-dark mb-4">
                    Our personalized engagement approach involves getting to know your loved one's unique history, preferences, and interests to create meaningful activities and schedules that promote wellbeing:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Detailed life history and interest exploration</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Identification of meaningful activities based on past and current interests</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Creation of structured daily and weekly routines that enhance quality of life</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Guidance for family members and caregivers on engagement techniques</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                      <span>Regular assessment and adjustment of activities as interests and abilities change</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {service.id === 5 && (
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-8">
                  <h3 className="font-medium text-accent mb-3">Specialized Dementia Care</h3>
                  <p className="text-neutral-dark mb-4">
                    Our dementia support services are designed to help families understand and respond to the unique challenges of dementia, with a focus on creating structure, comfort, and meaningful engagement:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Family education on understanding different types of dementia</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Guidance on effective communication techniques for different stages</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Creation of consistent daily schedules that provide security through familiarity</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Development of strategies for managing challenging behaviors</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span>Customized activity planning based on cognitive abilities and past interests</span>
                    </li>
                  </ul>
                </div>
              )}
              
              <div className="text-center sm:text-left">
                <Link href="/contact">
                  <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              {service.id === 1 && (
                <img 
                  src="https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Care coordination services" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
              
              {service.id === 2 && (
                <img 
                  src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Home adaptation services" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
              
              {service.id === 3 && (
                <img 
                  src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Family support services" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
              
              {service.id === 4 && (
                <img 
                  src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Personalized engagement planning" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
              
              {service.id === 5 && (
                <img 
                  src="https://images.unsplash.com/photo-1595954379453-b8c0dd2a8309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dementia support and education" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
              
              <div className="mt-8 bg-neutral-lightest p-6 rounded-lg border border-neutral-light">
                <h3 className="font-medium text-accent mb-4">Why This Matters</h3>
                
                {service.id === 1 && (
                  <p className="text-neutral-dark">
                    Proper care coordination ensures your loved one receives the right level of care in the right setting, avoiding both gaps in care and unnecessary services. Our expertise helps you navigate the complex world of care options, ensuring comfort, dignity, and appropriate support at every stage.
                  </p>
                )}
                
                {service.id === 2 && (
                  <p className="text-neutral-dark">
                    Home adaptations allow your loved one to remain safely in their home longer while maintaining independence and reducing fall risk. Our recommendations focus on practical solutions that make everyday activities safer and more accessible while preserving the comfort and familiarity of home.
                  </p>
                )}
                
                {service.id === 3 && (
                  <p className="text-neutral-dark">
                    Emotional support and resource connection help reduce the stress and isolation often experienced by both elderly adults and their caregivers. Our veteran-specific services ensure those who served receive all the benefits they've earned to enhance their care options and quality of life.
                  </p>
                )}
                
                {service.id === 4 && (
                  <p className="text-neutral-dark">
                    Meaningful engagement is essential for maintaining cognitive health, emotional well-being, and quality of life. Our personalized approach ensures activities are tailored to your loved one's unique interests and abilities, promoting joy, purpose, and connection even as abilities change.
                  </p>
                )}
                
                {service.id === 5 && (
                  <p className="text-neutral-dark">
                    Specialized dementia support helps families understand behaviors, implement effective communication strategies, and create environments that reduce anxiety and enhance quality of life. Our approach focuses on preserving dignity and finding moments of joy throughout the dementia journey.
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl text-accent mb-6">
              Our Approach to {service.title}
            </h2>
            <p className="text-neutral-dark text-lg mb-8">
              At Coastal Geriatric Consulting, we believe in personalized care solutions that honor each individual's unique needs, preferences, and life history. Our {service.title.toLowerCase()} services are tailored to your specific situation, with a focus on maintaining dignity, independence, and quality of life.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  View Other Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}