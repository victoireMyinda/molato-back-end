const express = require("express")
const { createClient, updateClient, findClient, deleteClient } = require("../controller/userController")

const router = express.Router()


// API CRUD client
router.post('/api/client', createClient)
router.get('/api/client', findClient)
router.put('/api/client/:id', updateClient)
router.delete('/api/client/:id', deleteClient)

module.exports = router