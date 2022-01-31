import React from "react";

// It will render the main component
import ReactDom from "react-dom";

// Connecting the index.css file
import "./index.css";

// Setup
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51G2Y+mbUpL._AC_UL604_SR604,400_.jpg",
  title: "The Last Thing He Told Me: A Novel",
  author: "Laura Dave",
  bookMaterial: "Paperback",
  price: "$19.99",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
  bookMaterial: "Paperback",
  price: "$13.99",
};

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41A+2VWGZwS._SX331_BO1,204,203,200_.jpg",
  title: "Enough Already: Learning to Love the Way I Am Today",
  author: "Valerie Bertinelli",
  bookMaterial: "Hardcover ",
  price: "$14.99",
};

const fourthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51YZglhcfpL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Redeeming Love",
  author: "Francine Rivers",
  bookMaterial: "Paperback  ",
  price: "$11.99",
};

// BookList
function BookList() {
  return (
    <section className="bookList">
      <Book
        img={fourthBook.img}
        title={fourthBook.title}
        author={fourthBook.author}
        bookMaterial={fourthBook.bookMaterial}
        price={fourthBook.price}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa
          similique obcaecati illum vel eius facilis vero tenetur est iste.
        </p>
      </Book>
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
        bookMaterial={thirdBook.bookMaterial}
        price={thirdBook.price}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        bookMaterial={secondBook.bookMaterial}
        price={secondBook.price}
      />

      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        bookMaterial={firstBook.bookMaterial}
        price={firstBook.price}
      />
    </section>
  );
}

// Single Book
const Book = (props) => {
  const { img, title, author, bookMaterial, price, children } = props;

  console.log(props);

  return (
    <article className="singleBook">
      <img src={img} alt="placeholder" className="thumbnail" />
      <h1>{title}</h1>
      <p className="bookAuthor">by {author}</p>
      <p>{bookMaterial}</p>
      <p>{price}</p>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
