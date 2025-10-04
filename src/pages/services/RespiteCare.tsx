import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Users, Shield, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const RespiteCare = () => {
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Respite Care Services | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Professional respite care services in Edmonton. Flexible scheduling, trained caregivers, and 24/7 support for families with complex care needs.');
  }, []);

  const benefits = [
    { icon: Clock, title: "Flexible Scheduling", description: "Book care when you need it - hourly, daily, or overnight support available." },
    { icon: Users, title: "Trained Caregivers", description: "All caregivers are professionally trained in developmental needs and behavioral support." },
    { icon: Shield, title: "24/7 Availability", description: "Emergency respite available around the clock for urgent family needs." },
    { icon: Heart, title: "Family-Centered", description: "Care plans tailored to your child's unique needs and family routines." },
  ];

  const process = [
    { step: "1", title: "Initial Consultation", description: "Free 30-minute consultation to understand your family's needs and care requirements." },
    { step: "2", title: "Care Plan Development", description: "We create a personalized care plan matching your child with the right caregiver." },
    { step: "3", title: "Flexible Booking", description: "Book sessions online or by phone - from single sessions to ongoing weekly care." },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Professional Respite Care</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Take a Break, We've Got You Covered
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Quality respite care services that give families the relief they need while providing exceptional care for your child.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Book Respite Care Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Respite Care</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional, compassionate care that gives you peace of mind
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Getting started with respite care is simple
              </p>
            </div>
            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {process.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Book Respite Care?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and discover how our respite care can support your family.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default RespiteCare;
