import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueProposition from "@/components/ValueProposition";
import Stakes from "@/components/Stakes";
import Plan from "@/components/Plan";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  // SEO
  useEffect(() => {
    document.title = "Services | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Integrated respite care, ADHD and Autism assessments, and coordinated family support services in Edmonton.');
  }, []);
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* Services Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Comprehensive Support for Your Family</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the full range of integrated care solutions designed to support your child and family.
            </p>
          </div>
        </section>

        <ValueProposition />
        <Stakes />
        <Plan />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;
