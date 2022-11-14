const asynHandler = require('express-async-handler')
const commandeModel = require('../model/commandeModel')

const addCommande = asynHandler((async(request, response) => {
    response.send({ message: "commande added" })
}))

const findCommande = asynHandler((async(request, response) => {
    response.send({ message: "commande finded" })
}))

const updateCommande = asynHandler((async(request, response) => {
    response.send({ message: "commande updated" })
}))

const deleteCommande = asynHandler((async(request, response) => {
    response.send({ message: "commande deleted" })
}))

module.exports = { addCommande, findCommande, updateCommande, deleteCommande }