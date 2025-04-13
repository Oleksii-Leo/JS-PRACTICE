function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("Вік 25:", isAdult(25)); // true
console.log("Вік 15:", isAdult(15)); // false
