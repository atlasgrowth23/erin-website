import { Link } from "wouter";
import { services } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-4">
            Our Comprehensive Elder Support Services
          </h2>
          <p className="text-neutral-dark text-lg">
            We offer a range of services designed to improve quality of life for elderly adults and peace of mind for their families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white border-neutral-light">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className={cn("p-3 rounded-md mr-4", service.iconBgColor)}>
                    <i className={`fas fa-${service.icon} text-xl ${service.iconColor}`}></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-accent">{service.title}</h3>
                </div>
                <p className="text-neutral-dark mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-neutral-dark mb-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`fas fa-check ${service.checkIconColor} mt-1 mr-3`}></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center sm:justify-start">
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="link" className={`${service.iconColor} p-0 flex items-center`}>
                      Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact">
            <Button className="px-6 py-3 bg-primary text-white hover:bg-primary-dark transition-colors">
              Discuss Your Needs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
