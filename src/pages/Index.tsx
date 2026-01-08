import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/JsonLd";

const Index = () => {
  useEffect(() => {
    document.title = "Aiyana Services - Comprehensive Care for Youth with Complex Needs | Edmonton";
    const meta = document.querySelector('meta[name="description"]') || (() => { 
      const m = document.createElement('meta'); 
      m.setAttribute('name', 'description'); 
      document.head.appendChild(m); 
      return m; 
    })();
    meta.setAttribute('content', 'Professional respite care and ADHD/Autism assessments in Edmonton. Aiyana Services provides compassionate, integrated support for families of youth with ADHD, Autism, IDD, addiction, and dual diagnoses. Trusted by Edmonton families.');
  }, []);
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <OrganizationSchema />
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
              <Card className="transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <Heart className="h-12 w-12 text-primary mb-6 mx-auto group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Discover our integrated care solutions designed to support children with complex needs and their families.
                  </p>
                  <Link to="/services" className="mt-auto">
                    <Button variant="outline" className="group/btn">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <Users className="h-12 w-12 text-secondary mb-6 mx-auto group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">About Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Meet our dedicated team and learn about our mission to provide compassionate, evidence-based care.
                  </p>
                  <Link to="/about" className="mt-auto">
                    <Button variant="outline" className="group/btn">
                      Our Story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <Phone className="h-12 w-12 text-success mb-6 mx-auto group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to get started? Reach out to our compassionate team and begin your journey to support.
                  </p>
                  <Link to="/contact" className="mt-auto">
                    <Button variant="outline" className="group/btn">
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
