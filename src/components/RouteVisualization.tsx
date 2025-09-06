"use client";

import { Train, MapPin, Truck, Navigation } from "lucide-react";

const RouteVisualization = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
      {/* Map Grid Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px',
          animation: 'gridShift 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Header Section */}
      <div className="relative z-10 text-center mb-8" style={{animation: 'fade-in 1s ease-out'}}>
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
          <Navigation className="w-5 h-5 text-blue-600" style={{animation: 'spin-slow 8s linear infinite'}} />
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Mapa da Rota</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight" style={{animation: 'slide-up 0.8s ease-out'}}>Corredor de Lobito - Rota Comercial</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{animation: 'slide-up-delay 0.8s ease-out 0.2s both'}}>Corredor multimodal estratégico conectando as regiões mineiras da África Central ao Oceano Atlântico</p>
      </div>
      
      {/* Improved Africa Continent Map with Route */}
      <div className="relative max-w-5xl mx-auto" style={{animation: 'fade-in-up 0.6s ease-out both'}}>
        <svg className="w-full h-[450px]" viewBox="0 0 700 450" style={{ maxHeight: '450px' }}>
          {/* CSS Animations */}
          <defs>
            <style>
              {`
                @keyframes routeFlow {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes routeFlowAlt {
                  0% { stroke-dashoffset: 80; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes pulse {
                  0%, 100% { opacity: 1; transform: scale(1); }
                  50% { opacity: 0.7; transform: scale(1.1); }
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-3px); }
                }
                @keyframes glow {
                  0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3)); }
                  50% { filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.6)); }
                }
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                @keyframes slide-up {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-up-delay {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                  from { opacity: 0; transform: translateY(30px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes spin-slow {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes gridShift {
                  0%, 100% { transform: translate(0, 0); }
                  50% { transform: translate(2px, 2px); }
                }
                
                .route-main { 
                  animation: routeFlow 3s ease-in-out infinite;
                }
                .route-alt { 
                  animation: routeFlowAlt 2.5s ease-in-out infinite;
                }
                .country-marker { 
                  animation: pulse 2s ease-in-out infinite;
                }
                .country-marker:hover { 
                  animation: pulse 1s ease-in-out infinite;
                }
                .floating-label { 
                  animation: float 3s ease-in-out infinite;
                }
                .continent-glow { 
                  animation: glow 4s ease-in-out infinite;
                }
              `}
            </style>
            
            {/* Arrow markers */}
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
             refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#059669" />
            </marker>
            <marker id="arrowhead-alt" markerWidth="10" markerHeight="7" 
             refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#D97706" />
            </marker>
            
            {/* Gradient for animated routes */}
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#059669" stopOpacity="1" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
            </linearGradient>
            
            <linearGradient id="routeGradientAlt" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#D97706" stopOpacity="1" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* More accurate Africa Continent Outline with glow effect */}
          <path
            d="M 200 50 
               C 220 45, 250 40, 280 45
               C 320 50, 360 55, 400 65
               C 440 75, 480 90, 510 110
               C 530 130, 540 150, 545 170
               C 550 190, 545 210, 540 230
               C 535 250, 530 270, 525 290
               C 520 310, 515 330, 510 350
               C 500 370, 485 385, 465 395
               C 445 405, 420 410, 395 405
               C 370 400, 345 390, 320 380
               C 295 370, 270 360, 245 350
               C 220 340, 195 330, 175 315
               C 155 300, 140 280, 130 260
               C 120 240, 115 220, 110 200
               C 105 180, 110 160, 120 140
               C 130 120, 145 105, 165 95
               C 185 85, 200 70, 200 50 Z"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="2"
            style={{filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))', animation: 'glow 4s ease-in-out infinite'}}
          />
          
          {/* Animated Country Markers */}
          {/* DRC - Katanga */}
          <circle cx="280" cy="220" r="10" fill="#3B82F6" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <circle cx="280" cy="220" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <text x="295" y="225" className="text-sm font-bold fill-blue-700" style={{animation: 'float 3s ease-in-out infinite'}}>RDC</text>
          
          {/* Zambia - Copperbelt */}
          <circle cx="340" cy="260" r="10" fill="#10B981" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <circle cx="340" cy="260" r="15" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <text x="355" y="265" className="text-sm font-bold fill-green-700" style={{animation: 'float 3s ease-in-out infinite'}}>Zâmbia</text>
          
          {/* Angola - Lobito */}
          <circle cx="220" cy="280" r="10" fill="#EF4444" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <circle cx="220" cy="280" r="15" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <text x="235" y="285" className="text-sm font-bold fill-red-700" style={{animation: 'float 3s ease-in-out infinite'}}>Angola</text>
          
          {/* Tanzania - Dar es Salaam */}
          <circle cx="450" cy="200" r="10" fill="#F59E0B" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <circle cx="450" cy="200" r="15" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.3" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          <text x="465" y="205" className="text-sm font-bold fill-amber-700" style={{animation: 'float 3s ease-in-out infinite'}}>Tanzânia</text>
          
          {/* Animated Main Lobito Corridor Route */}
          <path
            d="M 280 220 Q 310 240 340 260 Q 280 270 220 280"
            stroke="url(#routeGradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="12,6"
            style={{animation: 'routeFlow 3s ease-in-out infinite'}}
            opacity="0.9"
          />
          
          {/* Animated Alternative Route to Tanzania */}
          <path
            d="M 340 260 Q 395 230 450 200"
            stroke="url(#routeGradientAlt)"
            strokeWidth="5"
            fill="none"
            strokeDasharray="10,5"
            style={{animation: 'routeFlowAlt 2.5s ease-in-out infinite'}}
            opacity="0.8"
          />
          
          {/* Moving dots along routes */}
          <circle r="4" fill="#059669" className="drop-shadow-sm">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#mainRoute"/>
            </animateMotion>
          </circle>
          
          <circle r="3" fill="#D97706" className="drop-shadow-sm">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#altRoute"/>
            </animateMotion>
          </circle>
          
          {/* Hidden paths for motion */}
          <path id="mainRoute" d="M 280 220 Q 310 240 340 260 Q 280 270 220 280" fill="none" opacity="0"/>
          <path id="altRoute" d="M 340 260 Q 395 230 450 200" fill="none" opacity="0"/>
          
          {/* Animated Route Labels */}
          <text x="290" y="295" className="text-sm font-semibold fill-green-700" style={{animation: 'float 3s ease-in-out infinite'}}>Corredor Principal</text>
          <text x="395" y="225" className="text-sm font-semibold fill-orange-700" style={{animation: 'float 3s ease-in-out infinite'}}>Rota Alternativa</text>
          
          {/* Ocean Labels with animation */}
          <text x="80" y="300" className="text-lg font-bold fill-blue-600" style={{animation: 'float 3s ease-in-out infinite'}}>Oceano Atlântico</text>
          <text x="480" y="170" className="text-lg font-bold fill-blue-600" style={{animation: 'float 3s ease-in-out infinite'}}>Oceano Índico</text>
          
          {/* Animated Direction Arrows */}
          <line x1="250" y1="275" x2="230" y2="278" 
                stroke="#059669" strokeWidth="3" markerEnd="url(#arrowhead)" style={{animation: 'pulse 2s ease-in-out infinite'}} />
          
          <line x1="420" y1="210" x2="440" y2="202" 
                stroke="#D97706" strokeWidth="3" markerEnd="url(#arrowhead-alt)" style={{animation: 'pulse 2s ease-in-out infinite'}} />
        </svg>
        
        {/* Enhanced Country Information Cards with animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* DRC */}
          <div className="bg-white/95 backdrop-blur-sm border border-blue-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.1s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-sm" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
              <h4 className="font-bold text-gray-800 text-base">RDC - Katanga</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Origem das matérias-primas minerais</p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" style={{animation: 'bounce 1s ease-in-out infinite'}} />
              <span className="text-xs text-blue-600 font-semibold">Mineração Ativa</span>
            </div>
          </div>
          
          {/* Zambia */}
          <div className="bg-white/95 backdrop-blur-sm border border-green-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.2s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
              <h4 className="font-bold text-gray-800 text-base">Zâmbia - Copperbelt</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Hub central de trânsito</p>
            <div className="flex items-center gap-2">
              <Train className="w-4 h-4 text-green-500" style={{animation: 'bounce 1s ease-in-out infinite'}} />
              <span className="text-xs text-green-600 font-semibold">Infraestrutura Moderna</span>
            </div>
          </div>
          
          {/* Angola */}
          <div className="bg-white/95 backdrop-blur-sm border border-red-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
              <h4 className="font-bold text-gray-800 text-base">Angola - Lobito</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Porto de destino atlântico</p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" style={{animation: 'bounce 1s ease-in-out infinite'}} />
              <span className="text-xs text-red-600 font-semibold">Acesso Principal</span>
            </div>
          </div>
          
          {/* Tanzania */}
          <div className="bg-white/95 backdrop-blur-sm border border-amber-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.4s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-amber-500 rounded-full shadow-sm" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
              <h4 className="font-bold text-gray-800 text-base">Tanzânia - Dar es Salaam</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Rota alternativa ao Índico</p>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-500" style={{animation: 'bounce 1s ease-in-out infinite'}} />
              <span className="text-xs text-amber-600 font-semibold">Porto Estratégico</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Route Statistics with animations */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.5s'}}>
            <div className="text-2xl font-bold text-blue-700 mb-2" style={{animation: 'pulse 2s ease-in-out infinite'}}>1,344</div>
            <div className="text-sm text-gray-700 font-medium">Quilômetros</div>
            <div className="text-xs text-gray-500 mt-1">Extensão Total</div>
          </div>
          <div className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.6s'}}>
            <div className="text-2xl font-bold text-green-700 mb-2" style={{animation: 'pulse 2s ease-in-out infinite'}}>4</div>
            <div className="text-sm text-gray-700 font-medium">Países</div>
            <div className="text-xs text-gray-500 mt-1">Conectados</div>
          </div>
          <div className="bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.7s'}}>
            <div className="text-2xl font-bold text-amber-700 mb-2" style={{animation: 'pulse 2s ease-in-out infinite'}}>72h</div>
            <div className="text-sm text-gray-700 font-medium">Trânsito</div>
            <div className="text-xs text-gray-500 mt-1">Tempo Médio</div>
          </div>
          <div className="bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out both', animationDelay: '0.8s'}}>
            <div className="text-2xl font-bold text-purple-700 mb-2" style={{animation: 'pulse 2s ease-in-out infinite'}}>24/7</div>
            <div className="text-sm text-gray-700 font-medium">Operação</div>
            <div className="text-xs text-gray-500 mt-1">Contínua</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteVisualization;
