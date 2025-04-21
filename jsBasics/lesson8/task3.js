// Крок 1: Створення масиву чисел
const numbers = [10, 20, 30, 40, 50];

// Крок 2: Обчислення суми елементів масиву за допомогою reduce
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Сума елементів масиву:", sum);
