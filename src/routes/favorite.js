const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favorite");

// Save Movie
router.post("/movie", favoriteController.saveMovies);

// gell all favorit films base on userId
router.get("/movie/:userId", favoriteController.getAllFavorite);

// delete
router.delete("/movie/:id", favoriteController.deleteFavorite);
module.exports = router;
