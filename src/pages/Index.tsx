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
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  useSeo({
    title: "Aiyana Services - In-Home Respite and Community Supports in Edmonton",
    description:
      "Edmonton in-home respite and FSCD and PDD funded community supports. Support in Somali, Kiswahili, and English.",
    path: "/",
  });
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
                      Explore our services
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
                    Learn about our mission and how we work with Edmonton families.
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
        <section className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Why Edmonton Families Choose Aiyana Services</h2><div className="space-y-6 text-lg text-muted-foreground leading-relaxed"><p>Raising a child, or supporting an adult, with complex needs often means juggling multiple providers, long waitlists, and disconnected care plans. Aiyana Services was built to change that. Our Edmonton-based team delivers FSCD and PDD funded respite and community supports, so families deal with one provider instead of five.</p><p>Every care plan is tailored to the specific circumstances of the child, youth, or adult we work with. We take the time to understand a family's history, strengths, and goals before recommending next steps, and we stay involved well past the first conversation with ongoing coordination, school advocacy support, and referrals to trusted community resources. Many of the families we serve are newcomers, and we support them in their own language.</p><p>Scheduling is built around the household rather than a fixed timetable, including evenings and weekends where a worker is available. Aiyana Services is located at 12315 Stony Plain Rd in Edmonton and welcomes families from across the greater Edmonton area, with support available in Somali, Kiswahili, and English.</p></div></div></div></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
