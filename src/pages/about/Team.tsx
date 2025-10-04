import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Team = () => {
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { elementRef: standardsRef, isVisible: standardsVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Our Team | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Meet the dedicated team at Aiyana Services. Expert psychologists, therapists, and care providers supporting Edmonton families.');
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Clinical Psychologist",
      credentials: "Ph.D., Registered Psychologist",
      specialization: "ADHD and Autism Assessment, Dual Diagnosis Treatment",
      description: "15+ years experience in developmental psychology with specialization in complex neurodevelopmental conditions."
    },
    {
      name: "James Chen",
      role: "Addiction Counselor",
      credentials: "MSW, Certified Addiction Specialist",
      specialization: "Youth Addiction, Family Therapy, Dual Diagnosis",
      description: "Passionate about helping families navigate addiction with compassion and evidence-based treatment."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Child Psychiatrist",
      credentials: "M.D., FRCPC",
      specialization: "Medication Management, Co-occurring Disorders",
      description: "Expertise in managing complex medication needs for children with multiple diagnoses."
    },
    {
      name: "Emily Rodriguez",
      role: "Family Support Coordinator",
      credentials: "B.A. Social Work, FCSS Certified",
      specialization: "Care Coordination, Resource Navigation, Respite Care",
      description: "Dedicated to connecting families with the resources and support they need to thrive."
    },
    {
      name: "Michael Thompson",
      role: "Behavioral Therapist",
      credentials: "M.A. Psychology, BCBA",
      specialization: "Applied Behavior Analysis, Autism Support",
      description: "Skilled in developing practical strategies for managing challenging behaviors at home and school."
    },
    {
      name: "Lisa Nguyen",
      role: "Assessment Coordinator",
      credentials: "M.Ed., Psychometrist",
      specialization: "Psychological Testing, Educational Assessment",
      description: "Expert in comprehensive assessment administration and interpretation for diagnostic clarity."
    }
  ];

  const standards = [
    { icon: GraduationCap, title: "Advanced Education", description: "All clinicians hold master's or doctoral degrees in their specialties." },
    { icon: Award, title: "Professional Credentials", description: "Licensed, registered, and certified with relevant professional colleges." },
    { icon: Heart, title: "Ongoing Training", description: "Regular continuing education on the latest evidence-based practices." },
    { icon: Users, title: "Collaborative Approach", description: "Weekly case consultations ensure coordinated, comprehensive care." },
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
              <Users className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Expert Care Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Dedicated professionals with specialized expertise in developmental, mental health, and addiction services.
            </p>
          </div>
        </section>

        {/* Team Members Section */}
        <section ref={teamRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Professionals</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the expertise and compassion of our multi-disciplinary team
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center font-semibold text-foreground">
                      {member.role}
                    </CardDescription>
                    <CardDescription className="text-center text-sm">
                      {member.credentials}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Specialization:</p>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Do This Section */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why We Do This Work</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg text-muted-foreground text-center">
                  Every member of our team chose this field because we've seen firsthand how the right support can transform a family's trajectory.
                </p>
                <p className="text-lg text-muted-foreground text-center">
                  We know what it's like to navigate complex systems, face uncertainty, and wonder if things will ever get better. That's why we bring not just our professional expertise, but our deep personal commitment to walking alongside families during their most challenging moments.
                </p>
                <p className="text-lg text-muted-foreground text-center font-semibold text-foreground">
                  Your family's success is our success. Your child's progress is our greatest reward.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Standards Section */}
        <section ref={standardsRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Professional Standards</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Excellence in training, credentials, and ongoing development
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${standardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {standards.map((standard, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <standard.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{standard.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{standard.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We're always looking for passionate professionals who share our mission. Explore career opportunities at Aiyana Services.
            </p>
            <Link to="/about/careers">
              <Button variant="default" size="xl" className="bg-background text-foreground hover:bg-background/90">
                View Career Opportunities
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

export default Team;
