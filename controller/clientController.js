const clientModel = require("../model/clientModel")
const asyncHandler = require('express-async-handler')


//Creer un client
const createClient = asyncHandler(async(request, response) => {

    // validate request
    if (!request.body) {
        response.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    //new client
    const createClient = new clientModel({
        nom: request.body.nom,
        prenom: request.body.prenom,
        adresse: request.body.adresse,
        contact: request.body.contact
    })

    // save client in the database
    createClient
        .save(createClient)
        .then(data => {
            response.send(data)
            response.status(200)
        })
        .catch(err => {
            response.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
})


//recuperation des clients tous/un
const findClient = asyncHandler(async(request, response) => {

    if (request.query.id) {
        const id = request.query.id;

        clientModel.findById(id)
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
        clientModel.find()
            .then(client => {
                response.send(client)
                response.status(200)
            })
            .catch(err => {
                response.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }
})

//update client
const updateClient = asyncHandler(async(request, response) => {
    if (!request.body) {
        return response
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = request.params.id;
    clientModel.findByIdAndUpdate(id, request.body)
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
})


//deleteClient
const deleteClient = asyncHandler(async(request, response) => {
    const id = request.params.id;

    clientModel.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                response.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                response.send({
                    message: "client was deleted successfully!"
                })
            }
        })
        .catch(err => {
            response.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
})


module.exports = { createClient, findClient, updateClient, deleteClient }