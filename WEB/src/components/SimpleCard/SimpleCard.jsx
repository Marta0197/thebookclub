import React from "react";
import "./SimpleCard.css";

const SimpleCard = ({ book, children, linkTo }) => {
  return (
    <a href={linkTo} className="card-link">
      <div className="card-simple">
        <img
          className="card-simple-img-top"
          src={book.photo}
          alt={book.title}
        />
        <div className="card-simple-name">{book.title}</div>
        {children}
      </div>
    </a>
  );
};

export default SimpleCard;

