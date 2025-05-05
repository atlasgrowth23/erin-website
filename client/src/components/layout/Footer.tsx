import { Link } from "wouter";
import { contactInfo } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-secondary text-2xl mr-2">
                <i className="fas fa-heart"></i>
              </span>
              <h3 className="font-heading font-bold text-xl">Coastal Geriatric Consulting</h3>
            </div>
            <p className="text-white/80 mb-6">
              Supporting Gulf Coast families and their elderly loved ones with professional guidance, resource connections, and personalized care solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-secondary"></i>
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-secondary"></i>
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Coastal Geriatric Consulting, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
