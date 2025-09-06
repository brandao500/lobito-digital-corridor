import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, Users, Building, DollarSign } from "lucide-react"
import { ProductsChart } from "@/components/charts/ProductsChart"
import { BuyersRegionChart } from "@/components/charts/BuyersRegionChart"
import { OriginCountriesChart } from "@/components/charts/OriginCountriesChart"
import { TradeBalanceChart } from "@/components/charts/TradeBalanceChart"

export default function EstatisticasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Estatísticas Públicas</h1>
              <p className="text-gray-600 mt-2">Dados transparentes sobre o movimento comercial do Corredor Lobito Digital</p>
            </div>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Gerar PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="group relative overflow-hidden bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
              <div>
                <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Taxa de Produtos</CardTitle>
                <div className="w-8 h-0.5 bg-blue-500 mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-slate-900 mb-1">5.2M</div>
              <p className="text-sm text-slate-500 font-medium">Produtos comercializados</p>
              <div className="absolute bottom-0 right-0 text-6xl font-bold text-blue-500/5 select-none">5.2M</div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
              <div>
                <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Países Compradores</CardTitle>
                <div className="w-8 h-0.5 bg-emerald-500 mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                <Users className="h-5 w-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-slate-900 mb-1">45+</div>
              <p className="text-sm text-slate-500 font-medium">Mercados ativos</p>
              <div className="absolute bottom-0 right-0 text-6xl font-bold text-emerald-500/5 select-none">45+</div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-violet-600/10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
              <div>
                <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Estados Membros</CardTitle>
                <div className="w-8 h-0.5 bg-violet-500 mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="p-2 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors duration-300">
                <Building className="h-5 w-5 text-violet-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
              <p className="text-sm text-slate-500 font-medium">Angola, Congo, Zâmbia</p>
              <div className="absolute bottom-0 right-0 text-6xl font-bold text-violet-500/5 select-none">3</div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
              <div>
                <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Volume Financeiro</CardTitle>
                <div className="w-8 h-0.5 bg-amber-500 mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors duration-300">
                <DollarSign className="h-5 w-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-slate-900 mb-1">$4.2B</div>
              <p className="text-sm text-slate-500 font-medium">USD em 2024</p>
              <div className="absolute bottom-0 right-0 text-6xl font-bold text-amber-500/5 select-none">$4.2B</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Products Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Produtos Mais Comercializados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductsChart />
            </CardContent>
          </Card>

          {/* Buyers Region Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Região dos Compradores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BuyersRegionChart />
            </CardContent>
          </Card>

          {/* Origin Countries Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                País de Origem dos Produtos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <OriginCountriesChart />
            </CardContent>
          </Card>

          {/* Trade Balance Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Contribuição na Balança Comercial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradeBalanceChart />
            </CardContent>
          </Card>
        </div>

        {/* Transparency Section */}
        <Card className="bg-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Transparência Total</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Todas as estatísticas são atualizadas em tempo real e auditadas pela AI Auditor, garantindo 
              total transparência nas operações do Corredor Lobito Digital.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
