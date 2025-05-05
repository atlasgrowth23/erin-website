import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/utils";
import { cn } from "@/lib/utils";
import CTASection from "@/components/home/CTASection";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Coastal Geriatric Consulting</title>
        <meta name="description" content="Specialized elder care services for Gulf Coast families including dementia care planning, VA benefits assistance for veterans, home coordination, and personalized engagement planning." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary/10 to-neutral-lightest py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-accent mb-6">
              Our Elder Support Services
            </h1>
            <p className="text-lg text-neutral-dark mb-8">
              We provide personalized services designed to support elderly adults and their families, with specialized expertise in dementia care and connection to resources, including VA benefits for veterans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="bg-neutral-lightest border-neutral-light"
                id={service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start mb-6">
                    <div className={cn("p-4 rounded-full mr-4", service.iconBgColor)}>
                      <i className={`fas fa-${service.icon} text-2xl ${service.iconColor}`}></i>
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-accent pt-2">{service.title}</h2>
                  </div>
                  <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <h3 className="font-medium text-accent mb-4">What We Provide:</h3>
                  <ul className="space-y-3 text-neutral-dark mb-6">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <i className={`fas fa-check ${service.checkIconColor} mt-1 mr-3`}></i>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.id === 1 && (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-4">
                      <h4 className="font-heading font-medium text-lg text-accent mb-2">Home & Facility Care Coordination</h4>
                      <p className="text-neutral-dark mb-3">
                        We'll assist with everything from coordinating and assuring quality non-medical care at home to helping select and transition to an appropriate care facility when needed.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Assessment of current care needs and anticipated future requirements</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Screening and selection of qualified in-home caregivers</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Evaluation of local facilities based on specific care needs and preferences</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Ongoing advocacy and care plan adjustments as needs change</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {service.id === 2 && (
                    <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10 mb-4">
                      <h4 className="font-heading font-medium text-lg text-accent mb-2">Home Adaptation & Mobility Solutions</h4>
                      <p className="text-neutral-dark mb-3">
                        We conduct thorough assessments of the home environment to identify safety risks and accessibility challenges. Our recommendations prioritize mobility, safety, and independence while maintaining the comfort and familiarity of home.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Coordination of grab bar and handrail installations</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Bathroom accessibility solutions (shower seats, raised toilets)</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Furniture arrangement for optimal mobility and safety</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Connection to trusted equipment vendors and installation services</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {service.id === 3 && (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-4">
                      <h4 className="font-heading font-medium text-lg text-accent mb-2">VA Benefits for Veterans</h4>
                      <p className="text-neutral-dark mb-3">
                        For veterans and their families, we provide specialized assistance navigating the VA benefits system. We help identify and access benefits that can significantly improve quality of life and care options.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Aid & Attendance benefit application assistance</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Connection to local VA resources and services</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Guidance on veteran-specific care options</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {service.id === 4 && (
                    <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10 mb-4">
                      <h4 className="font-heading font-medium text-lg text-accent mb-2">Personalized Engagement Approach</h4>
                      <p className="text-neutral-dark mb-3">
                        Our approach involves getting to know your loved one's unique history, preferences, and interests. We create customized engagement plans that promote wellbeing, dignity, and joy.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Detailed life history exploration</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Identification of meaningful activities based on past interests</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                          <span>Creation of structured routines that enhance quality of life</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {service.id === 5 && (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-4">
                      <h4 className="font-heading font-medium text-lg text-accent mb-2">Specialized Dementia Care Approach</h4>
                      <p className="text-neutral-dark mb-3">
                        Dementia presents unique challenges that require specialized knowledge and strategies. We help families understand dementia behaviors, implement effective communication techniques, and create structured schedules that promote comfort and reduce anxiety.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Dementia-specific activity planning based on cognitive abilities</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Guidance on communication strategies for different dementia stages</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Creation of consistent daily schedules that provide comfort through familiarity</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>Family education on understanding and responding to challenging behaviors</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex gap-4 mt-2">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-primary text-white hover:bg-primary-dark transition-colors">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-neutral-lightest p-8 md:p-10 rounded-lg border border-neutral-light">
            <h2 className="font-heading font-bold text-2xl text-accent mb-4 text-center">
              Gulf Coast Elder Care Specialists
            </h2>
            <p className="text-neutral-dark text-lg mb-6 text-center">
              We serve families throughout the Gulf Coast region with specialized knowledge of local resources, care facilities, and services available to seniors. Our personalized approach focuses on your family's unique needs, with particular expertise in dementia care planning and veterans' benefits assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="px-6 py-3 bg-primary text-white hover:bg-primary-dark transition-colors">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-6 py-3 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Learn About Erin's Approach
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
