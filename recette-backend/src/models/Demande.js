const mongoose = require("mongoose");

const demandeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    demande: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Demande", demandeSchema);