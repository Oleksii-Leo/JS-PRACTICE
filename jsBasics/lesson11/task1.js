function delayedLog(text, milliseconds) {
  setTimeout(() => {
    console.log(text);
  }, milliseconds);
}
delayedLog("Привіт, світ!", 2000); // Виведе "Привіт, світ!" через 2 секунди
