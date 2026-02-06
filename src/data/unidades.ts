// src/data/unidades.ts

export const unidades = {
    tatuape: {
      id: "tatuape",
      nome: "Mama Africa La Bonne Bouffe - Tatuapé",
      endereco: "Rua Cantagalo, 230 - Tatuapé, São Paulo",
      googleMaps: "https://maps.app.goo.gl/Rm66YRwLWQ3tfEFX8",
      whatsapp: "+5511970474949", // Apenas números para a API
      horarios: "Ter - Sáb\n12h - 22h\nDom e feriados\n12h - 18h",
    },
    pinheiros: {
      id: "pinheiros",
      nome: "Mama Africa La Bonne Bouffe - Pinheiros",
      endereco: "Rua Mourato Coelho, 1004 - Pinheiros, São Paulo",
      googleMaps: "https://maps.app.goo.gl/e8i3xgLtgvngAuqf6",
      whatsapp: "5511970474949",
      horarios: "Ter - Sáb\n12h - 22h\nDom e feriados\n12h - 18h",
    }
  } as const;
  
  export type UnidadeSlug = keyof typeof unidades;