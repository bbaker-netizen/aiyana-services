import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Briefcase, Heart, Users, TrendingUp, Award, DollarSign } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const Careers = () => {
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { elementRef: openingsRef, isVisible: openingsVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Careers | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Join the Aiyana Services team. Openings for home care workers and family support staff in Edmonton.');
  }, []);

  const benefits = [
    { icon: Heart, title: "Mission-Driven Work", description: "Make a real difference in families' lives every day." },
    { icon: DollarSign, title: "Competitive Compensation", description: "Above-market salaries and comprehensive benefits package." },
    { icon: TrendingUp, title: "Professional Growth", description: "Ongoing training, mentorship, and career development opportunities." },
    { icon: Users, title: "Collaborative Culture", description: "Work with a supportive, multi-disciplinary team." },
    { icon: Award, title: "Flexible Scheduling", description: "Work-life balance with flexible hours and remote options." },
    { icon: Briefcase, title: "Real Support", description: "A supervisor who answers the phone, and training before you are sent into a home." },
  ];

  const openings = [
    {
      title: "Home Care Worker",
      type: "Part-Time / Casual",
      description: "In-home personal care and respite for clients across Edmonton. Standard first aid with CPR level C and a clear police check with vulnerable sector search are required before a first shift. Somali or Kiswahili is an asset.",
      responsibilities: ["Personal care and respite in the client's home", "Complete the visit record for every visit", "Report changes in a client's condition the same day"]
    },
    {
      title: "Family Support Coordinator",
      type: "Casual",
      description: "Help families understand and use their FSCD or PDD funding, complete intake paperwork, and stay connected with their case worker. Bilingual candidates encouraged to apply.",
      responsibilities: ["Intake and funding navigation", "Scheduling and family communication", "Records and follow-up"]
    },
  ];


  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Careers", url: "/about/careers" }]} />
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/about">About</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Careers</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold text-lg">Join Our Team</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Careers at Aiyana Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Build a rewarding career doing meaningful work that transforms families' lives.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work Here Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Work With Us</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg text-muted-foreground text-center">
                  At Aiyana Services, you'll join a team of passionate professionals who believe in the power of integrated, compassionate care.
                </p>
                <p className="text-lg text-muted-foreground text-center">
                  We offer more than just a job—we offer a <strong className="text-foreground">career with purpose</strong>, surrounded by colleagues who share your commitment to excellence and your belief that every family deserves comprehensive support.
                </p>
                <p className="text-lg text-muted-foreground text-center">
                  Whether you have years behind you in home care or are just starting out in family services, we provide the <strong className="text-foreground">mentorship, resources, and autonomy</strong> you need to do your best work.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Employee Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive benefits that support your professional and personal well-being
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        {/* Current Openings Section */}
        <section ref={openingsRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Current Openings</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore opportunities to join our growing team
              </p>
            </div>
            <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-700 ${openingsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {openings.map((opening, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{opening.title}</CardTitle>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                        {opening.type}
                      </span>
                    </div>
                    <CardDescription className="text-base">{opening.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Key Responsibilities:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {opening.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Application Process</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Submit Application</h3>
                    <p className="text-sm text-muted-foreground">Send your resume and cover letter via email</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Interview</h3>
                    <p className="text-sm text-muted-foreground">Meet with our team to discuss the role and fit</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Onboarding</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive training and integration into the team</p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <p className="text-muted-foreground mb-4">
                    Ready to apply? Send your resume to <strong className="text-foreground">careers@aiyanaservices.com</strong>
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="text-lg px-8">
                      Contact Us to Apply
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Start Your Career Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join a team that's making a real difference in Edmonton families' lives.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get in Touch
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

export default Careers;
