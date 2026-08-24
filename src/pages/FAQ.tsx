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
import { useSeo } from "@/hooks/useSeo";

const faqCategories = [
  {
    category: "General Questions",
    items: [
      {
        value: "what-services",
        question: "What services does Aiyana Services offer?",
        answer:
          "In-home respite and community supports for children, youth, and adults with complex needs, funded through FSCD and PDD. We also help families understand what their funding covers and complete the paperwork that goes with it.",
      },
      {
        value: "who-serve",
        question: "Who do you serve?",
        answer:
          "Families across Edmonton and the surrounding area who are caring for a child, youth, or adult with a developmental disability or other complex support needs. Many of the families we serve are newcomers, and we support them in Somali, Kiswahili, and English.",
      },
      {
        value: "get-started",
        question: "How do I get started?",
        answer:
          "Call (780) 851-9334 or email info@aiyanaservices.com. We talk through what you need, confirm what your funding covers, and complete the intake with you before the first visit is scheduled.",
      },
    ],
  },
  {
    category: "Respite Care",
    items: [
      {
        value: "what-respite",
        question: "What is respite care?",
        answer:
          "Respite gives the primary caregiver a break while a trained support worker stays with your family member. It can be in the home or out in the community, and it is built around your routine rather than a fixed timetable.",
      },
      {
        value: "respite-duration",
        question: "How long can I book respite care for?",
        answer:
          "Visits run in blocks that suit your household, subject to a three hour minimum. How many hours you can use each month depends on what your funding approval allows, and we go through that with you at intake.",
      },
      {
        value: "caregiver-qualifications",
        question: "What qualifications do your support workers have?",
        answer:
          "Every worker holds standard first aid with CPR level C from an Alberta approved agency, a clear police check with a vulnerable sector search, and completes our orientation and safety training before a first visit. Our workers are support workers, not licensed health practitioners: they do not administer medication, perform nursing tasks, or provide clinical treatment.",
      },
    ],
  },
  {
    category: "Funding and Payment",
    items: [
      {
        value: "government-funding",
        question: "What about government funding (FSCD, PDD)?",
        answer:
          "Most of the families we work with use Family Support for Children with Disabilities (FSCD) or Persons with Developmental Disabilities (PDD) funding. We help you understand what your approval covers, complete the paperwork, and stay in contact with your case worker so services can start.",
      },
      {
        value: "private-pay",
        question: "What if I am not funded?",
        answer:
          "Talk to us anyway. We will tell you plainly whether you are likely to qualify for funding and help you apply, and if you are paying privately we will give you a written rate and a detailed receipt for every visit.",
      },
    ],
  },
  {
    category: "Staff and Safety",
    items: [
      {
        value: "background-checks",
        question: "Are staff background checked?",
        answer:
          "Yes. Every worker completes a police check with a vulnerable sector search before a first shift, with no exceptions and no provisional starts. Checks are tracked and renewed, and a worker whose check is not current does not go into a home.",
      },
      {
        value: "safety-protocols",
        question: "What safety protocols do you have in place?",
        answer:
          "Every client has a written care plan the worker reads and signs. Workers check in and out of every visit, record what was done, and report any change in condition or any incident the same day. Personal information is handled under Alberta's Personal Information Protection Act and is shared only with the people who need it.",
      },
    ],
  },
  {
    category: "Booking and Cancellation",
    items: [
      {
        value: "how-to-book",
        question: "How do I book services?",
        answer:
          "Call or email us and we will schedule from your approved hours. Once you are set up, ongoing visits are booked directly with our coordinator.",
      },
      {
        value: "cancellation",
        question: "What is your cancellation policy?",
        answer:
          "Every family signs a written cancellation policy before service starts. In short: twenty four hours notice costs nothing, and a cancellation inside that window or a worker turned away at the door may be charged, because the worker is still paid for the shift. Illness, hospital admission, and emergencies are never charged.",
      },
      {
        value: "short-notice",
        question: "Do you take short notice requests?",
        answer:
          "We do, and we fill them whenever a worker is available. We are not a crisis service and we do not run a twenty four hour emergency line. If someone is in immediate danger, call 911.",
      },
    ],
  },
  {
    category: "Location and Hours",
    items: [
      {
        value: "location",
        question: "Where are you located?",
        answer:
          "Our office is at 12315 Stony Plain Rd #101, Edmonton, AB T5N 3Y8. Services are delivered in your home and in the community, across the greater Edmonton area.",
      },
      {
        value: "hours",
        question: "What are your hours of operation?",
        answer:
          "The office is open Monday to Friday, 8:00 AM to 6:00 PM, and Saturday, 9:00 AM to 4:00 PM. Visits outside those hours, including evenings and weekends, are arranged in advance where a worker is available.",
      },
      {
        value: "in-home",
        question: "Do you offer in-home services?",
        answer:
          "Yes. Respite and personal care are delivered in the client's own home, and community access supports take place wherever the person wants to go.",
      },
    ],
  },
];

// FAQ data for JSON-LD schema
const faqData = faqCategories.flatMap((category) =>
  category.items.map(({ question, answer }) => ({ question, answer }))
);

const FAQ = () => {
  useSeo({
    title: "FAQ | Aiyana Services Edmonton",
    description:
      "Answers about in-home respite, community supports, FSCD and PDD funding, staff screening, and booking in Edmonton.",
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
            {faqCategories.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item) => (
                    <AccordionItem
                      key={item.value}
                      value={item.value}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQ;
