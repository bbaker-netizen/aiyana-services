import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ClipboardList, Users, FileText, CheckCircle, Home, ChevronRight } from "lucide-react";
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

const ADHDAssessment = () => {
  const { elementRef: includesRef, isVisible: includesVisible } = useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();

  useSeo({
    title: "ADHD Assessment Edmonton | Aiyana Services",
    description:
      "Comprehensive ADHD assessments in Edmonton with standardized testing, behavioural observation, and detailed reports for children and youth.",
    path: "/services/adhd-assessment",
  });

  const includes = [
    { icon: ClipboardList, title: "Comprehensive Evaluation", description: "Detailed assessment using standardized tools and clinical interviews." },
    { icon: Users, title: "Multi-Perspective Input", description: "Gathering information from parents, teachers, and caregivers for complete picture." },
    { icon: Brain, title: "Behavioral Observation", description: "Direct observation of attention, impulse control, and executive function." },
    { icon: FileText, title: "Detailed Report", description: "Written report with diagnosis, recommendations, and support strategies." },
  ];

  const process = [
    { step: "1", title: "Initial Intake", description: "Parent interview to understand developmental history and current concerns (90 minutes)." },
    { step: "2", title: "Assessment Session", description: "Direct testing and observation with your child using validated ADHD assessment tools (2-3 hours)." },
    { step: "3", title: "Feedback Meeting", description: "Comprehensive results review with diagnosis, recommendations, and next steps (60 minutes)." },
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
                  <BreadcrumbPage>ADHD Assessment</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold text-lg">Professional ADHD Assessment</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                ADHD Assessment Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Evidence-based assessments that provide clarity, diagnosis, and actionable recommendations for your child's success.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Schedule ADHD Assessment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section ref={includesRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">What's Included</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our thorough assessment process covers all aspects of ADHD evaluation
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${includesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {includes.map((item, index) => (
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

        {/* Process Timeline Section */}
        <section ref={processRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Assessment Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A structured 3-step approach to accurate ADHD diagnosis
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
            <h2 className="text-4xl font-bold mb-6">Get Answers and Support Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our ADHD assessments provide the clarity you need to support your child's development and success.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Book Your Assessment
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

export default ADHDAssessment;
