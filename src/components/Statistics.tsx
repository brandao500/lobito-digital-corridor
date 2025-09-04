import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Globe, MapPin, TrendingUp, Download } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Produtos Comercializados",
      value: "247",
      description: "Categorias ativas na plataforma",
      trend: "+23%"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Países Compradores",
      value: "34",
      description: "Mercados internacionais ativos",
      trend: "+15%"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Regiões Produtoras",
      value: "12",
      description: "Estados membros participantes",
      trend: "+8%"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-glow" />,
      title: "Balança Comercial",
      value: "$2.4B",
      description: "Contribuição mensal registrada",
      trend: "+42%"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Estatísticas em Tempo Real
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparência total dos dados comerciais do Corredor Lobito Digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  {stat.icon}
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </CardTitle>
                <h3 className="font-semibold text-foreground mb-1">
                  {stat.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Gerar Relatório PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Statistics;