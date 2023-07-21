import React from "react";
import "./BookCard.css";

const BookCard = ({ book, children }) => {
  return (
    <div className="card-book">
      <img
        className="card-book-img-top"
        src={book.photo}
      />
      <div className="card-book-body">
        <h5 className="card-book-title">{book.title}</h5>
        <p className="card-book-author">{book.author}</p>
        <p className="card-book-text">{book.bookText}</p>
        {children}
      </div>
    </div>
  );
};

export default BookCard;

