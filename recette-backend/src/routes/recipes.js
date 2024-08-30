const express = require("express");
const router = express.Router();
const { getAllRecipes, addRecipe, getRecipeById, searchRecipes, likeRecipe } = require("../controllers/recipeController");
const { demandeRecipe, getDemandeRecipe } = require("../controllers/demandeController");

router.get("/search", searchRecipes);

router.get("/", getAllRecipes);

router.get("/demande-recipe", getDemandeRecipe);
router.post("/demande-recipe", demandeRecipe);

router.get("/:id", getRecipeById);

router.get("/:id/like", likeRecipe);

router.post("/add", addRecipe);



module.exports = router;
