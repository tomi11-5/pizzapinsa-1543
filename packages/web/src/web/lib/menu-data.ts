export type MenuItem = { name: string; desc: string; price: string };
export type MenuCategory = { id: string; label: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "pizzas",
    label: "Pizzas clásicas",
    items: [
      { name: "Margherita", desc: "Tomate San Marzano, fior di latte, albahaca fresca, aceite de oliva virgen extra", price: "10 €" },
      { name: "Diavola", desc: "Tomate, mozzarella, salami picante calabrés, guindilla", price: "12 €" },
      { name: "Prosciutto e Funghi", desc: "Tomate, mozzarella, jamón cocido, champiñones frescos", price: "13 €" },
      { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, parmesano, provolone, orégano", price: "13,5 €" },
      { name: "Capricciosa", desc: "Tomate, mozzarella, jamón, alcachofas, champiñones, aceitunas", price: "14 €" },
      { name: "Tonno e Cipolla", desc: "Tomate, mozzarella, atún, cebolla roja, orégano", price: "13 €" },
    ],
  },
  {
    id: "pinsas",
    label: "Pinsas",
    items: [
      { name: "Pinsa Romana Classica", desc: "Masa madre 72h, tomate, mozzarella, albahaca", price: "11 €" },
      { name: "Pinsa Burrata e Pistacchio", desc: "Burrata cremosa, pesto de pistacho, tomates cherry confitados", price: "16 €" },
      { name: "Pinsa Tartufo", desc: "Crema de trufa, mozzarella, champiñones porcini, parmesano", price: "17 €" },
      { name: "Pinsa Norma", desc: "Berenjena frita, ricotta salada, tomate, albahaca", price: "14 €" },
      { name: "Pinsa Nduja", desc: "Nduja calabresa, mozzarella, miel picante, rúcula", price: "15,5 €" },
    ],
  },
  {
    id: "entrantes",
    label: "Entrantes",
    items: [
      { name: "Burrata Pugliese", desc: "Burrata fresca, tomates de temporada, pesto de albahaca", price: "12 €" },
      { name: "Bruschette Miste", desc: "Selección de 4 bruschette con tomate, jamón y setas", price: "10 €" },
      { name: "Focaccia Romana", desc: "Focaccia recién horneada con aceite de oliva y romero", price: "6 €" },
      { name: "Antipasto della Casa", desc: "Embutidos y quesos italianos seleccionados", price: "15 €" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Vino de la casa (copa)", desc: "Tinto o blanco italiano de importación", price: "4 €" },
      { name: "Peroni / Moretti", desc: "Cerveza italiana 33cl", price: "3,5 €" },
      { name: "Agua con gas / sin gas", desc: "50cl", price: "2 €" },
      { name: "Refrescos", desc: "Coca-Cola, Fanta, Sprite", price: "2,5 €" },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    items: [
      { name: "Tiramisú Casero", desc: "Receta tradicional con mascarpone y café", price: "5,5 €" },
      { name: "Panna Cotta", desc: "Con coulis de frutos rojos", price: "5 €" },
      { name: "Cannolo Siciliano", desc: "Relleno de ricotta y pepitas de chocolate", price: "5 €" },
    ],
  },
];
