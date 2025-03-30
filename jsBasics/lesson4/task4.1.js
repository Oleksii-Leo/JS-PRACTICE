// Змінна для радіуса кола
const radius = 5;
// π * r^2
const area = Math.PI * Math.pow(radius, 2);
// Округлення до 2 знаків після крапки
const roundedArea = area.toFixed(2);
console.log("Радіус кола:", radius);
console.log("Площа кола:", roundedArea);

