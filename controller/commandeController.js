const asynHandler = require('express-async-handler')
const commandeModel = require('../model/commandeModel')

const addCommande = asynHandler((async(request, response) => {

    if (!request.body) {
        response.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    //new commande
    const createCommande = new commandeModel({
        modele: request.body.modele,
        prix: request.body.prix,
        dateEnregistrement: request.body.dateEnregistrement,
        dateLivraison: request.body.dateLivraison,
        quantite: request.body.quantite,
        id_client: request.body.id_client,
        mesure: {
            londDevant: request.londDevant,
            epaul: request.body.epaul,
            tourEncolure: request.body.tourEncolure,
            tourPoitrine: request.body.tourPoitrine,
            tourTaille: request.body.tourEncolure,
            tourBassin: request.body.tourBassin,
            carrureDos: request.body.carrureDos,
            carrureDevant: request.body.carrureDevant,
            longEpaule: request.body.longEpaule,
            longBras: request.body.longBras
        }
    })

    // save ccommande in database
    createCommande
        .save(createCommande)
        .then(data => {
            response.send(data)
            response.status(200)
        })
        .catch(err => {
            response.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
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