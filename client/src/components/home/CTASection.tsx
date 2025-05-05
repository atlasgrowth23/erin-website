import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
            Need Support with Elder Care on the Gulf Coast?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Whether you need assistance with dementia care, connecting to VA benefits for veterans, or creating a personalized care plan, Erin is here to help. Contact us for a consultation tailored to your family's specific needs.
          </p>
          <Link href="/contact">
            <Button className="px-8 py-4 bg-white text-primary hover:bg-neutral-lightest transition-colors text-lg">
              Get in Touch Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
