import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { FileText } from "lucide-react";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Terms of Service for Aiyana Services. Review our service agreements, policies, and terms governing the use of our healthcare services in Edmonton, Alberta.');
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Service Agreement</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please review these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <p className="text-muted-foreground text-base mb-8">
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <div className="space-y-12 text-foreground">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you (the "Client," "you," 
                  or "your") and Aiyana Services Inc. ("Aiyana Services," "we," "us," or "our") regarding your use of our 
                  healthcare services. By engaging our services, you acknowledge that you have read, understood, and agree 
                  to be bound by these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you are a parent or legal guardian engaging services on behalf of a minor or individual under your care, 
                  you represent that you have the legal authority to enter into this agreement on their behalf.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aiyana Services provides integrated healthcare and support services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Respite care services for children and youth with special needs</li>
                  <li>Psychological assessments and evaluations (ADHD, autism, developmental disabilities)</li>
                  <li>Addiction support and dual diagnosis care coordination</li>
                  <li>Family support and consultation services</li>
                  <li>Professional development and training</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All services are provided in accordance with professional standards, regulatory requirements, and 
                  best practices for healthcare delivery in Alberta.
                </p>
              </div>

              {/* Professional Relationship */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Nature of Professional Relationship</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Professional Services:</strong> Our relationship with you is strictly professional. Services 
                  are provided by qualified, registered professionals in accordance with their professional standards 
                  and codes of ethics.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Not Emergency Services:</strong> Aiyana Services does not provide emergency medical or crisis 
                  intervention services. In case of emergency, please call 911 or proceed to the nearest emergency department. 
                  For mental health crises, contact the Mental Health Help Line at 1-877-303-2642.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Scope of Practice:</strong> Our professionals practice within their defined scope of practice 
                  and competence. We will refer you to other appropriate professionals when services fall outside our 
                  expertise or scope.
                </p>
              </div>

              {/* Client Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate, complete, and current information about your health history and circumstances</li>
                  <li>Attend scheduled appointments or provide adequate notice of cancellation</li>
                  <li>Follow agreed-upon care plans and recommendations</li>
                  <li>Inform us of any changes in circumstances, health status, or contact information</li>
                  <li>Treat our staff with respect and maintain appropriate boundaries</li>
                  <li>Ensure a safe environment for in-home services</li>
                  <li>Make timely payments for services as agreed</li>
                  <li>Review and sign required consent forms and documentation</li>
                </ul>
              </div>

              {/* Booking and Cancellation */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Booking, Cancellation, and No-Show Policy</h2>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">Booking Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Services may be booked by phone, email, or through our website. We will confirm all appointments in 
                  writing and may send reminder notifications. Appointment availability is subject to staff scheduling 
                  and capacity.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Cancellation Policy</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We understand that circumstances change. However, late cancellations affect our ability to serve other 
                  families:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Notice Required:</strong> Minimum 24 hours notice for cancellations or rescheduling</li>
                  <li><strong>Late Cancellation Fee:</strong> Cancellations with less than 24 hours notice may be charged 
                  50% of the scheduled service fee</li>
                  <li><strong>No-Show Fee:</strong> Failure to attend without notice may result in a full service charge</li>
                  <li><strong>Emergency Exception:</strong> We understand emergencies happen and will work with families 
                  on a case-by-case basis</li>
                  <li><strong>Repeated Cancellations:</strong> Chronic late cancellations may result in service restrictions 
                  or termination</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Our Cancellation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We will provide as much notice as possible if we need to cancel or reschedule an appointment due to 
                  staff illness, emergency, or other unforeseen circumstances. No fees will be charged for appointments 
                  we cancel.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Payment Terms and Billing</h2>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">Service Fees</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Current service rates are available upon request and will be clearly communicated before services begin. 
                  Fees are subject to change with 30 days written notice to existing clients.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We accept the following payment methods:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Credit card and debit card</li>
                  <li>Electronic funds transfer (e-transfer)</li>
                  <li>Direct billing to approved funding programs (FSCD, PDD)</li>
                  <li>Insurance claims submission</li>
                  <li>Payment plans (by arrangement)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Insurance and Funding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We will assist with insurance claims and funding applications, but you remain responsible for payment 
                  if insurance or funding is denied. You are responsible for understanding your coverage and ensuring 
                  services are covered before beginning.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Overdue Accounts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Payment is due within 30 days of invoice date. Overdue accounts may be subject to late fees, service 
                  suspension, and referral to collection agencies. You will be responsible for all collection costs.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Confidentiality and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain strict confidentiality in accordance with professional standards and privacy legislation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All personal and health information is kept confidential</li>
                  <li>Information is shared only with your consent, except as required by law</li>
                  <li>Our detailed Privacy Policy outlines how we handle your information</li>
                  <li>Staff are bound by confidentiality agreements and professional codes of ethics</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Limits to Confidentiality:</strong> We may breach confidentiality without consent when required 
                  by law, including: suspected child abuse or neglect, risk of serious harm to self or others, court orders, 
                  or regulatory investigations.
                </p>
              </div>

              {/* Records */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Records and Documentation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain comprehensive clinical and administrative records in accordance with professional standards 
                  and legal requirements. Records are typically retained for a minimum of 10 years following the last 
                  service date. You have the right to access your records as outlined in our Privacy Policy, subject to 
                  certain limitations prescribed by law.
                </p>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Liability and Disclaimers</h2>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">Professional Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our professionals maintain appropriate professional liability insurance and practice in accordance with 
                  professional standards. We strive to provide high-quality services but cannot guarantee specific outcomes.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Aiyana Services shall not be liable for indirect, incidental, 
                  special, or consequential damages arising from services provided. Our total liability shall not exceed 
                  the amount paid for the specific services in question.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Third-Party Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may refer you to or coordinate with other professionals and service providers. We are not responsible 
                  for services provided by third parties.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Termination of Services</h2>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">Your Right to Terminate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may terminate services at any time with written notice. You remain responsible for payment of 
                  services provided up to the termination date.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Our Right to Terminate</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to terminate services in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Non-payment of fees</li>
                  <li>Failure to comply with agreed-upon care plans</li>
                  <li>Threatening, abusive, or inappropriate behaviour toward staff</li>
                  <li>Services fall outside our scope of practice or expertise</li>
                  <li>Conflict of interest or ethical concerns</li>
                  <li>Breakdown in the therapeutic relationship</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We will provide appropriate notice and referrals to alternative service providers when terminating 
                  services, except in cases of safety concerns or abusive behaviour.
                </p>
              </div>

              {/* Complaints */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Complaints and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are committed to addressing concerns and resolving disputes fairly:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Internal Process:</strong> Please first discuss concerns with your service provider or contact 
                  our Client Services Manager</li>
                  <li><strong>Formal Complaint:</strong> Written complaints can be submitted to management for investigation</li>
                  <li><strong>Professional Colleges:</strong> You may file complaints with relevant professional regulatory 
                  bodies (College of Alberta Psychologists, Alberta College of Social Workers, etc.)</li>
                  <li><strong>Alternative Dispute Resolution:</strong> We encourage mediation or arbitration for disputes 
                  that cannot be resolved internally</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable 
                  therein. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction 
                  of the courts of Alberta.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Changes to Terms of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms periodically to reflect changes in our practices, legal requirements, or service 
                  offerings. Material changes will be communicated through our website or direct notification to clients. 
                  Continued use of services following changes constitutes acceptance of updated Terms.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited 
                  or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force 
                  and effect.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-xl p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have questions about these Terms of Service or need clarification about any aspect of our 
                  service agreement, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Aiyana Services Inc.</strong></p>
                  <p>Edmonton, Alberta</p>
                  <p>Phone: (780) 229-4466</p>
                  <p>Email: info@aiyanaservices.com</p>
                </div>
              </div>

              {/* Acknowledgement */}
              <div className="bg-muted/30 border border-border rounded-xl p-8 mt-8">
                <h2 className="text-3xl font-bold mb-4">Acknowledgement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms of Service. At the commencement of services, we will ask you to sign documentation confirming 
                  your agreement to these Terms along with service-specific consent forms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default TermsOfService;
