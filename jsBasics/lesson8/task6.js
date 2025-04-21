// Вихідний масив
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Крок 1: Створення копії масиву
const sortedList = [...numbersList]; // або numbersList.slice()

// Крок 2: Сортування копії масиву від меншого до більшого
sortedList.sort((a, b) => a - b);

// Крок 3: Виведення обох масивів
console.log("Оригінальний масив:", numbersList);
console.log("Відсортований масив:", sortedList);
