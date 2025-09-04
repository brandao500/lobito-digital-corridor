# Corredor Lobito Digital - Next.js

Plataforma digital governamental conectando países, produtores e clientes no Corredor de Lobito com conformidade regulatória e segurança estatal.

## Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **ShadCN UI** - Componentes de interface moderna
- **React Query** - Gerenciamento de estado servidor
- **Lucide React** - Ícones modernos

## Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Navegue para o diretório
cd lobito-digital-corridor

# Instale as dependências
npm install
# ou
bun install
```

## Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
bun dev

# Acesse http://localhost:3000
```

## Build

```bash
# Build para produção
npm run build

# Inicie o servidor de produção
npm start
```

## Estrutura do Projeto

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── not-found.tsx      # Página 404
│   └── providers.tsx      # Providers client-side
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes ShadCN UI
│   │   ├── About.tsx
│   │   ├── Governance.tsx
│   │   ├── Hero.tsx
│   │   ├── Logistics.tsx
│   │   ├── Navbar.tsx
│   │   └── Statistics.tsx
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários
│   └── assets/           # Imagens e recursos
├── public/               # Arquivos estáticos
└── ...
```

## Componentes

### Seções Principais
- **Hero** - Seção principal com imagem de fundo
- **Statistics** - Estatísticas do corredor
- **About** - Informações sobre o projeto
- **Governance** - Estrutura de governança
- **Logistics** - Informações logísticas
- **Navbar** - Navegação responsiva

### UI Components
Utiliza a biblioteca ShadCN UI com componentes como:
- Button, Card, Badge
- Navigation Menu, Dropdown
- Toast, Tooltip
- E muitos outros...

## Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Servidor de produção
- `npm run lint` - Verificação de código
- `npm run type-check` - Verificação de tipos

## Notas da Conversão

Este projeto foi convertido de Vite + React para Next.js 14 com App Router:

- Migração completa para Next.js App Router
- Configuração TypeScript atualizada
- Tailwind CSS configurado para Next.js
- Componentes ShadCN UI preservados
- Componentes client-side marcados adequadamente
- Remoção de dependências Vite
- ESLint configurado para Next.js

## Deploy

O projeto está pronto para deploy em plataformas como:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Outros provedores que suportam Next.js

## Licença

Este projeto é propriedade do Corredor Lobito Digital.
