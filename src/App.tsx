import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RespiteCare from "./pages/services/RespiteCare";
import ADHDAssessment from "./pages/services/ADHDAssessment";
import AutismEvaluation from "./pages/services/AutismEvaluation";
import AddictionSupport from "./pages/services/AddictionSupport";
import DualDiagnosis from "./pages/services/DualDiagnosis";
import Mission from "./pages/about/Mission";
import Team from "./pages/about/Team";
import Testimonials from "./pages/about/Testimonials";
import Careers from "./pages/about/Careers";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BusinessCards from "./pages/BusinessCards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/respite-care" element={<RespiteCare />} />
          <Route path="/services/adhd-assessment" element={<ADHDAssessment />} />
          <Route path="/services/autism-evaluation" element={<AutismEvaluation />} />
          <Route path="/services/addiction-support" element={<AddictionSupport />} />
          <Route path="/services/dual-diagnosis" element={<DualDiagnosis />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/business-cards" element={<BusinessCards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
