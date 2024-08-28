const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
const { getAllRecipes, addRecipe, getRecipeById, searchRecipes } = require("../controllers/recipeController");

router.get("/", getAllRecipes);

router.get("/search", searchRecipes);

router.get("/:id", getRecipeById);

router.post("/add", addRecipe);



module.exports = router;
