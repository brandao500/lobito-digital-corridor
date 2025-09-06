import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import heroImage from "@/assets/hero-corredor-lobito.jpg";
import { TrendingUp, Shield, Train } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Corredor Lobito
            <span className="block text-accent"> Digital</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conectando governos, países, produtores e clientes em um{" "}
            <span className="text-accent font-semibold">ecossistema digital de negócios</span>, 
            com inovação, segurança e conformidade regulatória.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-6 py-3 text-base bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
              <TrendingUp className="w-5 h-5 mr-2" />
              Preços acordados pelos Estados
            </Badge>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Solicitar Acesso
            </Button>
            <Link href="/estatisticas">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold border-white text-primary hover:bg-white hover:text-primary transition-all duration-300"
              >
                Estatísticas Públicas
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;