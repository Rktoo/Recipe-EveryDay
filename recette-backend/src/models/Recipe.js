const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    image: { type: String, require: false },
    like: { type: String, require: false}
}, {
    timestamps: true
});

module.exports = mongoose.model("Recipe", recipeSchema);