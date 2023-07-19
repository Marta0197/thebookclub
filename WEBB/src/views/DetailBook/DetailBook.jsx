import React, { useEffect, useState } from "react";
import { getBookById, deleteBooks } from "../../services/BookService";
import BookCard from "../../components/BookCard/BookCard";
import { useParams } from "react-router-dom";
import "./DetailBook.css";
import { RiDeleteBin6Line, RiArrowLeftSLine } from "react-icons/ri";

const DetailBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        setBook(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  const handleDeleteClick = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this book?"
    );
    if (confirmed) {
      deleteBooks(id)
        .then(() => {
          window.location.href = "/my-books";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="detail-book">
      {isLoading ? (
        <p>Loading...</p>
      ) : book ? (
        <div className="">
          <BookCard book={book}>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/my-books";
                }}
              >
                <RiArrowLeftSLine />
              </button>
              <button
                onClick={() => handleDeleteClick(book._id)}
                className="btn btn-danger"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </BookCard>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default DetailBook;