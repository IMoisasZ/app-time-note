import express from 'express'
import DiController from '../controllers/di.controller.js'

const route = express.Router()

route.post('/', DiController.createDi)
route.put('/', DiController.updateDi)
route.get('/', DiController.getAllDi)
route.get('/:di_id', DiController.getDi)

export default route