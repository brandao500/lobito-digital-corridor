"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote, 
  Building2, 
  Truck, 
  Factory,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. António Silva",
      position: "CEO",
      company: "Mineração Katanga Ltd.",
      country: "🇨🇩 RDC",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "O Corredor Lobito Digital revolucionou nossa operação. Reduzimos o tempo de exportação em 40% e aumentamos a transparência com nossos parceiros internacionais.",
      metrics: {
        improvement: "40%",
        metric: "Redução no tempo de trânsito"
      },
      industry: "Mineração",
      icon: <Factory className="w-5 h-5" />
    },
    {
      name: "Maria Fernandes",
      position: "Diretora de Logística",
      company: "TransAfrica Logistics",
      country: "🇦🇴 Angola",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "A plataforma nos permitiu otimizar rotas e reduzir custos operacionais significativamente. A conformidade regulatória automatizada é um diferencial único.",
      metrics: {
        improvement: "25%",
        metric: "Redução de custos"
      },
      industry: "Logística",
      icon: <Truck className="w-5 h-5" />
    },
    {
      name: "John Mwamba",
      position: "Managing Director",
      company: "Copper Belt Trading Co.",
      country: "🇿🇲 Zâmbia",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Conseguimos expandir nosso mercado para novos países com total segurança jurídica. A plataforma facilita toda a documentação e rastreamento.",
      metrics: {
        improvement: "3x",
        metric: "Expansão de mercados"
      },
      industry: "Comércio",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      name: "Sarah Kimaro",
      position: "Export Manager",
      company: "East Africa Commodities",
      country: "🇹🇿 Tanzânia",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "A integração regional nunca foi tão eficiente. Processamos mais de 200 transações por mês com total rastreabilidade e conformidade.",
      metrics: {
        improvement: "200+",
        metric: "Transações mensais"
      },
      industry: "Exportação",
      icon: <Building2 className="w-5 h-5" />
    }
  ];

  const successMetrics = [
    {
      title: "Empresas Ativas",
      value: "500+",
      description: "Operadores certificados na plataforma",
      color: "text-blue-600"
    },
    {
      title: "Satisfação do Cliente",
      value: "98.5%",
      description: "Taxa de satisfação dos usuários",
      color: "text-green-600"
    },
    {
      title: "Tempo Médio Poupado",
      value: "35%",
      description: "Redução no tempo de processamento",
      color: "text-purple-600"
    },
    {
      title: "Conformidade",
      value: "100%",
      description: "Taxa de conformidade regulatória",
      color: "text-orange-600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-700 border-blue-300">
            Casos de Sucesso
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformando Negócios Regionais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como empresas líderes estão revolucionando suas operações 
            com o Corredor Lobito Digital
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-blue-100 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Quote Section */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Quote className="w-8 h-8 text-blue-600" />
                    <div className="flex">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    "{current.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{current.name}</h4>
                      <p className="text-gray-600">{current.position}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-blue-600">{current.company}</span>
                        <span className="text-lg">{current.country}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Section */}
                <div className="md:w-80">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          {current.icon}
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {current.industry}
                        </Badge>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">{current.metrics.improvement}</div>
                        <div className="text-blue-100 text-sm">{current.metrics.metric}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Anterior
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Próximo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successMetrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{metric.title}</h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Junte-se aos Líderes do Mercado
              </h3>
              <p className="text-blue-100 mb-6">
                Transforme sua operação e expanda seus negócios com a plataforma 
                mais confiável da região
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Começar Agora
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
