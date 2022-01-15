import OperationService from '../services/operation.service.js'

async function createOperation(req, res, next) {
    try {
        const operation = req.body
        res.send(await OperationService.createOperation(operation))
    } catch (error) {
        next(error)
    }
}

async function updateOperation(req, res, next) {
    try {
        const operation = req.body
        res.send(await OperationService.updateOperation(operation))
    } catch (error) {
        next(error)
    }
}

async function getOperations(req, res, next) {
    try {
        res.send(await OperationService.getOperations())
    } catch (error) {
        next(error)
    }
}

async function getOperation(req, res, next) {
    try {
        res.send(await OperationService.getOperation(req.params.operation_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createOperation,
    updateOperation,
    getOperations,
    getOperation
}