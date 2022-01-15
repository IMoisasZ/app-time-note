import express from 'express'
import PlaceWorkController from '../controllers/placeWork.controller.js'

const route = express.Router()

route.post('/', PlaceWorkController.createPlaceWork)
route.put('/', PlaceWorkController.updatePlaceWork)
route.get('/', PlaceWorkController.getAllPlaceWork)
route.get('/:place_work_id', PlaceWorkController.getPlaceWork)

export default route