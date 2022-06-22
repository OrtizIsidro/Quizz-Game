const categories = {
  "Conocimiento General": 9,
  Libros: 10,
  Peliculas: 11,
  Musica: 12,
  "Musicales y Teatros": 13,
  Television: 14,
  "Video Juegos": 15,
  "Juegos de mesa": 16,
  Comics: 29,
  "Anime Japones y Manga": 31,
  "Dibujos animados": 32,
  "Cienca y Naturaleza": 17,
  Computacion: 18,
  Matematicas: 19,
  Gadgets: 30,
  Mitologia: 20,
  Deportes: 21,
  Geografia: 22,
  Historia: 23,
  Politica: 24,
  Arte: 25,
  Celebridades: 26,
  Animales: 27,
  Vehiculos: 28,
};
const Difficulty = {
  Facil: "easy",
  Medio: "medium",
  Dificil: "hard",
};
const Type = {
  "Multiple Choice": "multiple",
  "Verdadero o Falso": "boolean",
  "Cualquier Tipo": "",
};
export const layaoutElements = [
  {
    title: "selecciona la categoria",
    items: Object.entries(categories),
  },
  {
    title: "Que cantidad de preguntas quieres?",
    items: [],
  },
  {
    title: "Cual es la dificultadad en la que deseas jugar?",
    items: Object.entries(Difficulty),
  },
  {
    title: "que tipo de preguntas te interesan mas?",
    items: Object.entries(Type),
  },
];
