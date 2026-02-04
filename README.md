# MAMA ÁFRICA – LA BONNE BOUFFE

Site para o Chef Sam, oferecendo uma experiência imersiva de gastronomia africana autêntica em São Paulo.

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abrir no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
/src
  /app
    page.tsx (Homepage)
    cardapio/page.tsx
    sobre/page.tsx
    galeria/page.tsx
    privacidade/page.tsx
    termos/page.tsx
  /components
    Unidades.tsx
    WhatsAppButton.tsx
    CookieConsent.tsx
    Navigation.tsx
    Footer.tsx
  /data
    unidades.ts
    menu.ts
```

## ✨ Funcionalidades

- 🏠 **Homepage** - Experiência imersiva com hero section e seções sobre o Chef Sam
- 📋 **Cardápio Completo** - Menu organizado por categorias com espaços para fotos
- 🏢 **Unidades** - Informações sobre Tatuapé e Pinheiros
- 📸 **Galeria** - Fotos dos pratos e ambiente
- 📱 **WhatsApp FAB** - Botão flutuante com seleção de unidade
- 🍪 **Cookie Consent** - Popup de consentimento LGPD
- 📄 **Páginas Legais** - Política de Privacidade e Termos de Uso

## 🎨 Design System

- **Cores:**
  - Primary (Ouro): `#D97706`
  - Terracotta: `#9C4221`
  - Emerald: `#065F46`
  - Charcoal: `#1A1A1A`
  - Background Light: `#FDFCFB`

- **Tipografia:**
  - Display: Playfair Display (serif)
  - Body: Plus Jakarta Sans (sans-serif)

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 🔗 Unidades

- **Tatuapé**: Rua Cantagalo, 230 - Tatuapé, São Paulo
- **Pinheiros**: Rua Mourato Coelho, 1004 - Pinheiros, São Paulo

## 🛠️ Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## 📄 Licença

© 2026 Mama Africa La Bonne Bouffe
