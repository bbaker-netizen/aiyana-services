import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Phone, Mail, Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/ayana-logo.png";

const serviceLinks = [
  { title: "Respite Care", href: "/services/respite-care" },
  { title: "ADHD Assessment", href: "/services/adhd-assessment" },
  { title: "Autism Evaluation", href: "/services/autism-evaluation" },
  { title: "Addiction Support", href: "/services/addiction-support" },
  { title: "Dual Diagnosis Care", href: "/services/dual-diagnosis" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');
  
  return (
    <header className="w-full bg-card sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-2 md:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src={logo} 
              alt="Aiyana Services - Compassionate Care in Edmonton" 
              className="h-17 md:h-20 lg:h-23 xl:h-29 w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center md:space-x-4 lg:space-x-6 xl:space-x-8">
            <div className="relative group">
              <Link 
                to="/services"
                className={`inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}
              >
                Services
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="w-48 p-2 bg-card border border-border shadow-lg rounded-md">
                  {serviceLinks.map((service) => (
                    <li key={service.href}>
                      <Link
                        to={service.href}
                        className={`block px-3 py-2 text-sm rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${location.pathname === service.href ? 'text-primary font-medium' : 'text-foreground'}`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
            <div className="flex items-center md:space-x-2 lg:space-x-4 border-l border-border md:pl-3 lg:pl-6">
              <div className="flex items-center space-x-2 px-0 lg:px-3 py-2 rounded-lg lg:bg-primary/10 lg:hover:bg-primary/20 transition-colors">
                <Phone className="h-4 lg:h-5 w-4 lg:w-5 text-primary" />
                <a href="tel:780-851-9334" className="font-semibold text-primary text-sm lg:text-base">
                  (780) 851-9334
                </a>
              </div>
              <div className="hidden lg:flex items-center space-x-1 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@aiyanaservices.com" className="hover:text-primary transition-colors">
                  info@aiyanaservices.com
                </a>
              </div>
            </div>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="hidden xl:inline-flex shadow-card hover:shadow-warm">
                Request Service
              </Button>
            </Link>
            
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <div className="space-y-2">
                    <Link 
                      to="/services" 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors block ${isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                    >
                      Services
                    </Link>
                    <div className="pl-4 space-y-2 border-l-2 border-border">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block text-sm transition-colors ${location.pathname === service.href ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'}`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to="/about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                  >
                    Contact
                  </Link>
                  
                  <div className="border-t border-border pt-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href="tel:780-851-9334" className="hover:text-primary transition-colors">
                        (780) 851-9334
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <a href="mailto:info@aiyanaservices.com" className="hover:text-primary transition-colors break-all">
                        info@aiyanaservices.com
                      </a>
                    </div>
                  </div>
                  
                  <Button variant="cta" size="lg" className="w-full mt-4" asChild>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Request Service
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;