import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmpathyCompetency from "@/components/EmpathyCompetency";
import ExplanatoryParagraph from "@/components/ExplanatoryParagraph";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Briefcase, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";

const About = () => {
  useSeo({
    title: "About Aiyana Services | Edmonton Family Care",
    description:
      "Learn about Aiyana Services' mission, values, and team supporting Edmonton families with respite, assessments, and integrated care.",
    path: "/about",
  });
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* About Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Dedicated to Your Family's Success</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Aiyana Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn about our mission, values, and the dedicated team supporting families across Edmonton.
            </p>
          </div>
        </section>

        {/* Learn More About Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Learn More About Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover more about our mission, team, and the families we serve
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="text-center group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Learn about our purpose, values, and vision for integrated family care.
                  </CardDescription>
                  <Link to="/about/mission">
                    <Button variant="outline" className="w-full group-hover:border-primary">
                      Read our mission
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Careers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Explore opportunities to join our mission-driven team.
                  </CardDescription>
                  <Link to="/about/careers">
                    <Button variant="outline" className="w-full group-hover:border-primary">
                      View Openings
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <EmpathyCompetency />
        <ExplanatoryParagraph />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
