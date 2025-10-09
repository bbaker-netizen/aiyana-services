import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/aiyana-logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="w-full bg-card sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-2 md:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src={logo} 
              alt="Aiyana Services - Compassionate Care in Edmonton" 
              className="h-16 md:h-20 lg:h-28 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-foreground">AIYANA</span>
              <span className="text-[10px] md:text-xs lg:text-sm text-muted-foreground tracking-wider">Services</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center md:space-x-4 lg:space-x-6 xl:space-x-8">
            <Link 
              to="/services" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/services' ? 'text-primary' : ''}`}
            >
              Services
            </Link>
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
              <div className="flex items-center space-x-2 px-2 lg:px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Phone className="h-4 lg:h-5 w-4 lg:w-5 text-primary" />
                <a href="tel:780-555-0123" className="font-semibold text-primary text-sm lg:text-base">
                  (780) 555-0123
                </a>
              </div>
              <div className="hidden lg:flex items-center space-x-1 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@aiyanaservices.ca" className="hover:text-primary transition-colors">
                  info@aiyanaservices.ca
                </a>
              </div>
            </div>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="cta" size="lg" className="hidden lg:inline-flex shadow-card hover:shadow-warm">
              Reserve Respite Care
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/services" 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                  >
                    Services
                  </Link>
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
                      <a href="tel:780-555-0123" className="hover:text-primary transition-colors">
                        (780) 555-0123
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <a href="mailto:info@aiyanaservices.ca" className="hover:text-primary transition-colors break-all">
                        info@aiyanaservices.ca
                      </a>
                    </div>
                  </div>
                  
                  <Button variant="cta" size="lg" className="w-full mt-4" asChild>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Reserve Respite Care
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