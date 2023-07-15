const Book = require("../models/Book.model");
const User = require("../models/User.model");
const createError = require("http-errors");
const { StatusCodes } = require("http-status-codes");

module.exports.create = (req, res, next) => {
  const { bookText } = req.body;
  const userId = req.currentUserId; // Obtener el ID del usuario autenticado desde el token

  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw createError(StatusCodes.NOT_FOUND, "User not found");
      }

      const newBook = new Book({
        owner: userId,
        userName: user.userName,
        bookText: bookText,
      });

      return newBook.save();
    })
    .then((newBook) => {
      res.status(StatusCodes.CREATED).json(newBook);
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Book.find()
    .then((books) => res.json(books))
    .catch(next);
};


module.exports.deleteBook = (req, res, next) => {
  const { id } = req.params;

  Book.findByIdAndDelete(id)
    .then((book) => {
      if (!book) {
        throw createError(StatusCodes.NOT_FOUND, "Book not found");
      }

      res.sendStatus(StatusCodes.NO_CONTENT);
    })
    .catch(next);
};
