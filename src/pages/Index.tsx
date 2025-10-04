import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        
        {/* Quick Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive Care for Your Family
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our services, learn about our approach, or get in touch with our team today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-primary text-primary-foreground rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Discover our integrated care solutions designed to support children with complex needs and their families.
                  </p>
                  <Link to="/services">
                    <Button variant="cta-outline" className="group/btn">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-secondary text-secondary-foreground rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">About Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Meet our dedicated team and learn about our mission to provide compassionate, evidence-based care.
                  </p>
                  <Link to="/about">
                    <Button variant="cta-outline" className="group/btn">
                      Our Story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-success text-success-foreground rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="h-12 w-12 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to get started? Reach out to our compassionate team and begin your journey to support.
                  </p>
                  <Link to="/contact">
                    <Button variant="cta-outline" className="group/btn">
                      Get in Touch
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
