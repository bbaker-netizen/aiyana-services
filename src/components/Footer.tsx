import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ayana-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 overflow-hidden flex-shrink-0">
                <img src={logo} alt="Aiyana Services Logo" className="h-10 w-auto object-cover object-left brightness-0 invert" />
              </div>
              <h3 className="text-2xl font-bold">Aiyana Services</h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Providing compassionate, integrated care for youth, adults, and families navigating ADHD, Autism, IDD, 
              addiction, and dual diagnoses. Trusted by Edmonton families for over a decade.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <a href="tel:780-229-4466" className="hover:text-primary-light transition-colors">
                  (780) 229-4466
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light" />
                <a href="mailto:info@aiyanaservices.com" className="hover:text-primary-light transition-colors">
                  info@aiyanaservices.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-light" />
                <span>Edmonton, Alberta</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-light" />
                <span>24/7 Emergency Support Available</span>
              </div>
            </div>
          </div>
          
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about/mission" className="text-background/80 hover:text-primary-light transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="text-background/80 hover:text-primary-light transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/testimonials" className="text-background/80 hover:text-primary-light transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about/careers" className="text-background/80 hover:text-primary-light transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/respite-care" className="text-background/80 hover:text-primary-light transition-colors">
                  Respite Care
                </Link>
              </li>
              <li>
                <Link to="/services/adhd-assessment" className="text-background/80 hover:text-primary-light transition-colors">
                  ADHD Assessment
                </Link>
              </li>
              <li>
                <Link to="/services/autism-evaluation" className="text-background/80 hover:text-primary-light transition-colors">
                  Autism Evaluation
                </Link>
              </li>
              <li>
                <Link to="/services/addiction-support" className="text-background/80 hover:text-primary-light transition-colors">
                  Addiction Support
                </Link>
              </li>
              <li>
                <Link to="/services/dual-diagnosis" className="text-background/80 hover:text-primary-light transition-colors">
                  Dual Diagnosis Care
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 text-center text-foreground">
          <h4 className="text-2xl font-bold mb-4">Need Immediate Support?</h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait for help. Contact us today and take the first step toward comprehensive care for your family.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Request Service
            </Button>
          </Link>
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-background/20">
          <div>
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary-light transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-primary-light transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/brochure" className="text-background/80 hover:text-primary-light transition-colors">
                  Download Brochure
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-background/80 hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-background/80 hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-right">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Aiyana Services Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;