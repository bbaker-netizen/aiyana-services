import { useEffect, useState } from "react";
import logo from "@/assets/ayana-logo.png";
import { Phone, Mail, MapPin, Globe, Check } from "lucide-react";

const BusinessCards = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([1, 2, 3, 4]);

  useEffect(() => {
    document.title = "Business Cards | Aiyana Services";
  }, []);

  const toggleCard = (cardId: number) => {
    setSelectedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const selectAll = () => setSelectedCards([1, 2, 3, 4]);
  const deselectAll = () => setSelectedCards([]);

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
          
          .print-hint, .page-title, button, .card-selector {
            display: none !important;
          }
          
          .business-card.not-selected {
            display: none !important;
          }
          
          .business-card {
            width: ${document.body.classList.contains('high-res-print') ? '700px' : '3.25in'} !important;
            height: ${document.body.classList.contains('high-res-print') ? '400px' : '1.75in'} !important;
            margin: ${document.body.classList.contains('high-res-print') ? '1rem auto' : '0'} !important;
            page-break-after: always;
            box-shadow: none !important;
            border-radius: ${document.body.classList.contains('high-res-print') ? '8px' : '0'} !important;
            padding: ${document.body.classList.contains('high-res-print') ? '' : '0.15in'} !important;
            box-sizing: border-box !important;
          }
          
          .business-card:last-child {
            page-break-after: auto;
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

      <div className="fixed top-5 right-5 flex flex-col gap-2 z-[1000]">
        <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-200">
          <div className="font-bold text-sm mb-2 text-gray-700">
            Selected: {selectedCards.length} of 4
          </div>
          <div className="flex gap-2">
            <button
              onClick={selectAll}
              className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-medium transition-colors"
            >
              Select All
            </button>
            <button
              onClick={deselectAll}
              className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-medium transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        <button 
          onClick={() => {
            if (selectedCards.length === 0) {
              alert('Please select at least one card design to print');
              return;
            }
            document.body.classList.add('high-res-print');
            window.print();
            setTimeout(() => document.body.classList.remove('high-res-print'), 100);
          }}
          disabled={selectedCards.length === 0}
          className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg shadow-lg font-semibold transition-colors"
        >
          <div className="font-bold mb-0.5">📄 Save High-Res PDF</div>
          <div className="text-xs">
            {selectedCards.length > 0 
              ? `${selectedCards.length} design${selectedCards.length > 1 ? 's' : ''} selected`
              : 'No designs selected'
            }
          </div>
        </button>
        
        <button 
          onClick={() => {
            if (selectedCards.length === 0) {
              alert('Please select at least one card design to print');
              return;
            }
            window.print();
          }}
          disabled={selectedCards.length === 0}
          className="bg-slate-600 hover:bg-slate-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg shadow-lg font-semibold transition-colors"
        >
          <div className="font-bold mb-0.5">🖨️ Print Standard Size</div>
          <div className="text-xs">
            {selectedCards.length > 0 
              ? `${selectedCards.length} design${selectedCards.length > 1 ? 's' : ''} selected`
              : 'No designs selected'
            }
          </div>
        </button>
      </div>

      <div className="cards-container">
        <h1 className="page-title text-4xl font-bold text-center mb-4 text-foreground">
          Aiyana Services Business Cards
        </h1>
        <p className="page-title text-center text-muted-foreground mb-12">
          Choose your preferred design and print. Standard size: 3.5" × 2"
        </p>

        {/* Design 1: Classic Professional */}
        <div className="relative">
          <button
            onClick={() => toggleCard(1)}
            className={`card-selector absolute top-4 left-4 z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedCards.includes(1)
                ? 'bg-teal-600 border-teal-600'
                : 'bg-white border-gray-300 hover:border-teal-400'
            }`}
          >
            {selectedCards.includes(1) && <Check className="w-5 h-5 text-white" />}
          </button>
          <div className={`business-card bg-white ${!selectedCards.includes(1) ? 'not-selected opacity-50' : ''}`}>
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
        </div>

        {/* Design 2: Modern Gradient */}
        <div className="relative">
          <button
            onClick={() => toggleCard(2)}
            className={`card-selector absolute top-4 left-4 z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedCards.includes(2)
                ? 'bg-teal-600 border-teal-600'
                : 'bg-white border-gray-300 hover:border-teal-400'
            }`}
          >
            {selectedCards.includes(2) && <Check className="w-5 h-5 text-white" />}
          </button>
          <div className={`business-card bg-white ${!selectedCards.includes(2) ? 'not-selected opacity-50' : ''}`}>
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
        </div>

        {/* Design 3: Bold Teal */}
        <div className="relative">
          <button
            onClick={() => toggleCard(3)}
            className={`card-selector absolute top-4 left-4 z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedCards.includes(3)
                ? 'bg-white border-white'
                : 'bg-teal-700 border-white hover:bg-teal-600'
            }`}
          >
            {selectedCards.includes(3) && <Check className="w-5 h-5 text-teal-600" />}
          </button>
          <div className={`business-card ${!selectedCards.includes(3) ? 'not-selected opacity-50' : ''}`} style={{ background: 'hsl(168 52% 42%)' }}>
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
        </div>

        {/* Design 4: Two-Sided (Front) */}
        <div className="relative">
          <button
            onClick={() => toggleCard(4)}
            className={`card-selector absolute top-4 left-4 z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedCards.includes(4)
                ? 'bg-teal-600 border-teal-600'
                : 'bg-white border-gray-300 hover:border-teal-400'
            }`}
          >
            {selectedCards.includes(4) && <Check className="w-5 h-5 text-white" />}
          </button>
          <div className={`business-card ${!selectedCards.includes(4) ? 'not-selected opacity-50' : ''}`} style={{
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
        </div>

        {/* Design 4: Two-Sided (Back) */}
        <div className={`business-card bg-white ${!selectedCards.includes(4) ? 'not-selected opacity-50' : ''}`}>
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
