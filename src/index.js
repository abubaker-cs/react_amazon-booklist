import React from "react";

// Import SCSS file
import "./index.scss";

// It will render the main component
import ReactDom from "react-dom";

// Connecting the index.css file
import "./index.css";

// Setup
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51G2Y+mbUpL._AC_UL604_SR604,400_.jpg",
    title: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
    bookMaterial: "Paperback",
    price: "$19.99",
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    bookMaterial: "Paperback",
    price: "$13.99",
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41A+2VWGZwS._SX331_BO1,204,203,200_.jpg",
    title: "Enough Already: Learning to Love the Way I Am Today",
    author: "Valerie Bertinelli",
    bookMaterial: "Hardcover ",
    price: "$14.99",
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51YZglhcfpL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Redeeming Love",
    author: "Francine Rivers",
    bookMaterial: "Paperback  ",
    price: "$11.99",
  },
];

// BookList
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author, bookMaterial, price } = book;
        return <Book book={book}></Book>;
      })}
      ;
    </section>
  );
}

// Single Book
const Book = (props) => {
  console.log(props);
  const { img, title, author, bookMaterial, price } = props.book;

  console.log(props);

  return (
    <article className="singleBook">
      <img src={img} alt="placeholder" className="thumbnail" />
      <h1>{title}</h1>
      <p className="bookAuthor">by {author}</p>
      <p>{bookMaterial}</p>
      <p>{price}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
