const Book = require("../models/Book.model");
const User = require("../models/User.model");
const axios = require("axios");
const createError = require("http-errors");
const { StatusCodes } = require("http-status-codes");


module.exports.createBook = (req, res, next) => {
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