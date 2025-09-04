'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Corredor Lobito
            </div>
          </div>

          {/* Navigation Menu - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('statistics')}
              className={cn(
                "text-sm font-medium hover:underline transition-colors duration-300",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Estatísticas
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={cn(
                "text-sm font-medium hover:underline transition-colors duration-300",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('governance')}
              className={cn(
                "text-sm font-medium hover:underline transition-colors duration-300",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Governança
            </button>
            <button 
              onClick={() => scrollToSection('logistics')}
              className={cn(
                "text-sm font-medium hover:underline transition-colors duration-300",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Logística
            </button>
          </div>

          {/* Right Side - Language & Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <Globe className={cn(
                "h-4 w-4 transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-white/90"
              )} />
              <Badge variant={isScrolled ? "secondary" : "outline"} className={cn(
                "text-xs font-medium transition-all duration-300",
                !isScrolled && "border-white/30 text-white/90 hover:bg-white/10"
              )}>
                PT
              </Badge>
            </div>

            {/* Action Buttons */}
            <Button 
              variant={isScrolled ? "ghost" : "outline"} 
              size="sm"
              className={cn(
                "transition-all duration-300",
                !isScrolled && "border-white/30 text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              Entrar
            </Button>
            
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              size="sm"
              className={cn(
                "transition-all duration-300",
                !isScrolled && "border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white"
              )}
            >
              Solicitar Acesso
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;