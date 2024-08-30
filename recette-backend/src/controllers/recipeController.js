const Recipe = require("../models/Recipe");


const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(201).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if(!recipe){
            return res.status(404).json({message : "Recette non trouvée"});
        }
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const likeRecipe = async (req, res) => {
    try {
    const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: "Recette non trouvée" });
        }

        recipe.like = Number(recipe.like) + 1;
        recipe.save();
        res.status(201).json(recipe);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
}

const addRecipe = async (req, res) => {
    const recipe = new Recipe(req.body);

    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const searchRecipes = async (req, res) => {
    const query = req.query.q;
    console.log("J'ai tenté de faire une recherche");
    try {
        const recipes = await Recipe.find({
            title : { $regex : query, $options : "i"}
        });

        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { getAllRecipes, getRecipeById, likeRecipe, addRecipe, searchRecipes }