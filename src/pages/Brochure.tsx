import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import {
  Heart,
  Users,
  Home,
  Handshake,
  Search,
  GraduationCap,
  PlayCircle,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Brochure = () => {
  useEffect(() => {
    document.title = "Respite Care Brochure - Aiyana Services";

    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <>
      <style>{`
        @media print {
          @page {
            margin: 0;
            size: letter;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          body::before,
          body::after,
          header::before,
          header::after {
            display: none !important;
            content: none !important;
          }

          a[href]::after {
            content: none !important;
            display: none !important;
          }

          .site-header,
          .site-footer,
          .print-hint,
          .scroll-progress,
          .back-to-top {
            display: none !important;
          }

          .brochure-content {
            margin: 0.5in !important;
            padding: 0 !important;
          }

          .brochure-section {
            page-break-inside: auto;
            break-inside: auto;
          }

          .brochure-section h1,
          .brochure-section h2,
          .brochure-section h3 {
            page-break-after: avoid;
            break-after: avoid;
          }

          .brochure-card {
            page-break-inside: avoid;
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }

          .cultural-section {
            page-break-before: always !important;
            break-before: page !important;
          }

          .mb-8 { margin-bottom: 12pt !important; }
          .mb-6 { margin-bottom: 10pt !important; }
          .pb-6 { padding-bottom: 8pt !important; }
          .gap-8 { gap: 12pt !important; }
          .gap-6 { gap: 10pt !important; }
          .gap-4 { gap: 8pt !important; }
          .p-8 { padding: 14pt !important; }
          .p-6 { padding: 12pt !important; }
          .p-4 { padding: 10pt !important; }
          .py-20 { padding-top: 16pt !important; padding-bottom: 16pt !important; }
          .py-16 { padding-top: 14pt !important; padding-bottom: 14pt !important; }
          .text-5xl { font-size: 28pt !important; line-height: 1.1 !important; }
          .text-4xl { font-size: 22pt !important; line-height: 1.2 !important; }
          .text-3xl { font-size: 18pt !important; line-height: 1.3 !important; }
          .text-2xl { font-size: 16pt !important; }
          .text-xl { font-size: 13pt !important; }
          .text-lg { font-size: 11pt !important; }
        }

        @media screen {
          .print-hint {
            position: fixed;
            top: 20px;
            right: 20px;
            background: hsl(168 52% 42%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-weight: 600;
            z-index: 1000;
          }
        }

        @media print {
          .print-hint {
            display: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen">
        <div className="scroll-progress">
          <ScrollProgress />
        </div>
        <div className="site-header">
          <Header />
        </div>

        <div className="print-hint">
          <div className="font-bold mb-2">Print Instructions:</div>
          <div className="text-sm space-y-1">
            <div>1. Press Ctrl/Cmd + P</div>
            <div>2. Turn OFF "Headers and Footers"</div>
            <div>3. Set margins to "None" or "Minimum"</div>
            <div>4. Save as PDF or Print</div>
          </div>
          <a
            href="/Aiyana-Services-Respite-Brochure.pdf"
            download
            className="inline-block mt-3 text-sm font-semibold underline"
            style={{ color: "white" }}
          >
            Or download the PDF directly →
          </a>
        </div>

        <main className="brochure-content">
          {/* HERO SECTION */}
          <section
            className="brochure-section py-20"
            style={{
              background:
                "linear-gradient(135deg, hsl(168 52% 95%), hsl(168 52% 88%), hsl(15 58% 95%))",
            }}
          >
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "hsl(215 25% 27%)" }}
              >
                Your Circle, Your Care, Your Home
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 leading-relaxed"
                style={{ color: "hsl(215 15% 45%)" }}
              >
                A Respite Program Built Around the People Who Already Know and
                Love Your Family
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6"
                    style={{
                      background: "hsl(168 52% 42%)",
                      color: "white",
                    }}
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href="/Aiyana-Services-Respite-Brochure.pdf"
                  download
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6"
                    style={{
                      background: "white",
                      color: "hsl(168 52% 42%)",
                      border: "2px solid hsl(168 52% 42%)",
                    }}
                  >
                    Download Brochure (PDF)
                    <Download className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 1 - THE PROBLEM AND SOLUTION */}
          <section className="brochure-section py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "hsl(168 52% 42%)" }}
              >
                Respite That Respects Your World
              </h2>
              <div
                className="text-lg leading-relaxed space-y-4"
                style={{ color: "hsl(215 25% 27%)" }}
              >
                <p>
                  Most families we talk to say the same thing — they have
                  respite funding, but they can't bring themselves to use it
                  because they don't want a stranger in their home. That's the
                  gap Aiyana Services was built to fill.
                </p>
                <p>
                  Instead of sending someone your family has never met, we ask a
                  simple question:{" "}
                  <strong>
                    Who in your life already knows and loves your family member?
                  </strong>
                </p>
                <p>
                  We hire that person — whether it's a sister, a neighbor, a
                  longtime friend, or a trusted community member — and we train
                  and support them to provide professional respite care that
                  meets all Alberta Health Standards.
                </p>
                <p>
                  The result? Families actually use the respite they're funded
                  for. Their loved one receives care from someone they trust. And
                  we help prevent the crisis that leads to institutional
                  placement.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 - HOW IT WORKS */}
          <section
            className="brochure-section py-16"
            style={{ background: "hsl(168 52% 97%)" }}
          >
            <div className="container mx-auto px-4 max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-bold mb-10 text-center"
                style={{ color: "hsl(168 52% 42%)" }}
              >
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div
                  className="brochure-card rounded-xl p-8 text-center"
                  style={{
                    background: "white",
                    border: "2px solid hsl(168 52% 82%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "hsl(168 52% 90%)" }}
                  >
                    <Search
                      className="h-8 w-8"
                      style={{ color: "hsl(168 52% 35%)" }}
                    />
                  </div>
                  <div
                    className="text-sm font-bold uppercase tracking-wide mb-2"
                    style={{ color: "hsl(168 52% 42%)" }}
                  >
                    Step 1
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    You Identify
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    Tell us who in your community you already trust to care for
                    your family member. A relative, a friend, a neighbor —
                    someone who already knows your loved one's routines,
                    preferences, and personality.
                  </p>
                </div>

                {/* Step 2 */}
                <div
                  className="brochure-card rounded-xl p-8 text-center"
                  style={{
                    background: "white",
                    border: "2px solid hsl(168 52% 82%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "hsl(168 52% 90%)" }}
                  >
                    <GraduationCap
                      className="h-8 w-8"
                      style={{ color: "hsl(168 52% 35%)" }}
                    />
                  </div>
                  <div
                    className="text-sm font-bold uppercase tracking-wide mb-2"
                    style={{ color: "hsl(168 52% 42%)" }}
                  >
                    Step 2
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    We Hire and Train
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    We bring your chosen caregiver on board and provide full,
                    personalized training that meets Alberta Health Services
                    requirements — person-specific disability support, emergency
                    response, cultural competency, and ongoing mentorship.
                  </p>
                </div>

                {/* Step 3 */}
                <div
                  className="brochure-card rounded-xl p-8 text-center"
                  style={{
                    background: "white",
                    border: "2px solid hsl(168 52% 82%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "hsl(168 52% 90%)" }}
                  >
                    <PlayCircle
                      className="h-8 w-8"
                      style={{ color: "hsl(168 52% 35%)" }}
                    />
                  </div>
                  <div
                    className="text-sm font-bold uppercase tracking-wide mb-2"
                    style={{ color: "hsl(168 52% 42%)" }}
                  >
                    Step 3
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    Support Begins
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    Your caregiver delivers respite care in your home, backed by
                    our full agency support — 24/7 backup, regular quality
                    check-ins, continuous skill development, and complete
                    liability coverage and payroll administration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 - WHY FAMILIES CHOOSE US */}
          <section className="brochure-section py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2
                className="text-3xl md:text-4xl font-bold mb-10 text-center"
                style={{ color: "hsl(168 52% 42%)" }}
              >
                Why Families Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div
                  className="brochure-card rounded-xl p-8"
                  style={{
                    background: "hsl(0 0% 99%)",
                    border: "2px solid hsl(168 52% 85%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <Heart
                    className="h-10 w-10 mb-4"
                    style={{ color: "hsl(168 52% 42%)" }}
                  />
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    Familiar Faces, Better Care
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    Care from someone who already understands your loved one's
                    communication style, daily routines, preferences, and
                    cultural background. No adjustment period. No strangers
                    learning on the job.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className="brochure-card rounded-xl p-8"
                  style={{
                    background: "hsl(0 0% 99%)",
                    border: "2px solid hsl(168 52% 85%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <Users
                    className="h-10 w-10 mb-4"
                    style={{ color: "hsl(168 52% 42%)" }}
                  />
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    You Stay in Control
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    You choose who enters your home. We provide the training,
                    certification, and supervision to make sure they meet every
                    health and safety requirement.
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  className="brochure-card rounded-xl p-8"
                  style={{
                    background: "hsl(0 0% 99%)",
                    border: "2px solid hsl(168 52% 85%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <Home
                    className="h-10 w-10 mb-4"
                    style={{ color: "hsl(168 52% 42%)" }}
                  />
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    Home is Where Care Belongs
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    Respite delivered in the comfort of your own home —
                    supporting your family's choice to stay together in the
                    community rather than transitioning to institutional care.
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  className="brochure-card rounded-xl p-8"
                  style={{
                    background: "hsl(0 0% 99%)",
                    border: "2px solid hsl(168 52% 85%)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <Handshake
                    className="h-10 w-10 mb-4"
                    style={{ color: "hsl(168 52% 42%)" }}
                  />
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(215 25% 27%)" }}
                  >
                    Stronger Community Networks
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 15% 45%)" }}
                  >
                    We create real employment opportunities within the
                    communities we serve, strengthening the natural support
                    systems that families already rely on.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 - CULTURAL CONNECTION */}
          <section
            className="brochure-section cultural-section py-16"
            style={{
              background:
                "linear-gradient(135deg, hsl(15 58% 95%), hsl(168 52% 92%), hsl(15 58% 92%))",
            }}
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe
                  className="h-10 w-10 flex-shrink-0"
                  style={{ color: "hsl(168 52% 35%)" }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(168 52% 35%)" }}
                >
                  Care That Honors Who You Are
                </h2>
              </div>
              <div
                className="text-lg leading-relaxed space-y-4"
                style={{ color: "hsl(215 25% 27%)" }}
              >
                <p>
                  Many families tell us their biggest frustration isn't finding
                  respite — it's finding someone who understands their language,
                  their food, their traditions, their faith. Aiyana Services was
                  built with this in mind.
                </p>
                <p>
                  We hire caregivers from within the family's own community —
                  people who already share their language, their culture, their
                  values. We handle the training and regulatory compliance. The
                  cultural connection is already there.
                </p>
                <p className="font-semibold" style={{ color: "hsl(168 52% 35%)" }}>
                  This is care that respects who you are, delivered by someone
                  who already understands your world.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 - WHO WE SERVE */}
          <section className="brochure-section py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ color: "hsl(168 52% 42%)" }}
              >
                Families We Support
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Developmental Disabilities",
                  "Autism Spectrum Disorder",
                  "Complex Behavioural Needs",
                  "Dual Diagnoses",
                  "Developmental Delays",
                ].map((item) => (
                  <span
                    key={item}
                    className="brochure-card inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold"
                    style={{
                      background: "hsl(168 52% 92%)",
                      color: "hsl(168 52% 30%)",
                      border: "2px solid hsl(168 52% 78%)",
                    }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6 - COMPLIANCE */}
          <section
            className="brochure-section py-16"
            style={{ background: "hsl(215 25% 97%)" }}
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield
                  className="h-10 w-10 flex-shrink-0"
                  style={{ color: "hsl(168 52% 42%)" }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(215 25% 27%)" }}
                >
                  Fully Compliant with Alberta Health Standards
                </h2>
              </div>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: "hsl(215 25% 27%)" }}
              >
                Every caregiver we train meets the same standards required across
                the province. Our training and supervision align with:
              </p>
              <ul className="space-y-3">
                {[
                  "Health Information Act (HIA)",
                  "Protection for Persons in Care Act",
                  "Alberta Health Act standards",
                  "Emergency First Aid and CPR certification",
                  "Alberta Health Services compliance protocols",
                ].map((standard) => (
                  <li key={standard} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: "hsl(168 52% 42%)" }}
                    />
                    <span
                      className="text-base font-medium"
                      style={{ color: "hsl(215 25% 30%)" }}
                    >
                      {standard}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECTION 7 - CONTACT CTA */}
          <section
            className="brochure-section py-16"
            style={{
              background:
                "linear-gradient(135deg, hsl(168 52% 42%), hsl(168 52% 32%))",
            }}
          >
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Ready to Build Your Care Team?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-white text-center">
                  <Phone className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <h3 className="font-bold text-sm mb-1 opacity-90">Phone</h3>
                  <p className="text-sm opacity-80">(780) 851-9334</p>
                </div>
                <div className="text-white text-center">
                  <Mail className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <h3 className="font-bold text-sm mb-1 opacity-90">Email</h3>
                  <p className="text-sm opacity-80">info@aiyanaservices.com</p>
                </div>
                <div className="text-white text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <h3 className="font-bold text-sm mb-1 opacity-90">
                    Location
                  </h3>
                  <p className="text-sm opacity-80">Edmonton, Alberta</p>
                </div>
                <div className="text-white text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <h3 className="font-bold text-sm mb-1 opacity-90">Hours</h3>
                  <p className="text-sm opacity-80">
                    Mon–Fri 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-sm opacity-80">Sat 9:00 AM – 3:00 PM</p>
                </div>
              </div>
              <p className="text-white opacity-80 mb-8 text-sm">
                Serving families across Edmonton and surrounding areas.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 font-bold"
                  style={{
                    background: "white",
                    color: "hsl(168 52% 35%)",
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <div className="site-footer">
          <Footer />
        </div>
        <div className="back-to-top">
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default Brochure;
