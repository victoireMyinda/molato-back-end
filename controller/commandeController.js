const asyncHandler = require('express-async-handler')
const commandeModel = require('../model/commandeModel')



//add commande
const addCommande = asyncHandler((async(request, response) => {

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


//find commande
const findCommande = asyncHandler((async(request, response) => {

    if (request.query.id) {
        const id = request.query.id;

        commandeModel.findById(id)
            .then(data => {
                if (!data) {
                    response.status(404).send({ message: "Not found user with id " + id })
                } else {
                    response.send(data)
                    response.status(200)
                }
            })
            .catch(err => {
                response.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        commandeModel.find()
            .then(client => {
                response.send(client)
                response.status(200)
            })
            .catch(err => {
                response.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }
}))

//update commande
const updateCommande = asyncHandler((async(request, response) => {

    if (!request.body) {
        return response
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = request.params.id;
    commandeModel.findByIdAndUpdate(id, request.body)
        .then(data => {
            if (!data) {
                response.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                response.send(data)
            }
        })
        .catch(err => {
            response.status(500).send({ message: "Error Update user information" })
        })
}))




//delete commande
const deleteCommande = asyncHandler((async(request, response) => {
    response.send({ message: "commande deleted" })
}))

module.exports = { addCommande, findCommande, updateCommande, deleteCommande }