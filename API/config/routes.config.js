const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");
const authController = require('../controllers/auth.controller');
const userController = require("../controllers/user.controller");
const bookController = require("../controllers/books.controller");

router.get("/", (req, res, next) => res.render("home"));

/* Auth */

router.post("/login", authController.login);

/* Users */
router.post("/signup", userController.create);
router.get("/users", userController.list);

router.get(
    "/users/me",
    authMiddleware.isAuthenticated,
    userController.getCurrentUser
  );

  /* Books */

  router.post(
    "/create-book",
    authMiddleware.isAuthenticated,
    //upload.single("image"),
    bookController.createBook
  );

module.exports = router;






