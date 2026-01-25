import { useEffect } from "react";
import logo from "@/assets/ayana-logo.png";
import { Heart, Clock, Users, Brain, Activity, Shield, Phone, Mail, MapPin } from "lucide-react";

const Brochure = () => {
  useEffect(() => {
    document.title = "Aiyana Services - Professional Brochure";
    
    // Prevent search engine indexing
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <>
      <style>{`
        @media print {
          /* Critical: Remove browser headers/footers */
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
          
          /* Hide browser-generated headers and footers */
          body::before,
          body::after,
          header::before,
          header::after {
            display: none !important;
            content: none !important;
          }
          
          /* Remove link URLs from printing */
          a[href]::after {
            content: none !important;
            display: none !important;
          }
          
          /* Add our own margins to content */
          .brochure-container {
            margin: 0.5in !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          
          /* Page break handling */
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
          
          /* Force "Why Choose" section to new page */
          .why-choose-section {
            page-break-before: always !important;
            break-before: page !important;
            margin-top: 0.5in !important;
          }
          
          .service-card {
            page-break-inside: avoid;
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          /* Compact spacing for print */
          .mb-8 { margin-bottom: 12pt !important; }
          .mb-6 { margin-bottom: 10pt !important; }
          .pb-6 { padding-bottom: 8pt !important; }
          .gap-6 { gap: 10pt !important; }
          .gap-4 { gap: 8pt !important; }
          .p-6 { padding: 12pt !important; }
          .p-4 { padding: 10pt !important; }
          .h-20 { height: 56px !important; }
          .text-4xl { font-size: 26pt !important; line-height: 1.2 !important; }
          .text-3xl { font-size: 18pt !important; line-height: 1.3 !important; }
          .text-2xl { font-size: 16pt !important; }
          .text-xl { font-size: 13pt !important; }
        }
        
        @media screen {
          .brochure-container {
            max-width: 8.5in;
            min-height: 11in;
            margin: 2rem auto;
            background: white;
            box-shadow: 0 0 40px rgba(0,0,0,0.1);
            padding: 0.75in;
          }
          
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
        
        /* Logo styling to hide white border */
        .brochure-logo {
          mix-blend-mode: multiply;
          background: transparent;
        }
      `}</style>

      <div className="print-hint">
        <div className="font-bold mb-2">Print Instructions:</div>
        <div className="text-sm space-y-1">
          <div>1. Press Ctrl/Cmd + P</div>
          <div>2. In print dialog, turn OFF "Headers and Footers"</div>
          <div>3. Set margins to "None" or "Minimum"</div>
          <div>4. Save as PDF or Print</div>
        </div>
      </div>

      <div className="brochure-container">
        {/* Header */}
        <header className="brochure-section text-center mb-8 pb-6 border-b-2" style={{ borderColor: 'hsl(168 52% 42%)' }}>
          <img 
            src={logo} 
            alt="Aiyana Services" 
            className="h-20 mx-auto mb-4 brochure-logo"
          />
          <p className="text-xl" style={{ color: 'hsl(215 25% 27%)' }}>
            Compassionate, Integrated Care for Youth, Adults & Families in Edmonton
          </p>
        </header>

        {/* Mission Statement */}
        <section className="brochure-section mb-8">
          <div className="bg-gradient-to-r p-6 rounded-lg" style={{ 
            background: 'linear-gradient(135deg, hsl(168 52% 95%), hsl(15 58% 95%))',
            border: '2px solid hsl(168 52% 42%)'
          }}>
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2" style={{ color: 'hsl(168 52% 42%)' }}>
              <Heart className="h-6 w-6" />
              Our Mission
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'hsl(215 25% 27%)' }}>
              At Aiyana Services, we provide comprehensive, person-centered care for youth and adults with developmental 
              challenges, ADHD, Autism, and addiction concerns. Our integrated approach combines respite care, 
              professional assessments, and ongoing support to help individuals and families thrive. Located in Edmonton, we serve 
              youth, adults, and families with compassion, evidence-based practices, and personalized care plans.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="brochure-section mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'hsl(168 52% 42%)' }}>
            Our Services
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Respite Care */}
            <div className="service-card p-4 rounded-lg border-2" style={{ borderColor: 'hsl(168 52% 42%)', background: 'hsl(0 0% 99%)' }}>
              <div className="flex items-start gap-3 mb-2">
                <Clock className="h-8 w-8 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'hsl(215 25% 27%)' }}>
                    Respite Care
                  </h3>
                  <p className="text-sm leading-snug" style={{ color: 'hsl(215 15% 45%)' }}>
                    Flexible, compassionate breaks for caregivers. Our trained professionals provide 
                    safe, engaging care for youth and adults with complex needs, giving families time to recharge.
                  </p>
                </div>
              </div>
            </div>

            {/* ADHD Assessment */}
            <div className="service-card p-4 rounded-lg border-2" style={{ borderColor: 'hsl(168 52% 42%)', background: 'hsl(0 0% 99%)' }}>
              <div className="flex items-start gap-3 mb-2">
                <Brain className="h-8 w-8 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'hsl(215 25% 27%)' }}>
                    ADHD Assessment
                  </h3>
                  <p className="text-sm leading-snug" style={{ color: 'hsl(215 15% 45%)' }}>
                    Comprehensive evaluations using evidence-based tools. We assess attention, 
                    hyperactivity, and executive function to guide effective treatment strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Autism Evaluation */}
            <div className="service-card p-4 rounded-lg border-2" style={{ borderColor: 'hsl(168 52% 42%)', background: 'hsl(0 0% 99%)' }}>
              <div className="flex items-start gap-3 mb-2">
                <Users className="h-8 w-8 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'hsl(215 25% 27%)' }}>
                    Autism Evaluation
                  </h3>
                  <p className="text-sm leading-snug" style={{ color: 'hsl(215 15% 45%)' }}>
                    Thorough autism spectrum assessments using gold-standard diagnostic tools. 
                    We provide clear reports and recommendations for support and intervention.
                  </p>
                </div>
              </div>
            </div>

            {/* Addiction Support */}
            <div className="service-card p-4 rounded-lg border-2" style={{ borderColor: 'hsl(168 52% 42%)', background: 'hsl(0 0% 99%)' }}>
              <div className="flex items-start gap-3 mb-2">
                <Activity className="h-8 w-8 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'hsl(215 25% 27%)' }}>
                    Addiction Support
                  </h3>
                  <p className="text-sm leading-snug" style={{ color: 'hsl(215 15% 45%)' }}>
                    Specialized care for youth struggling with substance use. Family-focused 
                    interventions, counseling, and coordinated treatment planning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Diagnosis - Full Width */}
          <div className="service-card p-4 rounded-lg border-2" style={{ borderColor: 'hsl(168 52% 42%)', background: 'hsl(0 0% 99%)' }}>
            <div className="flex items-start gap-3">
              <Shield className="h-8 w-8 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: 'hsl(215 25% 27%)' }}>
                  Dual Diagnosis Support
                </h3>
                <p className="text-sm leading-snug" style={{ color: 'hsl(215 15% 45%)' }}>
                  Integrated care for youth and adults with both developmental challenges and mental health or addiction 
                  concerns. Our holistic approach addresses multiple needs simultaneously for better outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="brochure-section why-choose-section mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'hsl(168 52% 42%)' }}>
            Why Choose Aiyana Services?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(168 52% 42%)' }}></div>
                <p className="text-sm" style={{ color: 'hsl(215 25% 27%)' }}>
                  <strong>Integrated Care:</strong> All services under one roof for seamless coordination
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(168 52% 42%)' }}></div>
                <p className="text-sm" style={{ color: 'hsl(215 25% 27%)' }}>
                  <strong>Qualified Team:</strong> Licensed professionals with specialized training
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(168 52% 42%)' }}></div>
                <p className="text-sm" style={{ color: 'hsl(215 25% 27%)' }}>
                  <strong>Family-Centered:</strong> We involve families in every step of care
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(168 52% 42%)' }}></div>
                <p className="text-sm" style={{ color: 'hsl(215 25% 27%)' }}>
                  <strong>Evidence-Based:</strong> Latest research guides our practices
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(168 52% 42%)' }}></div>
                <p className="text-sm" style={{ color: 'hsl(215 25% 27%)' }}>
                  <strong>Flexible Options:</strong> Services tailored to your family's needs
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(168 52% 42%)' }}></div>
                <p className="text-sm" style={{ color: 'hsl(215 25% 27%)' }}>
                  <strong>Local Expertise:</strong> Deep understanding of Edmonton resources
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="brochure-section mt-8 pt-6 border-t-2" style={{ borderColor: 'hsl(168 52% 42%)' }}>
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'hsl(168 52% 42%)' }}>
            Get Started Today
          </h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2" style={{ color: 'hsl(168 52% 42%)' }} />
              <h3 className="font-bold text-sm mb-1" style={{ color: 'hsl(215 25% 27%)' }}>Phone</h3>
              <p className="text-sm" style={{ color: 'hsl(215 15% 45%)' }}>(780) 229-4466</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-2" style={{ color: 'hsl(168 52% 42%)' }} />
              <h3 className="font-bold text-sm mb-1" style={{ color: 'hsl(215 25% 27%)' }}>Email</h3>
              <p className="text-sm" style={{ color: 'hsl(215 15% 45%)' }}>info@aiyanaservices.com</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-2" style={{ color: 'hsl(168 52% 42%)' }} />
              <h3 className="font-bold text-sm mb-1" style={{ color: 'hsl(215 25% 27%)' }}>Location</h3>
              <p className="text-sm" style={{ color: 'hsl(215 15% 45%)' }}>Edmonton, Alberta</p>
            </div>
          </div>
          
          <div className="mt-6 text-center p-4 rounded-lg" style={{ background: 'hsl(168 52% 95%)' }}>
            <p className="text-sm font-semibold" style={{ color: 'hsl(215 25% 27%)' }}>
              Office Hours: Monday - Friday, 8:00 AM - 6:00 PM | Saturday, 9:00 AM - 3:00 PM
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="brochure-section mt-8 text-center text-xs" style={{ color: 'hsl(215 15% 45%)' }}>
          <p>© 2025 Aiyana Services. All rights reserved. | Serving families across Edmonton and surrounding areas.</p>
        </footer>
      </div>
    </>
  );
};

export default Brochure;