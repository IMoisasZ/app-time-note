import express from 'express'
import ExpedientController from '../controllers/expedient.controller.js'

const route = express.Router()

route.post('/', ExpedientController.createExpedient)
route.put('/', ExpedientController.updateExpedient)
route.get('/', ExpedientController.getExpedients)
route.get('/:expedient_id', ExpedientController.getExpedient)

export default route