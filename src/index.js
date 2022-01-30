import React from "react";

// It will render the main component
import ReactDom from "react-dom";

// Add Foundation to index.js
// import "foundation-sites/dist/css/foundation.min.css";

// Import react-foundation components
import {
  Grid,
  Cell,
  Menu,
  MenuItem,
  MediaObject,
  MediaObjectSection,
  Thumbnail,
} from "react-foundation";

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
const BookAuthor = () => (
  <p
    style={{
      color: "#617d98",
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginTop: "0.5em",
    }}
  >
    by Laura Dave
  </p>
);

// Material
const BookMaterial = () => <p>Paperback</p>;

// Price
const BookPrice = () => <p>$9.99</p>;

// ------------------------------------------------------------
// Zurb Header
const Header = () => {
  return (
    <Menu>
      <MenuItem>
        <a href="/">Home</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Blog</a>
      </MenuItem>
      <MenuItem>
        <a href="/">About</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Contact</a>
      </MenuItem>
    </Menu>
  );
};

// Zurb Card
const Card = () => {
  return (
    <div className="cardlayout">
      <MediaObject>
        <MediaObjectSection>
          <Thumbnail src="https://source.unsplash.com/random/100x100" />{" "}
        </MediaObjectSection>
        <MediaObjectSection isMain>
          <h4>Important Heading Here</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commod.
          </p>
        </MediaObjectSection>
      </MediaObject>
    </div>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
