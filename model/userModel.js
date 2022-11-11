const mongoose = require('mongoose')


var userModel = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    prenom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    nomEtablissement: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    contact: {
        type: String,
    },

    motDePasse: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },
}, {
    timestamps: true
})

const USerModel = userModel.model("usermodel", userModel)
module.exports = userModel