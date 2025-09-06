'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { label: 'Início', href: '/', type: 'link' },
    { label: 'Estatísticas', href: '/estatisticas', type: 'link' },
    { label: 'Sobre', action: () => scrollToSection('about'), type: 'scroll' },
    { label: 'Governança & Compliance', action: () => scrollToSection('governance'), type: 'scroll' },
    { label: 'Logística', action: () => scrollToSection('logistics'), type: 'scroll' },
    { label: 'Visualização de Rotas', action: () => scrollToSection('route-visualization'), type: 'scroll' },
  ];

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
            <Link href="/" className={cn(
              "text-xl font-bold transition-colors duration-300 hover:opacity-80",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Corredor Lobito
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.label}
                  href={item?.href || ''}
                  className={cn(
                    "text-sm font-medium hover:underline transition-colors duration-300",
                    pathname === item?.href
                      ? (isScrolled ? "text-primary" : "text-accent")
                      : (isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white")
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={cn(
                    "text-sm font-medium hover:underline transition-colors duration-300",
                    isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Right Side - Language & Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center space-x-1">
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

            {/* Action Buttons - Desktop */}
            <div className="hidden sm:flex items-center space-x-2">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-md transition-colors duration-300",
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "md:hidden border-t transition-all duration-300",
            isScrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-white/20 bg-black/50 backdrop-blur-md"
          )}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.label}
                    href={item.href || ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                      pathname === item.href
                        ? (isScrolled ? "text-primary bg-muted" : "text-accent bg-white/10")
                        : (isScrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10")
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.action?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                      isScrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2">
                <Button 
                  variant={isScrolled ? "ghost" : "outline"} 
                  className={cn(
                    "w-full transition-all duration-300",
                    !isScrolled && "border-white/30 text-white/10 hover:bg-white/10 hover:text-white"
                  )}
                >
                  Entrar
                </Button>
                <Button 
                  variant={isScrolled ? "default" : "outline"} 
                  className={cn(
                    "w-full transition-all duration-300",
                    !isScrolled && "border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white"
                  )}
                >
                  Solicitar Acesso
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;