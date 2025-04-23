// Створення об'єкта book
const book = {
  title: "Книга1",
  author: "Біл Гейтс",
  year: 1980,
};

// Деструктуризація назви та автора
const { title, author } = book;

// Виведення деструктуризованих змінних у консоль
console.log("Назва книги:", title);
console.log("Автор:", author);
