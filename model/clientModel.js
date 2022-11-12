const mongoose = require('mongoose')

//model clientModel
var clientModel = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "champs obligatoire"]
    },

    prenom: {
        type: String,
        required: [true, "champs obligatoire"]
    },

    adresse: {
        type: String,
    },

    modele: {
        type: String,
    },

    contact: {
        type: String,
    },

    mesure: {
        longDevant: { type: String },

        epaul: { type: String },

        tourEncolure: { type: String },

        tourPoitrine: { type: String },

        tourTaille: { type: String },

        tourBassin: { type: String },

        carrureDos: { type: String },

        carrureDevant: { type: String },

        longEpaule: { type: String },

        longBras: { type: String }
    }

}, {
    timestamps: true
})



const clientDB = mongoose.model('clientModel', clientModel);
module.exports = clientDB;