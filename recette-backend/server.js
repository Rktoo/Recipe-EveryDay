const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 6001;
const recipeRoutes = require("./src/routes/recipes");
const path = require("path");

const app = express();

(async () => {
    try {
        mongoose.connect("mongodb://localhost/recipes");
        console.log("MongoDb connected...");
        
    } catch (error) {
        console.log(error.message);
    }
})();

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/api/recipes", recipeRoutes);


app.listen(PORT, () => {
    console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
});
