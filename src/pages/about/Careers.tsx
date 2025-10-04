import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Heart, Users, TrendingUp, Award, DollarSign } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Careers = () => {
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { elementRef: openingsRef, isVisible: openingsVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Careers | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Join the Aiyana Services team. Career opportunities for psychologists, therapists, care providers, and support staff in Edmonton.');
  }, []);

  const benefits = [
    { icon: Heart, title: "Mission-Driven Work", description: "Make a real difference in families' lives every day." },
    { icon: DollarSign, title: "Competitive Compensation", description: "Above-market salaries and comprehensive benefits package." },
    { icon: TrendingUp, title: "Professional Growth", description: "Ongoing training, mentorship, and career development opportunities." },
    { icon: Users, title: "Collaborative Culture", description: "Work with a supportive, multi-disciplinary team." },
    { icon: Award, title: "Flexible Scheduling", description: "Work-life balance with flexible hours and remote options." },
    { icon: Briefcase, title: "Clinical Autonomy", description: "Freedom to practice with evidence-based approaches you trust." },
  ];

  const openings = [
    {
      title: "Registered Psychologist",
      type: "Full-Time",
      description: "Seeking experienced psychologist for ADHD/Autism assessments and therapy. Ph.D. or Psy.D. required, registration with CAP essential.",
      responsibilities: ["Conduct comprehensive assessments", "Provide evidence-based therapy", "Collaborate with multi-disciplinary team"]
    },
    {
      title: "Respite Care Worker",
      type: "Part-Time / Casual",
      description: "Compassionate caregivers needed for respite support. Experience with developmental disabilities preferred. Flexible scheduling.",
      responsibilities: ["Provide quality respite care", "Implement behavior support plans", "Document progress and communicate with families"]
    },
    {
      title: "Family Support Specialist",
      type: "Full-Time",
      description: "Coordinate care and connect families with resources. Social work or related degree required. Bilingual candidates encouraged to apply.",
      responsibilities: ["Care coordination and navigation", "Family advocacy and support", "Resource connection and follow-up"]
    },
    {
      title: "Addiction Counselor",
      type: "Full-Time",
      description: "Licensed counselor with expertise in youth addiction and dual diagnosis treatment. MSW or equivalent required.",
      responsibilities: ["Individual and family therapy", "Relapse prevention planning", "Crisis intervention and support"]
    },
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
                  Whether you're an experienced clinician or just starting your career in family services, we provide the <strong className="text-foreground">mentorship, resources, and autonomy</strong> you need to do your best work.
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
                    Ready to apply? Send your resume to <strong className="text-foreground">careers@aiyanaservices.ca</strong>
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
