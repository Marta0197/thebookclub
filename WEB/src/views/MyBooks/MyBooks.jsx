import React, { useEffect, useState } from "react";
import { getBooksByCurrentUser } from "../../services/BookService";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import { useNavigate } from "react-router-dom";
import "./MyBooks.css";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getBooksByCurrentUser()
      .then((response) => {
        setBooks(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="row my-3 books">
      {isLoading ? (
        <p>Loading...</p>
      ) : books && books.length > 0 ? (
        books.map((book) => (
          <div
            key={book._id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
          >
            <SimpleCard
              book={book}
              linkTo={`/detail-book/${book._id}`}
            ></SimpleCard>
          </div>
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

export default MyBooks;