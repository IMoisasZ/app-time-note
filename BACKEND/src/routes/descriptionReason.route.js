import express from 'express'
import DescriptionReasonController from '../controllers/descriptionReason.controller.js'

const route = express.Router()

route.post('/', DescriptionReasonController.createDescriptionReason)
route.put('/', DescriptionReasonController.updateDescriptionReason)
route.get('/', DescriptionReasonController.getAllDescriptionReason)
route.get('/:description_reason_id', DescriptionReasonController.getDescriptionReason)

export default route