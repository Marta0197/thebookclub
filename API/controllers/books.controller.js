const Book = require("../models/Book.model");

module.exports.create = (req, res, next) => {
  const { title, author, bookText, photo } = req.body;

  Book.create({
    title,
    author,
    bookText,
    photo,
    owner: req.currentUserId,
  })
    .then((book) => res.status(201).json(book))
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

