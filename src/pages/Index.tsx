import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stakes from "@/components/Stakes";
import ValueProposition from "@/components/ValueProposition";
import EmpathyCompetency from "@/components/EmpathyCompetency";
import Plan from "@/components/Plan";
import ExplanatoryParagraph from "@/components/ExplanatoryParagraph";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stakes />
        <ValueProposition />
        <EmpathyCompetency />
        <Plan />
        <ExplanatoryParagraph />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
