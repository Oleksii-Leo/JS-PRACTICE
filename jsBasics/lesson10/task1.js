import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Місто", "Валерʼян Підмогильний", 1927);
const book2 = new Book("Кобзар", "Тарас Шевченко", 1840);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Залишенець", "Володимир Лис", 2009, "PDF");
ebook1.printInfo();

console.log(book1.title);
book1.title = "Новий Місто";
book1.printInfo();

const books = [book1, book2, ebook1];

const oldestBook = Book.getOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

const ebook2 = EBook.fromBook(book2, "EPUB");
ebook2.printInfo();
