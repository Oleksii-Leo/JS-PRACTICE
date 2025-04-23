// Об'єкт car1
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Об'єкт car2
const car2 = {
  brand: "Honda",
  model: "Civic",
  owner: "Іван Петренко",
};

// Об'єкт car3 з використанням оператора spread
const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
