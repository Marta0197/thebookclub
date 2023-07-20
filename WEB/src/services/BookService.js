import { createHttp } from "./BaseService";
import { bookSchema } from "../schemas/books.schema";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const createBook = (book) =>
  authenticatedHttp.post("/create-book", book);

export const listBooks = () => unauthenticatedHttp.get("/books");

export const getBooksByCurrentUser = () =>
  authenticatedHttp.get(`/my-books`);

export const getBookById = (id) =>
  authenticatedHttp.get(`/detail-book/${id}`);

export const getImageFromPrompt = (prompt) =>
  authenticatedHttp.post("/books/search-image", { prompt });

export const deleteBooks = (id) =>
  authenticatedHttp.delete(`/books/delete/${id}`);

export const savePhoto = (photo) =>
  authenticatedHttp.post("/books/save-image", { photo });