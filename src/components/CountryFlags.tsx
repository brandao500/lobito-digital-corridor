"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";

const CountryFlags = () => {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});
  const [openModal, setOpenModal] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const countries = [
    {
      name: "Angola",
      flag: "🇦🇴",
      policies: {
        "Regulamentações Comerciais": [
          "Lei de Investimento Privado",
          "Código Comercial Angolano",
          "Regulamento de Câmbios"
        ],
        "Políticas Fiscais": [
          "Imposto Industrial",
          "Imposto sobre o Valor Acrescentado (IVA)",
          "Taxas Aduaneiras"
        ],
        "Regulamentações de Transporte": [
          "Lei dos Portos",
          "Regulamento Ferroviário",
          "Código da Estrada"
        ]
      }
    },
    {
      name: "República Democrática do Congo",
      flag: "🇨🇩",
      policies: {
        "Regulamentações Comerciais": [
          "Código de Investimentos",
          "Lei sobre as Sociedades Comerciais",
          "Regulamento de Comércio Exterior"
        ],
        "Políticas Fiscais": [
          "Imposto sobre os Rendimentos",
          "Taxa sobre o Valor Acrescentado (TVA)",
          "Direitos Aduaneiros"
        ],
        "Regulamentações de Transporte": [
          "Lei de Transporte Multimodal",
          "Regulamento Portuário",
          "Código de Trânsito"
        ]
      }
    },
    {
      name: "Zâmbia",
      flag: "🇿🇲",
      policies: {
        "Regulamentações Comerciais": [
          "Companies Act",
          "Investment Promotion Act",
          "Competition and Consumer Protection Act"
        ],
        "Políticas Fiscais": [
          "Income Tax Act",
          "Value Added Tax (VAT)",
          "Customs and Excise Act"
        ],
        "Regulamentações de Transporte": [
          "Road Traffic Act",
          "Railways Act",
          "Civil Aviation Act"
        ]
      }
    },
    {
      name: "Tanzânia",
      flag: "🇹🇿",
      policies: {
        "Regulamentações Comerciais": [
          "Tanzania Investment Act",
          "Companies Act",
          "Fair Competition Act"
        ],
        "Políticas Fiscais": [
          "Income Tax Act",
          "Value Added Tax Act",
          "East African Community Customs Management Act"
        ],
        "Regulamentações de Transporte": [
          "Land Transport Regulatory Authority Act",
          "Ports Act",
          "Civil Aviation Act"
        ]
      }
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 animate-bounce">
            <FileText className="w-4 h-4 mr-2 animate-spin" />
            Regulamentação Internacional
          </Badge>
          <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-slide-up">
            União dos Países Membros
          </h4>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
            Clique nas bandeiras para visualizar as políticas regulatórias específicas de cada país membro do Corredor de Lobito
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <Dialog key={index} open={openModal === country.name} onOpenChange={(open) => setOpenModal(open ? country.name : null)}>
              <DialogTrigger asChild>
                <Card className={`cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-110 group border-2 border-transparent hover:border-blue-300 animate-fade-in-up hover:rotate-1 transform-gpu`} 
                      style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader className="text-center pb-2">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 animate-float group-hover:animate-bounce">
                      {country.flag}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto animate-modal-enter">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-xl animate-slide-right">
                    <span className="text-3xl animate-bounce">{country.flag}</span>
                    <span className="animate-fade-in delay-300">Políticas Regulatórias - {country.name}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 mt-4">
                  {Object.entries(country.policies).map(([category, policies], categoryIndex) => {
                    const sectionId = `${country.name}-${category}`;
                    const isOpen = openSections[sectionId];
                    
                    return (
                      <Collapsible key={category} open={isOpen} onOpenChange={() => toggleSection(sectionId)}>
                        <CollapsibleTrigger asChild>
                          <button 
                            className={`flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-300 text-left hover:shadow-md transform hover:scale-[1.02] animate-slide-up`}
                            style={{ animationDelay: `${categoryIndex * 100}ms` }}
                            type="button"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-blue-600 animate-pulse" />
                              <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                                {category}
                              </span>
                            </div>
                            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                              {isOpen ? (
                                <ChevronDown className="w-5 h-5 text-gray-600 animate-bounce" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                              )}
                            </div>
                          </button>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-2 animate-accordion-down data-[state=closed]:animate-accordion-up">
                          <div className="pl-4 space-y-2">
                            {policies.map((policy, policyIndex) => (
                              <div 
                                key={policyIndex} 
                                className={`flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:shadow-sm transform hover:translate-x-2 animate-slide-right`}
                                style={{ animationDelay: `${policyIndex * 50}ms` }}
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-gray-700 hover:text-blue-700 transition-colors">
                                  {policy}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-1000">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <FileText className="w-5 h-5 text-blue-600 animate-spin" />
            <span className="text-sm text-gray-700 font-medium">
              Políticas atualizadas conforme legislação vigente em cada país
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-right {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes modal-enter {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        @keyframes accordion-down {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        
        @keyframes accordion-up {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
        
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-slide-right { animation: slide-right 0.5s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-modal-enter { animation: modal-enter 0.3s ease-out; }
        .animate-accordion-down { animation: accordion-down 0.3s ease-out; }
        .animate-accordion-up { animation: accordion-up 0.3s ease-out; }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default CountryFlags;
