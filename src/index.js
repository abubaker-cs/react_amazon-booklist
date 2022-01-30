import React from "react";

// It will render the main component
import ReactDom from "react-dom";

// Connecting the index.css file
import "./index.css";

// BookList
function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// Single Book
const Book = () => {
  return (
    <article className="singleBook">
      <BookThumbnail />
      <BookTitle />
      <BookAuthor />
      <BookMaterial />
      <BookPrice />
    </article>
  );
};

// Thumbnail
const BookThumbnail = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51G2Y+mbUpL._AC_UL604_SR604,400_.jpg"
      alt="placeholder"
      className="thumbnail"
    />
  );
};

// Title
const BookTitle = () => <h1>The Last Thing He Told Me: A Novel</h1>;

// Author
const BookAuthor = () => <p>by Laura Dave</p>;

// Material
const BookMaterial = () => <p>Paperback</p>;

// Price
const BookPrice = () => <p>$9.99</p>;

ReactDom.render(<BookList />, document.getElementById("root"));
