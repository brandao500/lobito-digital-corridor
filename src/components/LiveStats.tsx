"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign, 
  Globe, 
  Truck,
  BarChart3,
  Activity
} from "lucide-react";
import { useEffect, useState } from "react";

const LiveStats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    totalTrade: 0,
    activeOperators: 0,
    shipments: 0,
    countries: 0
  });

  const targetValues = {
    totalTrade: 2847,
    activeOperators: 156,
    shipments: 1243,
    countries: 4
  };

  useEffect(() => {
    const animateValue = (key: keyof typeof targetValues, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    Object.entries(targetValues).forEach(([key, value]) => {
      animateValue(key as keyof typeof targetValues, value);
    });
  }, []);

  const stats = [
    {
      title: "Volume de Comércio",
      value: `$${animatedValues.totalTrade}M`,
      subtitle: "USD em transações",
      icon: <DollarSign className="w-8 h-8" />,
      trend: "+23.5%",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Operadores Ativos",
      value: animatedValues.activeOperators.toString(),
      subtitle: "Empresas certificadas",
      icon: <Users className="w-8 h-8" />,
      trend: "+12.3%",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Carregamentos",
      value: `${animatedValues.shipments}`,
      subtitle: "Este mês",
      icon: <Package className="w-8 h-8" />,
      trend: "+8.7%",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Países Conectados",
      value: animatedValues.countries.toString(),
      subtitle: "Rede regional",
      icon: <Globe className="w-8 h-8" />,
      trend: "100%",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const liveMetrics = [
    { label: "Transações Hoje", value: "47", icon: <Activity className="w-4 h-4" /> },
    { label: "Tempo Médio de Trânsito", value: "12.5 dias", icon: <Truck className="w-4 h-4" /> },
    { label: "Taxa de Conformidade", value: "99.2%", icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <Badge variant="outline" className="text-green-700 border-green-300">
              Dados em Tempo Real
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Impacto do Corredor Lobito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe o crescimento e desempenho da maior plataforma de comércio 
            regional da África Austral
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className={`${stat.borderColor} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-700 bg-green-100">
                    {stat.trend}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-gray-700">{stat.title}</p>
                  <p className="text-sm text-gray-500">{stat.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Metrics Bar */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold">Métricas Ao Vivo</h3>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {liveMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 text-center md:text-left">
                    <div className="text-blue-200">
                      {metric.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-sm text-blue-100">{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Impact Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Crescimento Sustentável</h3>
              <p className="text-gray-600">
                Facilitamos o crescimento econômico regional através de comércio eficiente e transparente
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Rede Empresarial</h3>
              <p className="text-gray-600">
                Conectamos produtores, operadores logísticos e compradores em uma única plataforma
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Integração Regional</h3>
              <p className="text-gray-600">
                Promovemos a integração econômica entre Angola, RDC, Zâmbia e Tanzânia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
