import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Sparkles, FileCheck, Shield, Home, ChevronRight } from "lucide-react";
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

const AutismEvaluation = () => {
  const { elementRef: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { elementRef: supportRef, isVisible: supportVisible } = useScrollAnimation();

  useSeo({
    title: "Autism Evaluation Edmonton | Aiyana Services",
    description:
      "Gold-standard autism evaluations in Edmonton using ADOS-2 and multi-disciplinary expertise across toddlers, children, and adolescents.",
    path: "/services/autism-evaluation",
  });

  const approach = [
    { icon: Users, title: "Multi-Disciplinary Team", description: "Psychologists, speech therapists, and occupational therapists working together." },
    { icon: Sparkles, title: "Gold-Standard Tools", description: "ADOS-2, ADI-R, and other validated autism assessment instruments." },
    { icon: FileCheck, title: "Developmental History", description: "Comprehensive review of early development, milestones, and current functioning." },
    { icon: Heart, title: "Family-Centered", description: "Parent interviews and observations in natural settings for accurate picture." },
  ];

  const ageGroups = [
    { title: "Toddlers (18 months - 3 years)", description: "Early screening and assessment for early intervention eligibility." },
    { title: "Children (4-12 years)", description: "Comprehensive diagnostic evaluation for school support and services." },
    { title: "Adolescents (13-18 years)", description: "Assessment for older youth with focus on social skills and independence." },
  ];

  return (
    <div className="min-h-screen">
      <ServiceSchema name="Autism Evaluation" description="Gold-standard autism evaluations using ADOS-2 across toddlers, children, and adolescents." url="/services/autism-evaluation" />
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
                  <BreadcrumbPage>Autism Evaluation</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold text-lg">Comprehensive Autism Evaluation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Autism Evaluation Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Thorough, compassionate autism evaluations using gold-standard diagnostic tools and expert clinical judgment.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Book Autism Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section ref={approachRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Evaluation Approach</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive assessment using multiple perspectives and validated tools
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

        {/* Age Groups Section */}
        <section ref={supportRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Age Groups We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized assessments tailored to each developmental stage
              </p>
            </div>
            <div className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 ${supportVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {ageGroups.map((group, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{group.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Post-Evaluation Support */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">Post-Evaluation Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center text-lg">
                  Your evaluation includes comprehensive recommendations and ongoing support:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Detailed diagnostic report with personalized treatment recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>School advocacy support and IEP/504 plan consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Referrals to therapy services and community resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Follow-up consultation available to answer questions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Start Your Evaluation Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get the clarity and support your family needs with our comprehensive autism evaluation services.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Us Today
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

export default AutismEvaluation;
