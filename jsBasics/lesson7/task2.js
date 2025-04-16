function countdown(num) {
  console.log(num);

  if (num <= 0) {
    return;
  }

  countdown(num - 1);
}

// Викликаємо функцію з аргументом 5
countdown(5);
