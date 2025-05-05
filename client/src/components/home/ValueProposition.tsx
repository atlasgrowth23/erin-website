import { valueProps } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ValueProposition() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent mb-4">
            Why Families Choose Our Care Support
          </h2>
          <p className="text-neutral-dark text-lg">
            We understand the emotional and practical challenges of elder care transitions. Our personalized approach helps families navigate this journey with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <Card key={prop.id} className="bg-neutral-lightest border-neutral-light">
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-5", prop.iconBgColor)}>
                  <i className={`fas fa-${prop.icon} text-2xl ${prop.iconColor}`}></i>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-accent">{prop.title}</h3>
                <p className="text-neutral-dark">
                  {prop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
