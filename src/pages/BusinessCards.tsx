import { useEffect, useState } from "react";
import logo from "@/assets/ayana-logo.png";
import { Phone, Mail, MapPin, Globe, Check, User } from "lucide-react";
import { z } from "zod";

const personalizationSchema = z.object({
  name: z.string().max(50, "Name must be less than 50 characters"),
  title: z.string().max(50, "Title must be less than 50 characters"),
  extension: z.string().max(10, "Extension must be less than 10 characters").regex(/^[0-9]*$/, "Extension must contain only numbers")
});

type PersonalizationData = z.infer<typeof personalizationSchema>;

const BusinessCards = () => {
  const [personalization, setPersonalization] = useState<PersonalizationData>({
    name: "",
    title: "",
    extension: ""
  });
  const [errors, setErrors] = useState<Partial<PersonalizationData>>({});
  const [showPersonalization, setShowPersonalization] = useState(false);

  useEffect(() => {
    document.title = "Business Cards | Aiyana Services";
  }, []);

  const handlePersonalizationChange = (field: keyof PersonalizationData, value: string) => {
    const newData = { ...personalization, [field]: value };
    setPersonalization(newData);
    
    // Validate single field
    try {
      const fieldSchema = field === 'name' 
        ? z.string().max(50, "Name must be less than 50 characters")
        : field === 'title'
        ? z.string().max(50, "Title must be less than 50 characters")
        : z.string().max(10, "Extension must be less than 10 characters").regex(/^[0-9]*$/, "Extension must contain only numbers");
      
      fieldSchema.parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  const clearPersonalization = () => {
    setPersonalization({ name: "", title: "", extension: "" });
    setErrors({});
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: ${document.body.classList.contains('high-res-print') ? 'auto' : '3.5in 2in'};
            margin: ${document.body.classList.contains('high-res-print') ? '0.5in' : '0.125in'};
          }
          
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          /* Hide all UI controls and labels */
          .fixed, button, .card-selector, 
          .page-title, [class*="page-title"],
          .border-b-2, h1, p.text-center {
            display: none !important;
          }
          
          /* Show only the cards container */
          .cards-container {
            display: block !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
          }
          
          /* Hide grid layout for print */
          .grid {
            display: block !important;
          }
          
          /* Hide design section wrappers */
          .mb-16 {
            margin: 0 !important;
          }
          
          /* Style visible business cards */
          .business-card {
            display: flex !important;
            width: ${document.body.classList.contains('high-res-print') ? '700px' : '3.25in'} !important;
            height: ${document.body.classList.contains('high-res-print') ? '400px' : '1.75in'} !important;
            margin: ${document.body.classList.contains('high-res-print') ? '1rem auto' : '0.25in auto'} !important;
            page-break-after: always !important;
            page-break-before: auto !important;
            page-break-inside: avoid !important;
            box-shadow: none !important;
            border-radius: ${document.body.classList.contains('high-res-print') ? '8px' : '0'} !important;
            box-sizing: border-box !important;
            position: relative;
            break-inside: avoid !important;
          }
          
          .business-card:last-child {
            page-break-after: auto !important;
          }
          
          /* Ensure card content doesn't break */
          .business-card > * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          ${!document.body.classList.contains('high-res-print') ? `
            .business-card img {
              height: 0.5in !important;
              max-height: 0.5in !important;
            }
            
            .business-card h2 {
              font-size: 11pt !important;
              margin-bottom: 0.05in !important;
            }
            
            .business-card p {
              font-size: 7pt !important;
              margin-bottom: 0.1in !important;
            }
            
            .business-card .text-sm,
            .business-card .text-base {
              font-size: 7pt !important;
            }
            
            .business-card .text-xs {
              font-size: 6pt !important;
            }
            
            .business-card .text-lg {
              font-size: 9pt !important;
            }
            
            .business-card .text-xl {
              font-size: 10pt !important;
            }
            
            .business-card .text-2xl {
              font-size: 12pt !important;
            }
            
            .business-card .text-3xl {
              font-size: 14pt !important;
            }
            
            .business-card .text-4xl {
              font-size: 16pt !important;
            }
            
            .business-card [class*="h-"] {
              height: auto !important;
            }
            
            .business-card [class*="w-"] {
              width: auto !important;
            }
            
            .business-card .p-8,
            .business-card .p-10 {
              padding: 0.12in !important;
            }
            
            .business-card .gap-2,
            .business-card .gap-3 {
              gap: 0.05in !important;
            }
            
            .business-card .space-y-2 > * + *,
            .business-card .space-y-2\\.5 > * + *,
            .business-card .space-y-3 > * + * {
              margin-top: 0.05in !important;
            }
            
            .business-card .mb-2,
            .business-card .mb-3,
            .business-card .mb-4,
            .business-card .mb-5,
            .business-card .mb-6 {
              margin-bottom: 0.08in !important;
            }
          ` : ''}
        }
        
        @media screen {
          .cards-container {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 2rem;
            background: hsl(var(--background));
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

      <div className="fixed top-5 right-5 flex flex-col gap-2 z-[1000] w-56">
        {/* Personalization Panel */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setShowPersonalization(!showPersonalization)}
            className="w-full p-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-teal-600" />
              <span className="font-semibold text-xs text-gray-700">Personalize</span>
            </div>
            <span className="text-gray-400 text-sm">{showPersonalization ? '▼' : '▶'}</span>
          </button>
          
          {showPersonalization && (
            <div className="p-3 pt-0 space-y-2 border-t">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={personalization.name}
                  onChange={(e) => handlePersonalizationChange('name', e.target.value)}
                  placeholder="John Smith"
                  maxLength={50}
                  className="w-full px-2 py-1.5 text-xs border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={personalization.title}
                  onChange={(e) => handlePersonalizationChange('title', e.target.value)}
                  placeholder="Care Coordinator"
                  maxLength={50}
                  className="w-full px-2 py-1.5 text-xs border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors.title && <p className="text-xs text-red-600 mt-1">{errors.title}</p>}
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Extension
                </label>
                <input
                  type="text"
                  value={personalization.extension}
                  onChange={(e) => handlePersonalizationChange('extension', e.target.value)}
                  placeholder="1234"
                  maxLength={10}
                  className="w-full px-2 py-1.5 text-xs border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors.extension && <p className="text-xs text-red-600 mt-1">{errors.extension}</p>}
              </div>
              
              {(personalization.name || personalization.title || personalization.extension) && (
                <button
                  onClick={clearPersonalization}
                  className="w-full px-2 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-medium transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          )}
        </div>

        <button 
          onClick={() => {
            document.body.classList.add('high-res-print');
            window.print();
            setTimeout(() => document.body.classList.remove('high-res-print'), 100);
          }}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg shadow-lg font-semibold transition-colors"
        >
          <div className="font-bold text-xs">📄 High-Res PDF</div>
          <div className="text-[10px] opacity-90 mt-0.5">Print Quality</div>
        </button>
        
        <button 
          onClick={() => window.print()}
          className="w-full bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-lg shadow-lg font-semibold transition-colors"
        >
          <div className="font-bold text-xs">🖨️ Standard</div>
          <div className="text-[10px] opacity-90 mt-0.5">Quick Print</div>
        </button>
      </div>

      <div className="cards-container">
        <h1 className="page-title text-4xl font-bold text-center mb-4 text-foreground">
          Aiyana Services Business Cards
        </h1>
        <p className="page-title text-center text-muted-foreground mb-12">
          Approved design ready to print. Standard size: 3.5" × 2"
        </p>

        {/* Approved Design: Elegant Gradient */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FRONT */}
            <div className="relative">
              <div className="page-title absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                FRONT
              </div>
              <div className="business-card" style={{
                background: 'linear-gradient(135deg, hsl(168 52% 95%), hsl(15 58% 95%))'
              }}>
                <div className="flex flex-col h-full p-10">
                  {/* Logo and company branding at top */}
                  <div className="flex items-center gap-4 mb-10">
                    <img 
                      src={logo} 
                      alt="Aiyana Services" 
                      className="h-16 w-auto mix-blend-multiply"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold leading-tight" style={{ color: 'hsl(168 52% 42%)' }}>
                        Aiyana Services
                      </h3>
                      <p className="text-xs leading-tight" style={{ color: 'hsl(215 25% 27%)' }}>
                        Care That Connects, Services That Support.
                      </p>
                    </div>
                  </div>
                  
                  {/* Center content */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold mb-3" style={{ color: 'hsl(168 52% 42%)' }}>
                      Aiyana Services
                    </h2>
                    <p className="text-base font-medium mb-6" style={{ color: 'hsl(215 25% 27%)' }}>
                      Care That Connects, Services That Support
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-center text-sm" style={{ color: 'hsl(168 52% 42%)' }}>
                        <Phone className="w-4 h-4 mr-2" />
                        <span>(780) 695-2477</span>
                      </div>
                      <div className="flex items-center justify-center text-sm" style={{ color: 'hsl(168 52% 42%)' }}>
                        <Mail className="w-4 h-4 mr-2" />
                        <span>info@aiyanaservices.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div className="relative">
              <div className="page-title absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                BACK
              </div>
              <div className="business-card bg-white">
                <div className="flex flex-col h-full p-10">
                  <h3 className="text-xl font-bold mb-8 text-center" style={{ color: 'hsl(168 52% 42%)' }}>
                    Contact Information
                  </h3>
                  
                  <div className="space-y-3 text-base mb-10" style={{ color: 'hsl(215 15% 45%)' }}>
                    <div className="flex items-center gap-3 justify-center">
                      <Globe className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                      <span>aiyanaservices.com</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(168 52% 42%)' }} />
                      <span>Edmonton, Alberta</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-base font-semibold mb-4" style={{ color: 'hsl(215 25% 27%)' }}>
                      Our Services:
                    </p>
                    <ul className="text-sm space-y-2.5" style={{ color: 'hsl(215 15% 45%)' }}>
                      <li>• Respite Care</li>
                      <li>• ADHD & Autism Assessments</li>
                      <li>• Addiction Support</li>
                      <li>• Dual Diagnosis Care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCards;
