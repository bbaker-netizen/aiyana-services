import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Shield } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Aiyana Services privacy policy. Learn how we collect, use, protect, and manage your personal and health information in accordance with Canadian privacy laws.');
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
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Your Privacy Matters</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aiyana Services is committed to protecting your personal information and health data.
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <p className="text-muted-foreground text-base mb-8">
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <div className="space-y-12 text-foreground">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aiyana Services Inc. ("we," "our," or "us") is committed to protecting the privacy and confidentiality 
                  of personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information in accordance with the Personal Information Protection and Electronic 
                  Documents Act (PIPEDA), Alberta's Health Information Act (HIA), and other applicable privacy legislation.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  As a healthcare service provider in Alberta, we handle sensitive personal and health information with 
                  the utmost care and in accordance with professional standards and legal requirements.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information necessary to provide quality care and services to you and your family:
                </p>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name, date of birth, address, phone number, and email address</li>
                  <li>Emergency contact information</li>
                  <li>Insurance and funding program details (FSCD, PDD, private insurance)</li>
                  <li>Guardian or legal representative information</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Health Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Medical history, diagnoses, and treatment information</li>
                  <li>Assessment and evaluation results</li>
                  <li>Medication lists and allergies</li>
                  <li>Behavioural observations and progress notes</li>
                  <li>Reports from other healthcare providers (with consent)</li>
                  <li>Care plans and support strategies</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Service Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Service booking and scheduling details</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Website usage data (cookies, IP addresses)</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information solely for purposes related to providing healthcare services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Service Delivery:</strong> To provide respite care, conduct assessments, develop treatment plans, 
                  and deliver coordinated support services</li>
                  <li><strong>Care Coordination:</strong> To communicate with other healthcare providers involved in your care 
                  (with your consent)</li>
                  <li><strong>Quality Improvement:</strong> To monitor and improve the quality of our services</li>
                  <li><strong>Billing and Administration:</strong> To process payments, manage funding applications, and maintain 
                  business records</li>
                  <li><strong>Legal Compliance:</strong> To meet professional standards, regulatory requirements, and legal 
                  obligations</li>
                  <li><strong>Communication:</strong> To contact you about appointments, services, and important updates</li>
                  <li><strong>Safety:</strong> To ensure the safety of clients, staff, and others</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-3xl font-bold mb-4">How We Share Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We respect your privacy and only share information when necessary and with your consent, except where 
                  required by law:
                </p>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">With Your Consent</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Other healthcare providers involved in your care (physicians, therapists, schools)</li>
                  <li>Insurance companies and funding programs (FSCD, PDD) for payment purposes</li>
                  <li>Family members or support persons you designate</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Without Consent (When Required by Law)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To comply with court orders or legal proceedings</li>
                  <li>To report child abuse or neglect as required by Alberta law</li>
                  <li>To prevent serious harm to individuals or public safety</li>
                  <li>To regulatory bodies for professional oversight</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Service Providers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may share information with trusted service providers who assist with billing, IT services, or 
                  administrative functions. These providers are contractually obligated to protect your information 
                  and use it only for specified purposes.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-bold mb-4">How We Protect Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement comprehensive physical, technical, and administrative safeguards:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Physical Security:</strong> Locked filing cabinets, restricted access to facilities, secure 
                  disposal of records</li>
                  <li><strong>Technical Security:</strong> Encrypted data transmission and storage, secure servers, regular 
                  security updates, password protection</li>
                  <li><strong>Administrative Security:</strong> Staff training on privacy and confidentiality, signed 
                  confidentiality agreements, privacy audits</li>
                  <li><strong>Access Controls:</strong> Information accessed only by authorized personnel on a need-to-know basis</li>
                  <li><strong>Record Retention:</strong> Records maintained in accordance with professional standards and legal 
                  requirements, then securely destroyed</li>
                </ul>
              </div>

              {/* Your Privacy Rights */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under Canadian privacy law, you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request access to your personal and health information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Consent:</strong> Provide, withdraw, or modify consent for information use and disclosure</li>
                  <li><strong>Complaint:</strong> File a complaint about our privacy practices</li>
                  <li><strong>Explanation:</strong> Receive information about our privacy policies and practices</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Please note that in some circumstances, we may not be able to provide access to all information 
                  (e.g., if it contains confidential information about others) or we may need to withhold certain 
                  information to protect the safety of individuals.
                </p>
              </div>

              {/* Cookies and Website */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Cookies and Website Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar technologies to improve your browsing experience, analyse site 
                  traffic, and understand user preferences. You can control cookies through your browser settings. 
                  Disabling cookies may affect website functionality. We do not use cookies to collect personal health 
                  information.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a service provider for children and youth, we obtain consent from parents or legal guardians before 
                  collecting, using, or disclosing information about minors. We take special care to protect the privacy 
                  of children and ensure age-appropriate communication about their care.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                  The "Last Updated" date at the top of this page indicates when the policy was last revised. Material 
                  changes will be communicated through our website or direct notification to clients.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-xl p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Contact Our Privacy Officer</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have questions about this Privacy Policy, wish to exercise your privacy rights, or want to 
                  file a privacy complaint, please contact our Privacy Officer:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Aiyana Services Inc.</strong></p>
                  <p>Privacy Officer</p>
                  <p>Edmonton, Alberta</p>
                  <p>Phone: (780) 229-4466</p>
                  <p>Email: privacy@aiyanaservices.com</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  If you are not satisfied with our response to your privacy concern, you may contact the Office of the 
                  Information and Privacy Commissioner of Alberta at <a href="https://www.oipc.ab.ca" className="text-primary hover:underline">www.oipc.ab.ca</a> or 
                  the Office of the Privacy Commissioner of Canada at <a href="https://www.priv.gc.ca" className="text-primary hover:underline">www.priv.gc.ca</a>.
                </p>
              </div>

              {/* Consent */}
              <div className="bg-muted/30 border border-border rounded-xl p-8 mt-8">
                <h2 className="text-3xl font-bold mb-4">Your Consent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you consent to the collection, use, and disclosure of your personal information 
                  as described in this Privacy Policy. At the start of services, we will ask you to sign a detailed 
                  consent form that outlines how your information will be used and shared. You may withdraw or modify 
                  your consent at any time, subject to legal and contractual restrictions.
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

export default PrivacyPolicy;
