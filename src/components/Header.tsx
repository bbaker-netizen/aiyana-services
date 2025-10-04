import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="w-full bg-card sticky top-0 z-50 shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent">
              Aiyana Services
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
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
            <div className="flex items-center space-x-4 text-sm text-muted-foreground border-l border-border pl-6">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a href="tel:780-555-0123" className="hover:text-primary transition-colors">
                  (780) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@aiyanaservices.ca" className="hover:text-primary transition-colors">
                  info@aiyanaservices.ca
                </a>
              </div>
            </div>
          </nav>
          
          <Button variant="cta" size="lg" className="hidden md:inline-flex shadow-card hover:shadow-warm">
            Reserve Respite Care
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;