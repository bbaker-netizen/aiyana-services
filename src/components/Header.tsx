import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Aiyana Services</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
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
          
          <Button variant="cta" size="lg" className="hidden md:inline-flex">
            Reserve Respite Care
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;