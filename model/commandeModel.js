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
        required: [true, "champs requis"]
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
    }

}, {
    timestamps: true
})

const commandeModel = mongoose.model('commandemodel', commandeClient)
module.exports = commandeModel