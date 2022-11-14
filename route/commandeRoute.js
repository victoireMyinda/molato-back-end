const express = require('express')

const { addCommande, findCommande, updateCommande, deleteCommande } = require('../controller/commandeController')
const router = express.Router()

router.post('/', addCommande)
router.get('/', findCommande)
router.put('/:id', updateCommande)
router.delete('/:id', deleteCommande)

module.exports = router