import React from "react";

// Import SCSS file
import "./index.scss";

// It will render the main component
import ReactDom from "react-dom";

// Connecting the index.css file
import "./index.css";

// ES6 specific import/export functionality
import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

// BookList
function BookList() {
  console.log(greeting);

  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
