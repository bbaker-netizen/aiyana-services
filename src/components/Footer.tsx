import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ayana-logo-footer.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Aiyana Services" className="h-11 w-auto flex-shrink-0" />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              In-home respite and FSCD and PDD funded community supports for children, youth, and adults with complex
              needs, across Edmonton and the surrounding area. Support in Somali, Kiswahili, and English.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <a href="tel:+17808516157" className="hover:text-primary-light transition-colors">
                  (780) 851-6157
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
                <span>12315 Stony Plain Rd #101, Edmonton, AB T5N 3Y8</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-light" />
                <span>Mon to Fri 8:00 to 6:00, Sat 9:00 to 4:00</span>
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
                <Link to="/about/careers" className="text-background/80 hover:text-primary-light transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-primary-light transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary-light transition-colors">
                  Contact Us
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
                <Link to="/services" className="text-background/80 hover:text-primary-light transition-colors">
                  Community Supports
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-primary-light transition-colors">
                  Funding Navigation
                </Link>
              </li>
              <li className="text-background/50">ADHD Assessment (coming soon)</li>
              <li className="text-background/50">Autism Evaluation (coming soon)</li>
              <li className="text-background/50">Counselling and Addiction Support (coming soon)</li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 text-center text-foreground">
          <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tell us what your family needs and we will talk you through what your funding covers and what we can do.
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
              © {new Date().getFullYear()} Aiyana Services Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
