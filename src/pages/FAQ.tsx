import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

// FAQ data for JSON-LD schema
const faqData = [
  { question: "What services does Aiyana Services offer?", answer: "We offer comprehensive support including respite care, ADHD assessments, autism evaluations, addiction support, and dual diagnosis care. Our integrated approach ensures your family receives coordinated care across all services." },
  { question: "Who do you serve?", answer: "We serve children, youth, and families navigating ADHD, autism spectrum disorder, intellectual and developmental disabilities (IDD), addiction challenges, and dual diagnoses. Our services are available to families throughout Edmonton and surrounding areas." },
  { question: "How do I get started?", answer: "Simply contact us by phone at (780) 851-9334 or email info@aiyanaservices.com. We'll schedule an initial consultation to understand your needs and develop a personalized care plan for your family." },
  { question: "What is respite care?", answer: "Respite care provides temporary relief for primary caregivers, allowing you to rest while trained professionals care for your loved one. Our respite services include in-home care, community outings, and structured activities tailored to your child's needs and interests." },
  { question: "How long can I book respite care for?", answer: "We offer flexible respite care options ranging from a few hours to overnight stays and extended weekend support. We work with your schedule and funding availability to create a plan that works for your family." },
  { question: "What qualifications do your respite caregivers have?", answer: "All our respite workers have relevant certifications (DSW, SW, or equivalent), specialized training in autism, ADHD, and developmental disabilities, First Aid/CPR certification, and clear criminal record checks including vulnerable sector screening." },
  { question: "What's involved in an ADHD assessment?", answer: "Our comprehensive ADHD assessments include clinical interviews, standardized rating scales, behavioural observations, cognitive testing, and school/home questionnaires. The process typically takes 4-6 hours over multiple sessions." },
  { question: "How long does an autism evaluation take?", answer: "Our autism evaluations typically require 6-8 hours over 2-3 sessions. This includes developmental history, ADOS-2 assessment, cognitive testing, adaptive behaviour assessment, and parent/caregiver interviews." },
  { question: "Do you accept insurance?", answer: "Yes, we accept most private insurance plans that cover psychological services and respite care. We provide detailed receipts for submission to your insurance provider." },
  { question: "What about government funding (FSCD, PDD)?", answer: "We are an approved service provider for Family Support for Children with Disabilities (FSCD) and Persons with Developmental Disabilities (PDD) programs. We can help you navigate the application process and coordinate funding for eligible services." },
  { question: "Are staff background checked?", answer: "Absolutely. All staff undergo comprehensive criminal record checks including vulnerable sector screening prior to working with families. Background checks are renewed every three years." },
  { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency respite support based on availability. For crisis situations, we can often arrange same-day or next-day services." },
  { question: "Where are you located?", answer: "Our main office is located in Edmonton, Alberta. Assessments are conducted at our comfortable, child-friendly clinic space. We also provide in-home services throughout the greater Edmonton area and surrounding communities." },
];

import { useSeo } from "@/hooks/useSeo";

const FAQ = () => {
  useSeo({
    title: "FAQ | Aiyana Services Edmonton",
    description:
      "Answers about respite care, ADHD and autism assessments, FSCD/PDD funding, insurance, and staff qualifications in Edmonton.",
    path: "/faq",
  });

  return (
    <div className="min-h-screen">
      <FAQPageSchema faqs={faqData} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]} />
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can support your family.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* General Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="what-services" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What services does Aiyana Services offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer comprehensive support including respite care, ADHD assessments, autism evaluations, 
                    addiction support, and dual diagnosis care. Our integrated approach ensures your family receives 
                    coordinated care across all services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="who-serve" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Who do you serve?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We serve children, youth, and families navigating ADHD, autism spectrum disorder, intellectual and 
                    developmental disabilities (IDD), addiction challenges, and dual diagnoses. Our services are available 
                    to families throughout Edmonton and surrounding areas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="get-started" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Simply contact us by phone at (780) 851-9334 or email info@aiyanaservices.com. We'll schedule an 
                    initial consultation to understand your needs and develop a personalized care plan for your family.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Respite Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Respite Care</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="what-respite" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What is respite care?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Respite care provides temporary relief for primary caregivers, allowing you to rest while trained 
                    professionals care for your loved one. Our respite services include in-home care, community outings, 
                    and structured activities tailored to your child's needs and interests.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="respite-duration" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    How long can I book respite care for?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer flexible respite care options ranging from a few hours to overnight stays and extended weekend 
                    support. We work with your schedule and funding availability to create a plan that works for your family.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="caregiver-qualifications" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What qualifications do your respite caregivers have?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    All our respite workers have relevant certifications (DSW, SW, or equivalent), specialized training in 
                    autism, ADHD, and developmental disabilities, First Aid/CPR certification, and clear criminal record checks 
                    including vulnerable sector screening. We carefully match caregivers to each family's unique needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Assessments */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Assessments & Evaluations</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="adhd-assessment" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What's involved in an ADHD assessment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our comprehensive ADHD assessments include clinical interviews, standardized rating scales, behavioural 
                    observations, cognitive testing, and school/home questionnaires. The process typically takes 4-6 hours 
                    over multiple sessions, followed by a detailed report and recommendations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="autism-evaluation" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    How long does an autism evaluation take?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our autism evaluations typically require 6-8 hours over 2-3 sessions. This includes developmental history, 
                    ADOS-2 assessment, cognitive testing, adaptive behaviour assessment, and parent/caregiver interviews. 
                    You'll receive a comprehensive diagnostic report within 2-3 weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="who-conducts" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Who conducts the assessments?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    All assessments are conducted by registered psychologists with specialized training and extensive 
                    experience in ADHD, autism, and developmental disabilities. Our team includes professionals qualified 
                    to provide diagnoses recognized by Alberta Education, FSCD, and PDD.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Insurance & Funding */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Insurance & Funding</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="insurance" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Do you accept insurance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we accept most private insurance plans that cover psychological services and respite care. 
                    We provide detailed receipts for submission to your insurance provider. We recommend confirming 
                    coverage with your insurer before beginning services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="government-funding" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What about government funding (FSCD, PDD)?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We are an approved service provider for Family Support for Children with Disabilities (FSCD) and 
                    Persons with Developmental Disabilities (PDD) programs. We can help you navigate the application 
                    process and coordinate funding for eligible services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-options" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What payment options do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept payment via credit card, debit, e-transfer, and direct billing to approved funding programs. 
                    Payment plans are available for families paying privately. We're committed to making our services 
                    accessible regardless of funding source.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Staff & Safety */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Staff & Safety</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="staff-qualifications" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What are your staff qualifications?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our team includes registered psychologists, licensed social workers, disability support workers, 
                    and specialized caregivers. All staff maintain current professional certifications, complete ongoing 
                    training in best practices, and hold First Aid/CPR certification.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="background-checks" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Are staff background checked?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. All staff undergo comprehensive criminal record checks including vulnerable sector screening 
                    prior to working with families. Background checks are renewed every three years, and we verify all 
                    professional credentials and references.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="safety-protocols" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What safety protocols do you have in place?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We maintain comprehensive safety protocols including individualized behaviour support plans, emergency 
                    response procedures, medication administration protocols, incident reporting systems, and regular safety 
                    audits. We follow all Alberta Health Services standards and professional practice guidelines.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Booking & Cancellation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Booking & Cancellation</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="how-book" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    How do I book services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Contact us by phone, email, or through our website to schedule an initial consultation. For respite care, 
                    we recommend booking at least one week in advance. Assessment appointments are typically available within 
                    2-4 weeks, though urgent requests may be accommodated sooner.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cancellation-policy" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What's your cancellation policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be 
                    subject to a cancellation fee. We understand emergencies happen and will work with families on a 
                    case-by-case basis. Emergency support requests can be accommodated with shorter notice when available.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="emergency-support" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Do you provide emergency support?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer 24/7 emergency respite support based on availability. For crisis situations, we can often 
                    arrange same-day or next-day services. Please call our main line and select the emergency support option 
                    to reach our on-call coordinator.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Location & Hours */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Location & Hours</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="location" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Where are you located?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our main office is located in Edmonton, Alberta. Assessments are conducted at our comfortable, 
                    child-friendly clinic space. We also provide in-home services throughout the greater Edmonton area 
                    and surrounding communities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hours" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What are your hours of operation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our office hours are Monday to Friday, 8:00 AM to 6:00 PM, with evening and weekend appointments 
                    available by request. Respite care services are available 24/7, and we maintain an on-call system 
                    for emergency support outside regular business hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="in-home" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Do you offer in-home services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we provide in-home respite care, family consultations, and some assessment components in your home. 
                    In-home services allow us to observe your child in their natural environment and provide support in a 
                    familiar, comfortable setting.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQ;
