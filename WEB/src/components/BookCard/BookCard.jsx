import React from "react";
import "./BookCard.css";

const BookCard = ({ book, children }) => {
  return (
    <div className="card-book">
      <div className="card-book-img-container">
        <img className="card-book-img" src={book.photo} alt={book.title} />
      </div>
      <div className="card-book-content">
        <h5 className="card-book-headline">{book.title}</h5>
        <div>
          <h4>Text</h4>
          <p className="card-book-text">{book.bookText}</p>
          {children}
        </div>
        <div>
          <p className="card-book-text">{book.author} author</p>
          <p className="card-book-text">{book.userName} userName</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

