import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../src/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corredor Lobito Digital - Ecossistema de Negócios Governamental',
  description: 'Plataforma digital governamental conectando países, produtores e clientes no Corredor de Lobito com conformidade regulatória e segurança estatal',
  authors: [{ name: 'Corredor Lobito Digital' }],
  openGraph: {
    title: 'Corredor Lobito Digital - Ecossistema de Negócios Governamental',
    description: 'Plataforma digital governamental conectando países, produtores e clientes no Corredor de Lobito com conformidade regulatória e segurança estatal',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Navbar />
            <Toaster />
            <Sonner />
            {children}
            <Footer />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
