"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

const RailwayTransport = () => {
  const features = [
    {
      icon: <Train className="w-6 h-6 text-blue-600" />,
      title: "Modal Único",
      subtitle: "Exclusivamente ferroviário",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Rastreamento",
      subtitle: "Tracking integrado 24/7",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "SLAs",
      subtitle: "Prazos garantidos",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Regulado",
      subtitle: "Operadores verificados",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative">
                {/* Train Image Placeholder - Using CSS to create a train scene */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-700 to-blue-900">
                  {/* Mountains silhouette */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent"></div>
                  
                  {/* Train representation */}
                  <div className="absolute bottom-16 left-8 right-8">
                    <div className="flex items-end space-x-2">
                      {/* Train cars */}
                      <div className="w-20 h-12 bg-red-600 rounded-t-lg relative">
                        <div className="absolute top-2 left-2 right-2 h-6 bg-yellow-400 rounded opacity-80"></div>
                      </div>
                      <div className="w-16 h-10 bg-blue-700 rounded-t-lg"></div>
                      <div className="w-16 h-10 bg-green-700 rounded-t-lg"></div>
                      <div className="w-16 h-10 bg-orange-600 rounded-t-lg"></div>
                    </div>
                    {/* Railway track */}
                    <div className="w-full h-2 bg-gray-600 mt-1 rounded-full"></div>
                  </div>
                  
                  {/* Stars */}
                  <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-12 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* 100% Transport Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <Train className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Transporte por comboio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transporte ferroviário como serviço central
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O modal do corredor é <span className="font-semibold text-blue-600">exclusivamente o comboio</span>. 
                <span className="font-semibold text-gray-800"> Operadores e despachantes</span> atuam 
                <span className="font-semibold text-green-600"> após registo e aceitação pelo Estado</span>, 
                garantindo despacho, embarque e <span className="font-semibold text-purple-600">rastreamento integrado</span> na plataforma.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className={`${feature.color} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      {feature.icon}
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Rules Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-gray-800">Regras de Transporte & SLAs</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Registo obrigatório de operadores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Tracking em tempo real</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>SLAs garantidos por contrato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Conformidade regulatória</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RailwayTransport;
