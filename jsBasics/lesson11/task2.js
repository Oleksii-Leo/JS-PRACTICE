// Функція для отримання todo
function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка отримання todo");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка у fetchTodo:", error);
    });
}

// Функція для отримання user
function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка отримання user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка у fetchUser:", error);
    });
}

// Promise.all — чекаємо завершення обох запитів
Promise.all([fetchTodo(), fetchUser()])
  .then(([todoResult, userResult]) => {
    console.log("Результат Promise.all:");
    console.log("Todo:", todoResult);
    console.log("User:", userResult);
  })
  .catch((error) => {
    console.error("Помилка у Promise.all:", error);
  });

// Promise.race — перший запит, який завершиться
Promise.race([fetchTodo(), fetchUser()])
  .then((firstResult) => {
    console.log("Результат Promise.race:");
    console.log(firstResult);
  })
  .catch((error) => {
    console.error("Помилка у Promise.race:", error);
  });
