export function shuffle(array) {
  let newArray = [...array];
  let randomIndex;
  let currentIndex = array.length;
  for (currentIndex > 0; currentIndex--; ) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}
//sacar indices randoms y pasarlos al otro array, y el array actual debe ser eliminado
