const mongoose = require('mongoose')


const commandeClient = mongoose.Schema({
    modele: {
        type: String,
        required: [true, "champs requis"]
    },
    prix: {
        type: String,
        required: [true, "champs requis"]
    },
    dateEnregistrement: {
        type: Date,

    },
    dateLivraison: {
        type: Date,
    },
    quantite: {
        type: String
    },
    id_client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clientModel'
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

const commandeModel = mongoose.model('commandemodel', commandeClient)
module.exports = commandeModel