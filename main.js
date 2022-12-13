const book_form = document.getElementById("book-form");
const author_form = document.getElementById("author-form");
function addRowBook() {
  const title = book_form.elements[0].value;
  const genre = book_form.elements[1].value;
  const author = book_form.elements[2].value;

  const book_table = document.getElementById("book-table");

  const newRow = book_table.insertRow(book_table.rows.length);

  const cel1 = newRow.insertCell(0);
  const cel2 = newRow.insertCell(1);
  const cel3 = newRow.insertCell(2);

  cel1.innerHTML = title;
  cel2.innerHTML = genre;
  cel3.innerHTML = author;
}
function addRowAuthor() {
  const name = author_form.elements[0].value;
  const genre = author_form.elements[1].value;
  const book = author_form.elements[2].value;

  const author_table = document.getElementById("author-table");

  const newRow = author_table.insertRow(author_table.rows.length);

  const cel1 = newRow.insertCell(0);
  const cel2 = newRow.insertCell(1);
  const cel3 = newRow.insertCell(2);

  cel1.innerHTML = name;
  cel2.innerHTML = genre;
  cel3.innerHTML = book;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}
class Author extends Person {
  constructor(name, book, genre) {
    super(name);
    this.book = book;
    this.genre = genre;
  }
}
class Books {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
  }
}
const book_lib = new Books();

const person_lib = new Person("Ivan");
const author_lib = new Author();

class Library {
  constructor() {
    this.book = [];
    this.author = [];
  }
  addAuthor(newAuthor) {
    this.author.push(newAuthor);
  }
  addBook(newBook) {
    this.book.push(newBook);
  }
}
const biblija = new Library();
author_form.addEventListener("submit", event => {
  const author_inputs = {
    name: author_form.elements[0].value,
    genre: author_form.elements[1].value,
    book: author_form.elements[2].value
  };

  biblija.addAuthor(author_inputs);
  console.log(author_inputs);
  console.log(biblija);

  event.preventDefault();
});

book_form.addEventListener("submit", event => {
  const book_inputs = {
    name: book_form.elements[0].value,
    genre: book_form.elements[1].value,
    book: book_form.elements[2].value
  };

  biblija.addBook(book_inputs);
  console.log(book_inputs);
  console.log(biblija);

  event.preventDefault();
});

console.log(biblija);
const searchBooks = () => {
  let filter = document.getElementById("book-search").value.toUpperCase();
  let book_table = document.getElementById("book-table");
  let tr = book_table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
const searchAuthors = () => {
  let filter = document.getElementById("author-search").value.toUpperCase();
  let author_table = document.getElementById("author-table");
  let tr = author_table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
