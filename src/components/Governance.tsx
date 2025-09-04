import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Building, Eye, Users } from "lucide-react";

const Governance = () => {
  const countries = [
    { name: "Angola", flag: "🇦🇴" },
    { name: "República Democrática do Congo", flag: "🇨🇩" },
    { name: "Zâmbia", flag: "🇿🇲" },
    { name: "Tanzânia", flag: "🇹🇿" }
  ];

  const partners = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      name: "Nossa Seguros",
      role: "Cobertura Institucional",
      description: "Seguros especializados para operações governamentais"
    },
    {
      icon: <Building className="w-8 h-8 text-secondary" />,
      name: "BAI S.A",
      role: "Parceiro Financeiro",
      description: "Processamento seguro de transações internacionais"
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      name: "AI Auditor",
      role: "Monitoramento Contínuo",
      description: "Auditoria automatizada com notificações em tempo real"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Users className="w-4 h-4 mr-2" />
            Governança Estatal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Propriedade dos Estados Membros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plataforma regulada pela <span className="font-semibold text-primary">Comissão Executiva</span>, 
            com conformidade fiscal e regulatória assegurada pelos estados participantes.
          </p>
        </div>

        {/* Countries Representation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            União dos Países Membros
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {countries.map((country, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <p className="font-semibold text-foreground">{country.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  {partner.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {partner.name}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  {partner.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">
              Segurança Estatal Garantida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;