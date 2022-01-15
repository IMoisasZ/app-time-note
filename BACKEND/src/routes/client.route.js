import express from 'express'
import ClientController from '../controllers/client.controller.js'

const route = express.Router()

route.post('/', ClientController.createClient)
route.put('/', ClientController.updateClient)
route.get('/', ClientController.getClients)
route.get('/:client_id', ClientController.getClient)

export default route