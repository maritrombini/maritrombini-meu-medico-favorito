const express = require('express')
const router = express.Router()
const controller = require('../controllers/doctorController')

//rota que cadastra medico
router.post('/', controller.createDoctor)

//rota que retorna os medicos
router.get('/', controller.getAllDoctors)

//rota que retorna medico por id
router.get('/:id', controller.getDoctor)

//rota para atualizar medico
router.put('/:id', controller.updateDoctor)

module.exports = router
