// Estrutura completa do cardápio em PT-BR
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  priceForTwo?: string;
  image?: string; // Para adicionar fotos depois
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "cervejas",
    title: "Cervejas",
    items: [
      { name: "Heineken 350 ml", price: "R$ 15,00" },
      { name: "Colorado", price: "R$ 24,00" },
      { name: "Colorado Appia", price: "R$ 24,00" },
      { name: "Original", price: "R$ 18,00" },
      { name: "Heineken 600 ml", price: "R$ 20,00" },
      { name: "Stella Artois 600 ml", price: "R$ 18,00" },
      { name: "Budweiser 600 ml", price: "R$ 18,00" },
      { name: "Garrafa (a partir de)", price: "R$ 40,00" },
      { name: "Stella 350 ml", price: "R$ 15,00" },
      { name: "Corona 350 ml", price: "R$ 16,00" },
      { name: "Eisenbahn 600 ml", price: "R$ 18,00" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Coca-Cola", price: "R$ 9,00" },
      { name: "Água sem gás", price: "R$ 6,00" },
      { name: "Água com gás", price: "R$ 7,00" },
      { name: "Água tônica", price: "R$ 9,00" },
      { name: "Suco Del Valle", price: "R$ 10,00" },
      { name: 'Suco natural "Bissap"', price: "R$ 15,00" },
      { name: 'Suco natural "Gengibre"', price: "R$ 16,00" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks (Chef Sam)",
    items: [
      {
        name: "Chef Sam",
        description: "Fernet, gengibre, limão e rapadura",
        price: "R$ 35,00",
      },
      {
        name: "Africanize",
        description: "Hibisco, vodka, leite condensado, limão e açúcar",
        price: "R$ 35,00",
      },
      {
        name: "Man Power",
        description: "Feu de Sexe (Raki), raízes africanas amargas, limão e gengibre",
        price: "R$ 37,00",
      },
      { name: "Man Power 2", price: "R$ 39,00" },
      {
        name: "Odontol",
        description: '"caipirinha africana" - Gengibre, limão, cachaça da casa e açúcar',
        price: "R$ 27,99",
      },
      {
        name: "Bissamo",
        description: "sem álcool – hibisco",
        price: "R$ 24,99",
      },
      {
        name: "Arkis",
        description: "sem álcool – gengibre",
        price: "R$ 26,99",
      },
    ],
  },
  {
    id: "entradas",
    title: "Entradas (Entrées)",
    items: [
      {
        name: "Misto de Frutos do Mar",
        description: "Mexilhão, lula, polvo, anéis de lula, camarão e carne de siri",
        price: "R$ 69,99",
      },
      {
        name: "Purê d'Avocat",
        description: "Alface, abacate, tomate, azeite e cenoura",
        price: "R$ 39,99",
      },
      {
        name: "Salada Simples",
        description: "Alface ou rúcula, cenoura, tomate e cebola",
        price: "R$ 22,99",
      },
      {
        name: "Camaroun",
        description: "Salada Completa",
        price: "R$ 67,99",
      },
    ],
  },
  {
    id: "petiscos",
    title: "Petiscos",
    items: [
      { name: "Milho & amendoim torrados", price: "R$ 7,00" },
      { name: "Arroz Jellof", price: "R$ 20,99" },
      { name: "Banana da terra frita", price: "R$ 34,99" },
      { name: "Mandioca frita", price: "R$ 34,99" },
      { name: "Batata frita", price: "R$ 22,99" },
      {
        name: "Porção de frango",
        description: "1kg – coxinha da asa frita com banana ou frango",
        price: "R$ 62,99",
      },
      { name: "Porção de camarão", price: "R$ 79,99" },
      {
        name: "Poulet Roti",
        description: "1kg – tulipas assadas ou fritas com molho da casa",
        price: "R$ 62,99",
      },
    ],
  },
  {
    id: "pratos-principais",
    title: "Pratos Principais",
    items: [
      {
        name: "Attieke",
        price: "R$ 69,99",
        priceForTwo: "R$ 137,99",
        description: "1 pessoa | 2 pessoas",
      },
      {
        name: "Attieke com peixe assado (carapau)",
        price: "R$ 169,99",
      },
      {
        name: "Salmão",
        price: "R$ 120,00",
        description: "por pessoa",
      },
      {
        name: "Poulet DG (Camarões)",
        price: "R$ 72,99",
        priceForTwo: "R$ 139,99",
        description: "1 pessoa | 2 pessoas",
      },
      {
        name: "Poulet DG",
        description: "opção vegana (shimeji e cogumelo)",
        price: "R$ 65,99",
        priceForTwo: "R$ 125,99",
      },
      {
        name: "Nelson Mandela",
        price: "R$ 69,99",
        priceForTwo: "R$ 129,99",
        description: "1 pessoa | 2 pessoas",
      },
      {
        name: "Ndolé",
        description: "vegano",
        price: "R$ 67,99",
      },
      {
        name: "Ndolé com camarão",
        price: "R$ 72,99",
        priceForTwo: "R$ 140,99",
        description: "1 pessoa | 2 pessoas",
      },
      {
        name: "Poisson Braisé",
        description: "peixe assado",
        price: "a partir de R$ 128,99",
      },
      { name: "Monique", price: "R$ 67,99" },
      {
        name: "Mufet",
        description: "opção com camarão + R$ 8,00",
        price: "R$ 69,99",
      },
      { name: "Egussi", price: "R$ 74,99" },
      {
        name: "Nkounmkoum",
        description: "Sem banana da terra frita",
        price: "R$ 69,99",
        priceForTwo: "R$ 139,99",
      },
      {
        name: "Nkounmkoum",
        description: "Com camarão ou carne + banana frita",
        price: "R$ 75,99",
        priceForTwo: "R$ 144,99",
      },
      { name: "Labouffe", price: "R$ 62,99" },
      {
        name: "Tchadèque do Mali / Muamba de Angola",
        price: "R$ 67,99",
      },
      {
        name: "Espaguetti Mama África",
        description: "Com camarão",
        price: "R$ 74,99",
        priceForTwo: "R$ 129,99",
      },
      {
        name: "Espaguetti Mama África ao Fruto do Mar",
        description: "Com salmão",
        price: "R$ 120,00",
        priceForTwo: "R$ 210,00",
      },
      {
        name: "Zumbadadeira",
        price: "R$ 69,99",
        priceForTwo: "R$ 138,99",
        description: "1 pessoa | 2 pessoas",
      },
      {
        name: "Papadjape",
        price: "R$ 74,99",
        priceForTwo: "R$ 145,99",
        description: "1 pessoa | 2 pessoas",
      },
      {
        name: "Papadjape 2",
        price: "R$ 78,99",
        priceForTwo: "R$ 149,99",
        description: "1 pessoa | 2 pessoas",
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      { name: "Karamanana", price: "R$ 27,99" },
      { name: "Bambam", price: "R$ 27,99" },
      { name: "Ndrere", price: "R$ 21,99" },
      { name: "Petit Gateau", price: "R$ 27,99" },
    ],
  },
  {
    id: "vinhos",
    title: "Vinhos",
    items: [
      {
        name: "Vinho",
        description: "taça ou garrafa",
        price: "R$ 20,00",
      },
      { name: "Nederburg The Winemaster's 750ml", price: "R$ 170,00" },
      { name: "Nederburg The Winemaster's 250ml", price: "R$ 43,00" },
      { name: "Nederburg Rosé", price: "R$ 115,00" },
      { name: "Nederburg Shiraz", price: "R$ 115,00" },
      { name: "Two Oceans", price: "R$ 115,00" },
      { name: "Obikwa", price: "R$ 120,00" },
      { name: "Colde Kaan", price: "R$ 120,00" },
      { name: "Coffee Pinotage", price: "R$ 125,00" },
      { name: "Footprint", price: "R$ 125,00" },
      { name: "Vinho Baronne", price: "R$ 180,00" },
    ],
  },
];
