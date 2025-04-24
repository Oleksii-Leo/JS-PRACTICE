// Масив об’єктів із довільними властивостями
const users = [
  { name: "Оксана", email: "oksana@example.com", age: 24, city: "Львів" },
  { name: "Василь", email: "vasyl@example.com", age: 31, city: "Одеса" },
  { name: "Марічка", email: "marichka@example.com", age: 27, city: "Київ" },
];

// Перебираємо масив за допомогою for...of
for (const user of users) {
  // Деструктуризація потрібних полів із об’єкта user
  const { name, email, age, city } = user;

  // Виведення значень у консоль
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}, Місто: ${city}`);
}
