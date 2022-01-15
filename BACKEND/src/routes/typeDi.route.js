import express from 'express'
import TypeDiController from '../controllers/typeDi.controller.js'

const route = express.Router()

route.post('/', TypeDiController.createTypeDi)
route.put('/', TypeDiController.updateTypeDi)
route.get('/', TypeDiController.getAllTypeDi)
route.get('/:typeDi_id', TypeDiController.getTypeDi)

export default route