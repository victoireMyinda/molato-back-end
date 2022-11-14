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

    contact: {
        type: String,
    },

}, {
    timestamps: true
})



const clientDB = mongoose.model('clientModel', clientModel);
module.exports = clientDB;