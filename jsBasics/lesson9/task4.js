// Створюємо об'єкт person
const person = {
  firstName: "Іван",
  lastName: "Петренко",
  age: 28,
};

// Додаємо властивість email
person.email = "ivan.petrenko@example.com";

// Видаляємо властивість age
delete person.age;

// Виводимо оновлений об'єкт у консоль
console.log(person);
// → { firstName: 'Іван', lastName: 'Петренко', email: 'ivan.petrenko@example.com' }
