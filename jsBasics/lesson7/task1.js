function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback();
  } else {
    oddCallback();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

// Приклади викликів:
handleNum(10, handleEven, handleOdd); // Виведе: number is even
handleNum(7, handleEven, handleOdd); // Виведе: number is odd
handleNum(13, handleEven, handleOdd); // Виведе: number is odd
handleNum(5, handleEven, handleOdd); // Виведе: number is odd
