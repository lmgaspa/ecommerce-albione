import { descriptions } from './descriptions';

export interface Book {
  id: string;
  title: string;
  imageUrl: string;
  price: string;
  description: string;
  author: string;
  additionalInfo: Record<string, string>;
  category: string;
  relatedBooks: { title: string; imageUrl: string; price: string; category: string; id: string }[];
  stock: number;
}

const albioneSouzaSilva = "albione Souza Silva";
const selo = "Via Litterarum";
const idioma = "Português";

export const books: Book[] = [
  {
    id: "daterra",
    title: "Os despossuídos da terra – Edição especial: 100 anos de Euclides Neto",
    imageUrl: "/images/daterra.webp",
    price: "R$59,90",
    description: descriptions.daterra,
    author: albioneSouzaSilva,
    additionalInfo: {
      Peso: "460 g",
      Dimensões: "16 × 23 × 1,8 cm",
      Selo: selo,
      ISBN: "978-65-86676-41-9",
      Edição: "1ª",
      "Ano de Publicação": "2021",
      "Nº de Páginas": "188",
      Idioma: idioma
    },
    category: "Romance",
    stock: 100,
    relatedBooks: [
      { id: "cido", title: "Cido, O Pequeno Cidadão", imageUrl: "/images/cido.webp", price: "R$20,00", category: "Infanto-Juvenil" }
    ]
  },
  {
    id: "cido",
    title: "Cido, O Pequeno Cidadão",
    imageUrl: "/images/cido.webp",
    price: "R$20,00",
    description: descriptions.cido,
    author: albioneSouzaSilva,
    additionalInfo: {
      Peso: "150 g",
      Dimensões: "29 × 21 × 1 cm",
      Selo: selo,
      ISBN: "978-85-8151-205-1",
      Edição: "1ª",
      "Ano de Publicação": "2023",
      "Nº de Páginas": "24",
      Idioma: idioma
    },
    category: "Infanto-Juvenil",
    stock: 100,
    relatedBooks: [
      { id: "daterra", title: "Os despossuídos da terra", imageUrl: "/images/daterra.webp", price: "R$59,90", category: "Romance" }
    ]
  }
];
