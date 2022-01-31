import React from "react";

// Single Book
const Book = ({ img, title, author, bookMaterial, price }) => {
  // attribute, event handler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Clicked");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="singleBook"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="placeholder" className="thumbnail" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <p className="bookAuthor">by {author}</p>
      <p>{bookMaterial}</p>
      <p>{price}</p>
      <button type="button" onClick={clickHandler}>
        Submit
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
