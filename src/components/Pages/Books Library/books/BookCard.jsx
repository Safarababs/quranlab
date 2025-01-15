import React from "react";

const BookCard = ({ book, onRead }) => {
  return (
    <div className="bookCard">
      <img src={book.image} alt={book.title} className="bookCover" />
      <h3>{book.title}</h3>
      <button
        onClick={() => onRead(book)}
        className="readButton"
        title="Read this book"
      >
        Read
      </button>
      <a href={book.file} download>
        <button className="downloadButton" title="Download this book">
          Download
        </button>
      </a>
    </div>
  );
};

export default BookCard;
