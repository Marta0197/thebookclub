const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { REQUIRED_FIELD } = require("../config/errorMessages");
const User = require("../models/User.model");



const BookSchema = new mongoose.Schema(
  {
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, REQUIRED_FIELD],
      },
    userName: {
        type: String,
      },
    bookText: {
      type: String,
      required: [true, REQUIRED_FIELD],
    },
    author: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;