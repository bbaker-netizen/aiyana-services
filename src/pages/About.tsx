import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmpathyCompetency from "@/components/EmpathyCompetency";
import ExplanatoryParagraph from "@/components/ExplanatoryParagraph";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Users } from "lucide-react";

const About = () => {
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

        <EmpathyCompetency />
        <ExplanatoryParagraph />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
