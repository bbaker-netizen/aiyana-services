import { useEffect } from "react";
import logo from "@/assets/ayana-logo.png";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const BusinessCards = () => {
  useEffect(() => {
    document.title = "Business Cards | Aiyana Services";
  }, []);

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: 3.5in 2in;
            margin: 0;
          }
          
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print-hint, .page-title {
            display: none !important;
          }
          
          .business-card {
            width: 3.5in !important;
            height: 2in !important;
            margin: 0 !important;
            page-break-after: always;
            box-shadow: none !important;
          }
          
          .business-card:last-child {
            page-break-after: auto;
          }
        }
        
        @media screen {
          .cards-container {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 2rem;
            background: hsl(var(--background));
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
            cursor: pointer;
          }
          
          .print-hint:hover {
            background: hsl(168 52% 35%);
          }
          
          .business-card {
            width: 700px;
            height: 400px;
            margin: 2rem auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            border-radius: 8px;
            overflow: hidden;
          }
        }
        
        .business-card {
          position: relative;
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <div className="print-hint" onClick={() => window.print()}>
        <div className="font-bold mb-1">🖨️ Print Business Cards</div>
        <div className="text-sm">Click to print all designs</div>
      </div>

      <div className="cards-container">
        <h1 className="page-title text-4xl font-bold text-center mb-4 text-foreground">
          Aiyana Services Business Cards
        </h1>
        <p className="page-title text-center text-muted-foreground mb-12">
          Choose your preferred design and print. Standard size: 3.5" × 2"
        </p>

        {/* Design 1: Classic Professional */}
        <div className="business-card bg-white">
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={logo} 
                alt="Aiyana Services" 
                className="h-20 w-auto mix-blend-multiply"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'hsl(215 25% 27%)' }}>
                Aiyana Services
              </h2>
              <p className="text-base mb-4" style={{ color: 'hsl(215 15% 45%)' }}>
                Care That Connects, Services That Support
              </p>
            </div>
            
            <div className="border-t-2 pt-4" style={{ borderColor: 'hsl(168 52% 42%)' }}>
              <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: 'hsl(215 15% 45%)' }}>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span>(780) 229-4466</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span className="truncate">info@aiyanaservices.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span>aiyanaservices.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span>Edmonton, AB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design 2: Modern Gradient */}
        <div className="business-card bg-white">
          <div className="flex h-full">
            <div 
              className="w-24 flex-shrink-0"
              style={{ 
                background: 'linear-gradient(135deg, hsl(168 52% 42%), hsl(15 58% 65%))'
              }}
            />
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <img 
                  src={logo} 
                  alt="Aiyana Services" 
                  className="h-16 w-auto mb-4 mix-blend-multiply"
                />
                <h2 className="text-xl font-bold" style={{ color: 'hsl(215 25% 27%)' }}>
                  Aiyana Services
                </h2>
                <p className="text-sm" style={{ color: 'hsl(215 15% 45%)' }}>
                  Compassionate Integrated Care
                </p>
              </div>
              
              <div className="space-y-2 text-sm" style={{ color: 'hsl(215 15% 45%)' }}>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span>(780) 229-4466</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span className="truncate">info@aiyanaservices.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span>aiyanaservices.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                  <span>Edmonton, Alberta</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design 3: Bold Teal */}
        <div className="business-card" style={{ background: 'hsl(168 52% 42%)' }}>
          <div className="flex flex-col h-full p-10 text-white">
            <div className="flex items-center justify-between mb-6">
              <img 
                src={logo} 
                alt="Aiyana Services" 
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-2">
                Aiyana Services
              </h2>
              <p className="text-base opacity-90 mb-6">
                Care That Connects, Services That Support
              </p>
            </div>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(780) 229-4466</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">info@aiyanaservices.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 flex-shrink-0" />
                <span>aiyanaservices.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Edmonton, Alberta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Design 4: Two-Sided (Front) */}
        <div className="business-card" style={{ 
          background: 'linear-gradient(135deg, hsl(168 52% 95%), hsl(15 58% 95%))'
        }}>
          <div className="flex flex-col items-center justify-center h-full p-10 text-center">
            <img 
              src={logo} 
              alt="Aiyana Services" 
              className="h-28 w-auto mb-6 mix-blend-multiply"
            />
            <h2 className="text-4xl font-bold mb-3" style={{ color: 'hsl(168 52% 42%)' }}>
              Aiyana Services
            </h2>
            <p className="text-lg font-medium" style={{ color: 'hsl(215 25% 27%)' }}>
              Care That Connects
            </p>
            <p className="text-lg font-medium" style={{ color: 'hsl(215 25% 27%)' }}>
              Services That Support
            </p>
          </div>
        </div>

        {/* Design 4: Two-Sided (Back) */}
        <div className="business-card bg-white">
          <div className="flex flex-col h-full p-10">
            <h3 className="text-xl font-bold mb-5 text-center" style={{ color: 'hsl(168 52% 42%)' }}>
              Contact Information
            </h3>
            
            <div className="space-y-3 text-sm mb-6" style={{ color: 'hsl(215 15% 45%)' }}>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <span>(780) 229-4466</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <span className="truncate">info@aiyanaservices.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <span>aiyanaservices.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                <span>Edmonton, Alberta</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-base font-semibold mb-3" style={{ color: 'hsl(215 25% 27%)' }}>
                Our Services:
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'hsl(215 15% 45%)' }}>
                <li>• Respite Care</li>
                <li>• ADHD & Autism Assessments</li>
                <li>• Addiction Support</li>
                <li>• Dual Diagnosis Care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCards;
