import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Users, Phone, Activity, Home, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AddictionSupport = () => {
  const { elementRef: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Addiction Support Services | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Family-centered addiction support services in Edmonton. Individual therapy, family counseling, and dual diagnosis treatment for youth and families.');
  }, []);

  const approach = [
    { icon: Heart, title: "Family-Centered Care", description: "We treat addiction as a family issue, involving parents and siblings in recovery." },
    { icon: Activity, title: "Evidence-Based Treatment", description: "CBT, DBT, and motivational interviewing proven effective for youth addiction." },
    { icon: Users, title: "Coordinated Support", description: "Integration with ADHD, autism, and mental health services for holistic care." },
    { icon: Phone, title: "Crisis Support", description: "24/7 crisis line and immediate intervention for urgent situations." },
  ];

  const services = [
    { title: "Individual Therapy", description: "One-on-one counseling addressing root causes, triggers, and coping strategies." },
    { title: "Family Counseling", description: "Rebuilding trust, communication, and healthy family dynamics during recovery." },
    { title: "Group Support", description: "Peer support groups for youth struggling with substance use and behavioral addictions." },
    { title: "Relapse Prevention", description: "Comprehensive planning and ongoing support to maintain long-term recovery." },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/"><Home className="h-4 w-4" /></Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/services">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Addiction Support</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold text-lg">Compassionate Addiction Support</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Addiction Support Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Evidence-based addiction treatment that addresses the whole person and supports the entire family through recovery.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Get Addiction Support
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section ref={approachRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Treatment Approach</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive, family-centered care that treats addiction in context
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {approach.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Treatment Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Multiple modalities to support every stage of recovery
              </p>
            </div>
            <div className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dual Diagnosis Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader className="text-center">
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">Dual Diagnosis Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center text-lg">
                  Many youth with addiction also struggle with ADHD, autism, or mental health conditions. Our integrated approach treats both:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Coordinated treatment for addiction and underlying mental health conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>ADHD and autism support integrated with addiction treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Medication management and therapy coordination across providers</span>
                  </li>
                </ul>
                <div className="pt-4 text-center">
                  <Link to="/services/dual-diagnosis">
                    <Button variant="outline">Learn More About Dual Diagnosis Care</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Recovery Starts Here</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Reach out today for compassionate, evidence-based addiction support for your family.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Us Now
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

export default AddictionSupport;
