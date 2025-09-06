"use client";

import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Governança", href: "#governance" },
    { label: "Logística", href: "#logistics" },
    { label: "Estatísticas", href: "/estatisticas" }
  ];

  const countries = [
    { name: "Angola", flag: "🇦🇴" },
    { name: "RDC", flag: "🇨🇩" },
    { name: "Zâmbia", flag: "🇿🇲" },
    { name: "Tanzânia", flag: "🇹🇿" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-3 text-white">
              Corredor Lobito Digital
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Plataforma digital governamental conectando países, produtores e clientes 
              no Corredor de Lobito com conformidade regulatória.
            </p>
            
            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contato@corridorlobito.gov</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+244 900 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Luanda, Angola</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold text-white mb-3">Países Membros</h4>
            <div className="space-y-2">
              {countries.map((country, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-gray-300 text-sm">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              {currentYear} Corredor Lobito Digital. Todos os direitos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Language Badge */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Português
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
