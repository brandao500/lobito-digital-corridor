import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Building, Eye, Users } from "lucide-react";
import CountryFlags from "./CountryFlags";

const Governance = () => {
 
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
       <CountryFlags /> 
       

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