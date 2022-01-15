import express from 'express'
import OperationController from '../controllers/operation.controller.js'

const route = express.Router()

route.post('/', OperationController.createOperation)
route.put('/', OperationController.updateOperation)
route.get('/', OperationController.getOperations)
route.get('/:operation_id', OperationController.getOperation)

export default route