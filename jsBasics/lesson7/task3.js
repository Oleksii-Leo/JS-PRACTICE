function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва аргументи мають бути числами");
  }

  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return numerator / denominator;
}

// Тестові виклики
const testCases = [
  { numerator: 10, denominator: 2 },
  { numerator: 5, denominator: 0 },
  { numerator: "10", denominator: 2 },
  { numerator: 8, denominator: "2" },
  { numerator: 20, denominator: 4 },
];

testCases.forEach(({ numerator, denominator }) => {
  try {
    const result = divide(numerator, denominator);
    console.log(`Результат ділення ${numerator} на ${denominator}: ${result}`);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  } finally {
    console.log("Робота завершена");
    console.log("-------------------");
  }
});
