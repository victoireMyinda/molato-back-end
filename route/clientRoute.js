const express = require("express")
const { createClient, updateClient, findClient, deleteClient } = require("../controller/clientController.js")

const router = express.Router()


// API CRUD client
router.post('/', createClient)
router.get('/', findClient)
router.put('/:id', updateClient)
router.delete('/:id', deleteClient)

module.exports = router