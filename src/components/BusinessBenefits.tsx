"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  BarChart3
} from "lucide-react";

const BusinessBenefits = () => {
  const mainBenefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Redução de Tempo",
      subtitle: "Até 40% mais rápido",
      description: "Automatização de processos e documentação digital aceleram significativamente as operações comerciais",
      color: "from-blue-500 to-blue-600",
      stats: [
        { label: "Processamento de documentos", value: "5x mais rápido" },
        { label: "Aprovações regulatórias", value: "60% redução" },
        { label: "Tempo de trânsito", value: "12.5 dias média" }
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Redução de Custos",
      subtitle: "Economia de até 35%",
      description: "Otimização de rotas, redução de papelada e eliminação de intermediários desnecessários",
      color: "from-green-500 to-green-600",
      stats: [
        { label: "Custos operacionais", value: "-25%" },
        { label: "Taxas administrativas", value: "-50%" },
        { label: "Multas por não conformidade", value: "-90%" }
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Conformidade Total",
      subtitle: "100% regulamentado",
      description: "Garantia de conformidade com todas as regulamentações dos 4 países membros",
      color: "from-purple-500 to-purple-600",
      stats: [
        { label: "Taxa de conformidade", value: "99.8%" },
        { label: "Auditorias aprovadas", value: "100%" },
        { label: "Certificações válidas", value: "500+" }
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Registro na Plataforma",
      description: "Cadastro simples e verificação de credenciais empresariais",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Certificação Digital",
      description: "Obtenção automática de certificações regulatórias necessárias",
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Operação Integrada",
      description: "Gestão completa de logística, documentação e rastreamento",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Expansão Regional",
      description: "Acesso facilitado a mercados dos 4 países membros",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    "Rastreamento em tempo real",
    "Conformidade automática",
    "Documentação digital",
    "Suporte multilíngue",
    "Integração bancária",
    "Relatórios avançados",
    "API para sistemas ERP",
    "Suporte 24/7"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-700 border-blue-300">
            Benefícios Empresariais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforme Sua Operação Comercial
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma revoluciona o comércio regional com 
            tecnologia avançada e conformidade garantida
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${benefit.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{benefit.title}</h3>
                      <p className="text-white/90">{benefit.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Stats Section */}
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    {benefit.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">{stat.label}</span>
                        <Badge variant="secondary" className="font-bold">
                          {stat.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Processo simples e eficiente para começar a operar na plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="mb-3 text-blue-600">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Recursos Avançados Inclusos
            </h3>
            <p className="text-gray-600 mb-8">
              Nossa plataforma oferece um conjunto completo de ferramentas 
              para otimizar suas operações comerciais regionais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* ROI Card */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">ROI Médio</h4>
                <div className="text-4xl font-bold mb-2">300%</div>
                <p className="text-green-100">
                  Retorno sobre investimento em 12 meses
                </p>
              </CardContent>
            </Card>

            {/* Growth Card */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Crescimento</h4>
                <div className="text-4xl font-bold mb-2">+150%</div>
                <p className="text-blue-100">
                  Aumento médio no volume de negócios
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-gray-900 to-blue-900 text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Pronto para Revolucionar Seu Negócio?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Junte-se a mais de 500 empresas que já transformaram suas operações 
                com o Corredor Lobito Digital
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Começar Gratuitamente
                </button>
                <button className="border border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Agendar Demonstração
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
