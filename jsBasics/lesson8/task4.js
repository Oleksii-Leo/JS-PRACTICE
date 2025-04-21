// Крок 1: Створення масиву чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Крок 2: Фільтрація парних чисел
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Крок 3: Виведення масиву парних чисел
console.log("Парні числа:", evenNumbers);
