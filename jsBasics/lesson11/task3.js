// Функція для отримання todo
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Помилка отримання todo");
    }
    return await response.json();
  } catch (error) {
    console.error("Помилка у fetchTodo:", error);
    throw error; // Прокидуємо далі, щоб обробити в Promise.all/race
  }
}

// Функція для отримання user
async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Помилка отримання user");
    }
    return await response.json();
  } catch (error) {
    console.error("Помилка у fetchUser:", error);
    throw error;
  }
}

// Головна функція, яка викликає обидва запити
async function runRequests() {
  try {
    // Promise.all
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Результат Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Помилка у Promise.all:", error);
  }

  try {
    // Promise.race
    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Результат Promise.race:");
    console.log(firstResult);
  } catch (error) {
    console.error("Помилка у Promise.race:", error);
  }
}

// Викликаємо основну функцію
runRequests();
