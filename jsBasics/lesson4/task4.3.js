// Змінні для радіуса та висоти циліндра
const radius = 5;
const height = 10;

// Обчислення об'єму циліндра за формулою π * r^2 * h
const volume = Math.PI * Math.pow(radius, 2) * height;

// Округлення
const roundedVolume = volume.toFixed(2);

console.log("Радіус циліндра:", radius);
console.log("Висота циліндра:", height);
console.log("Об'єм циліндра:", roundedVolume);
