const categories = {
  "General Knowledge": 9,
  Books: 10,
  Movies: 11,
  Music: 12,
  "Musicals & theater": 13,
  Television: 14,
  "Video Games": 15,
  "Table Games": 16,
  Comics: 29,
  "Japanese Anime & Manga": 31,
  Cartoons: 32,
  "Science & Nature": 17,
  Computation: 18,
  Maths: 19,
  Gadgets: 30,
  Mitology: 20,
  Sports: 21,
  Geografy: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
};
const Difficulty = {
  Easy: "easy",
  Medium: "medium",
  Hard: "hard",
};
const Type = {
  "Multiple Choice": "multiple",
  "True or False": "boolean",
  "Any type of questions": "",
};
export const layaoutElements = [
  {
    title: "Choose the Category in wich you want to play",
    items: Object.entries(categories),
  },
  {
    title: "How many questions?",
    items: [],
  },
  {
    title: "How hard do you want them to be?",
    items: Object.entries(Difficulty),
  },
  {
    title: "What kind of questions do you prefer?",
    items: Object.entries(Type),
  },
];
