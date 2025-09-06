import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, MapPin, CheckCircle, Truck } from "lucide-react";



const Logistics = () => {
  const logisticsFeatures = [
    {
      icon: <Train className="w-8 h-8 text-primary" />,
      title: "Transporte Ferroviário Prioritário",
      description: "Corredor de Lobito como via principal de escoamento Conectando o interior de África aos portos do Atlântico através de uma infraestrutura moderna e eficiente.",
      status: "Ativo"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Operadores Certificados",
      description: "Registo oficial e validação estatal obrigatória",
      status: "Regulamentado"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Tracking Integrado",
      description: "Rastreamento em tempo real de cargas e documentação",
      status: "Disponível"
    },
    {
      icon: <Truck className="w-8 h-8 text-primary-glow" />,
      title: "Despacho Automatizado",
      description: "Processamento digital de documentos aduaneiros",
      status: "Otimizado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-800";
      case "Regulamentado":
        return "bg-blue-100 text-blue-800";
      case "Disponível":
        return "bg-purple-100 text-purple-800";
      case "Otimizado":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/5 text-primary border-primary/20">
            <Train className="w-4 h-4 mr-2" />
            Logística Integrada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Corredor de Lobito Digital
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O transporte prioritário é ferroviário no Corredor de Lobito. 
            Operadores e despachantes atuam apenas após{" "}
            <span className="font-semibold text-primary">registo oficial e validação estatal</span>, 
            garantindo tracking e despacho integrado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {logisticsFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <Badge className={`${getStatusColor(feature.status)} border-0`}>
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      
      </div>
      
     
    </section>
  );
};

export default Logistics;