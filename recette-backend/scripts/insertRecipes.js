const mongoose = require("mongoose");
const fs = require("fs");
const Recipe = require("../src/models/Recipe");

(async () => {
    try {
        mongoose.connect("mongodb://localhost/recipes");
        console.log("MongoDb connected...");

    } catch (error) {
        console.log(error.message);
    }
})();

fs.readFile("./src/recipes.json", "utf8", (err, data) => {
    if(err) {
        console.error("Erreur sur la lecture du fichier : ", err);
        process.exit(1);
    }

    const recipes = JSON.parse(data);

    Recipe.insertMany(recipes)
    .then(() => {
        console.log("Les recettes ont bien été insérés.");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Erreur sur l'insertion des recettes : ", err);
        mongoose.connection.close();
    })
})
