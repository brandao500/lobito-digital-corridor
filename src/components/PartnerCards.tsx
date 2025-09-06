import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CreditCard, Eye } from "lucide-react";

const PartnerCards = () => {
  const partnerServices = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Nossa Seguros",
      badge: "Cobertura Institucional",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      description: "Seguros especializados para operações governamentais"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-green-600" />,
      title: "BAI S.A",
      badge: "Parceiro Financeiro",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      description: "Processamento seguro de transações internacionais"
    },
    {
      icon: <Eye className="w-12 h-12 text-amber-600" />,
      title: "AI Auditor",
      badge: "Monitoramento Contínuo",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      description: "Auditoria automatizada com notificações em tempo real"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {partnerServices.map((service, index) => (
        <Card 
          key={index} 
          className="text-center hover:shadow-xl transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm hover:scale-105"
        >
          <CardHeader className="pb-4">
            <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {service.icon}
            </div>
            <CardTitle className="text-xl font-bold text-gray-800 mb-3">
              {service.title}
            </CardTitle>
            <Badge className={`${service.badgeColor} font-medium text-sm px-3 py-1`}>
              {service.badge}
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PartnerCards;
