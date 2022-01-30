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
    </section>
  );
}

// Single Book
const Book = () => {
  const imageURL =
    "https://images-na.ssl-images-amazon.com/images/I/51G2Y+mbUpL._AC_UL604_SR604,400_.jpg";
  const title = "The Last Thing He Told Me: A Novel";
  const author = "Laura Dave";
  const bookMaterial = "Paperback";
  const price = "$19.99";

  return (
    <article className="singleBook">
      <img src={imageURL} alt="placeholder" className="thumbnail" />
      <h1>{title}</h1>
      <p className="bookAuthor">by {author}</p>
      <p>{bookMaterial}</p>
      <p>{price}</p>
    </article>
  );
};

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
