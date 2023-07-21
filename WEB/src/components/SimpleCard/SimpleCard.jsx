import React from "react";
import "./SimpleCard.css";

const SimpleCard = ({ book, children, linkTo }) => {
  return (
    <a href={linkTo} className="card-link">
      <div className="card-simple">
        <div className="card-simple-title">{book.title}</div>
        {children}
      </div>
    </a>
  );
};

export default SimpleCard;

