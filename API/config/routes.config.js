const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");
const authController = require('../controllers/auth.controller');
const usersController = require("../controllers/user.controller");
const booksController = require("../controllers/books.controller");
const upload = require("./storage.config");

router.get("/", (req, res, next) => res.render("home"));

/* Auth */

router.post("/login", authController.login);

/* Users */
router.post("/signup", usersController.create);

router.get("/users", usersController.list);

router.get("/users/me",
authMiddleware.isAuthenticated,
usersController.getCurrentUser);

router.get("/users/:id",
usersController.getUser);

/* Books */

router.post("/create-book",
authMiddleware.isAuthenticated,
upload.single("photo"),
booksController.create);

router.get("/books",
booksController.list);

router.delete("/books/delete/:id",
authMiddleware.isAuthenticated,
booksController.deleteBook);

module.exports = router;






