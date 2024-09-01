const Demande = require("../models/Demande");

const demandeRecipe = async (req, res) => {
    const {nom, demande} = req.body;
    
    if(!nom && !demande) {
        res.sendStatus(401).json({success: false, message:"Merci de remplir tous les champs"});
    } else {
        try {
            const newDemande = new Demande({name:nom, demande});
            const response = await newDemande.save({nom, demande});
            if(response){
                res.status(201).json({success : true, message : "Votre demande a bien été envoyé."});
            }
        } catch (error) {
            console.error("Erreur : ", error);
            res.status(501).json({success: false, message: error});
        }
    }


}

const getDemandeRecipe = async (req, res) => {
    try {
        const getAlldemande = await Demande.find().sort({createdAt : -1}).limit(5);
        
        
        if (getAlldemande){
            res.status(201).json(getAlldemande);
        }

    } catch (error) {
        res.status(501).json({success:false, message: error})
    }
}

module.exports = { demandeRecipe, getDemandeRecipe };