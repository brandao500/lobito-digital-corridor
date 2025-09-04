import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, DollarSign, Truck, FileCheck, Lock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Produtos & Serviços",
      description: "Catálogo unificado com padrões internacionais de qualidade"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary" />,
      title: "Preços Regulados",
      description: "Valores acordados pelos estados membros em USD"
    },
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      title: "Logística Integrada",
      description: "Rastreamento completo do Corredor de Lobito"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary-glow" />,
      title: "Conformidade Fiscal",
      description: "Automatização de processos regulatórios por país"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            <Package className="w-4 h-4 mr-2" />
            Ecossistema Integrado
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a Plataforma
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O Corredor Lobito Digital integra <span className="font-semibold text-primary">produtos, serviços, preços, logística e conformidade fiscal</span> em um só ecossistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
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

        {/* Marketplace Access Notice */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Acesso Exclusivo
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O <span className="font-semibold text-primary">marketplace</span> é acessível apenas para{" "}
            <span className="font-semibold text-secondary">utilizadores autenticados</span> (clientes, operadores e governos).
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;