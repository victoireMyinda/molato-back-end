const mongoose = require('mongoose')


var userModel = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    nomEtablissement: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    motDePasse: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },
}, {
    timestamps: true
})

const UserModel = mongoose.model("usermodel", userModel)
module.exports = UserModel