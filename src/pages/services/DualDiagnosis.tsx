import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Brain, Heart, Shield, Home, ChevronRight } from "lucide-react";
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
import { ServiceSchema } from "@/components/seo/JsonLd";
import { useSeo } from "@/hooks/useSeo";

const DualDiagnosis = () => {
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { elementRef: approachRef, isVisible: approachVisible } = useScrollAnimation();

  useSeo({
    title: "Dual Diagnosis Care Edmonton | Aiyana Services",
    description:
      "Integrated dual diagnosis care in Edmonton for co-occurring mental health and developmental conditions in children and youth.",
    path: "/services/dual-diagnosis",
  });

  const benefits = [
    { icon: Users, title: "Integrated Team", description: "Psychiatrists, psychologists, and therapists working in coordination." },
    { icon: Brain, title: "Comprehensive Assessment", description: "Evaluate all conditions simultaneously for accurate diagnosis and treatment planning." },
    { icon: Heart, title: "Holistic Treatment", description: "Address underlying issues, symptoms, and family dynamics together." },
    { icon: Shield, title: "Coordinated Care", description: "Single treatment plan addressing all diagnoses with consistent messaging." },
  ];

  const conditions = [
    { title: "ADHD + Anxiety/Depression", description: "Managing attention difficulties alongside mood disorders with integrated behavioral and medication strategies." },
    { title: "Autism + Mental Health", description: "Supporting social communication challenges while addressing anxiety, OCD, or depression common in autistic youth." },
    { title: "Addiction + ADHD/Autism", description: "Treating substance use while accommodating neurodevelopmental needs and executive function challenges." },
  ];

  return (
    <div className="min-h-screen">
      <ServiceSchema name="Dual Diagnosis Care" description="Integrated care for co-occurring mental health and developmental conditions in children and youth." url="/services/dual-diagnosis" />
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
                  <BreadcrumbPage>Dual Diagnosis Care</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Activity className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold text-lg">Specialized Dual Diagnosis Care</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Dual Diagnosis Care
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Expert care for children and youth with multiple diagnoses—treating the whole person, not just individual symptoms.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Dual Diagnosis Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">What is Dual Diagnosis?</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground text-lg">
                  Dual diagnosis refers to the presence of two or more co-occurring conditions, such as:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>ADHD with anxiety or depression</strong> - Executive function challenges compounded by mood disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Autism with mental health conditions</strong> - Social communication differences alongside OCD, anxiety, or depression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Addiction with neurodevelopmental disorders</strong> - Substance use occurring alongside ADHD or autism</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-lg pt-4">
                  Standard treatment often addresses conditions separately, leading to fragmented care and poor outcomes. Our integrated approach treats all conditions simultaneously.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Benefits of Integrated Care</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Why treating co-occurring conditions together leads to better outcomes
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {benefits.map((item, index) => (
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

        {/* Common Co-Occurring Conditions Section */}
        <section ref={approachRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Common Co-Occurring Conditions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in treating these complex combinations
              </p>
            </div>
            <div className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 ${approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {conditions.map((condition, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{condition.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{condition.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Approach Section */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Treatment Model</h2>
            </div>
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Integrated, Person-Centered Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  Our dual diagnosis treatment model includes:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Comprehensive assessment</strong> evaluating all conditions and their interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Single integrated treatment plan</strong> addressing all diagnoses simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Coordinated medication management</strong> considering interactions and side effects across conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Integrated therapy</strong> using evidence-based approaches tailored to multiple conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span><strong>Family and school support</strong> with consistent strategies across all settings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Get Comprehensive Dual Diagnosis Care</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Stop managing conditions in isolation. Experience the power of truly integrated treatment.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule a Consultation
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

export default DualDiagnosis;
