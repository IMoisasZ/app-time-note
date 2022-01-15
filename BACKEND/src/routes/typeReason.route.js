import express from 'express'
import TypeReasonController from '../controllers/typeReason.controller.js'

const route = express.Router()

route.post('/', TypeReasonController.createTypeReason)
route.put('/', TypeReasonController.updateTypeReason)
route.get('/', TypeReasonController.getAllTypeReason)
route.get('/:type_reason_id', TypeReasonController.getTypeReason)

export default route