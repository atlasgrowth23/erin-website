import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { services } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileServicesDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setMobileServicesDropdownOpen(!mobileServicesDropdownOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };
  
  const isServiceActive = () => {
    return location.startsWith('/services/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Mobile layout with centered logo */}
        <div className="md:hidden w-full flex items-center justify-between">
          <button 
            onClick={toggleMobileMenu}
            className="text-neutral-darkest z-10">
            <i className="fas fa-bars text-2xl"></i>
          </button>
          
          <Link href="/" className="flex items-center absolute left-1/2 -translate-x-1/2">
            <span className="text-primary text-3xl mr-2">
              <i className="fas fa-heart"></i>
            </span>
            <div>
              <h1 className="font-heading font-bold text-accent text-xl">Coastal Geriatric</h1>
              <p className="text-neutral-dark text-xs">Professional Elder Care Consulting</p>
            </div>
          </Link>
          
          {/* Empty div to balance the layout */}
          <div className="w-8"></div>
        </div>
        
        {/* Desktop layout */}
        <Link href="/" className="hidden md:flex items-center">
          <span className="text-primary text-3xl mr-2">
            <i className="fas fa-heart"></i>
          </span>
          <div>
            <h1 className="font-heading font-bold text-accent text-xl md:text-2xl">Coastal Geriatric</h1>
            <p className="text-neutral-dark text-xs md:text-sm">Professional Elder Care Consulting</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 justify-end w-full">
          <Link 
            href="/" 
            className={`font-medium ${isActive('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-dark hover:text-primary transition-colors'}`}>
            Home
          </Link>
          
          {/* Services dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button 
              onClick={toggleServicesDropdown}
              className={`font-medium flex items-center ${isActive('/services') || isServiceActive() ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-dark hover:text-primary transition-colors'}`}>
              Services <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                <Link 
                  href="/#services" 
                  className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-lightest hover:text-primary transition-colors"
                  onClick={() => setServicesDropdownOpen(false)}>
                  All Services
                </Link>
                <div className="border-t border-neutral-light my-1"></div>
                {services.map(service => (
                  <Link 
                    key={service.id}
                    href={`/services/${service.slug}`} 
                    className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-lightest hover:text-primary transition-colors"
                    onClick={() => setServicesDropdownOpen(false)}>
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            href="/about" 
            className={`font-medium ${isActive('/about') ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-dark hover:text-primary transition-colors'}`}>
            About
          </Link>
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
              Contact Us
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} bg-white border-t md:hidden`}>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              href="/" 
              className={`font-medium text-center ${isActive('/') ? 'text-primary' : 'text-neutral-dark'}`}
              onClick={closeMobileMenu}>
              Home
            </Link>
            
            {/* Mobile Services dropdown */}
            <div className="relative">
              <button 
                onClick={toggleMobileServicesDropdown}
                className={`font-medium w-full flex items-center justify-center ${isActive('/services') || isServiceActive() ? 'text-primary' : 'text-neutral-dark'}`}>
                Services <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${mobileServicesDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {mobileServicesDropdownOpen && (
                <div className="mt-2 bg-neutral-lightest rounded-md py-2">
                  <Link 
                    href="/#services" 
                    className="block px-4 py-2 text-sm text-neutral-dark hover:text-primary transition-colors text-center"
                    onClick={closeMobileMenu}>
                    All Services
                  </Link>
                  
                  {services.map(service => (
                    <Link 
                      key={service.id}
                      href={`/services/${service.slug}`} 
                      className="block px-4 py-2 text-sm text-neutral-dark hover:text-primary transition-colors text-center"
                      onClick={closeMobileMenu}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="/about" 
              className={`font-medium text-center ${isActive('/about') ? 'text-primary' : 'text-neutral-dark'}`}
              onClick={closeMobileMenu}>
              About
            </Link>
            <Link 
              href="/contact" 
              className="font-medium px-4 py-2 bg-primary text-white rounded-md text-center"
              onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
