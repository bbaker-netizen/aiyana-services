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
    title: "Aiyana Services — Respite & Assessments in Edmonton",
    description:
      "Edmonton respite care plus ADHD and autism assessments. Compassionate, integrated support for families with complex needs.",
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
        <section className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Why Edmonton Families Choose Aiyana Services</h2><div className="space-y-6 text-lg text-muted-foreground leading-relaxed"><p>Raising a child with ADHD, autism, or other complex needs often means juggling multiple specialists, long waitlists, and disconnected care plans. Aiyana Services was built to change that. Our Edmonton-based team brings respite care, ADHD assessment, autism evaluation, addiction support, and dual diagnosis care together under one roof, so families spend less time coordinating and more time getting the support they actually need.</p><p>Every assessment and care plan is led by experienced clinicians using evidence-based, gold-standard diagnostic tools, then tailored to the specific circumstances of each child, youth, or adult we work with. We take the time to understand a family's history, strengths, and goals before recommending next steps, and we stay involved well past the initial evaluation with follow-up consultations, school advocacy support, and referrals to trusted community resources.</p><p>We know that support needs don't always wait for business hours, which is why our team offers 24/7 emergency support alongside flexible scheduling for planned respite and assessment appointments. Located at 12315 Stony Plain Rd in Edmonton, our team has supported local families for over a decade and continues to welcome families from across the greater Edmonton area.</p></div></div></div></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
