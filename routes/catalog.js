const express = require("express");
const router = express.Router();

// Require controller modules
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page
router.get("/", book_controller.index);

// GET request for creating a Book
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request to delete Book
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request for updating Book
router.get("/book/:id/update", book_controller.book_update_get);

// POST request for updating Book
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one book
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating Genre
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating BookInstance
router.get("/bookinstance/create", book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance
router.post("/bookinstance/create", book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance
router.get("/bookinstance/:id/delete", book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance
router.post("/bookinstance/:id/delete", book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance
router.get("/bookinstance/:id/update", book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance
router.post("/bookinstance/:id/update", book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for all BookInstances
router.get("/bookinstances", book_instance_controller.bookinstance_list);


// Export modules
module.exports = router;