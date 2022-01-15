import OperationRepository from '../repositories/operation.repository.js'

async function createOperation(operation) {
    return await OperationRepository.createOperation(operation)
}

async function updateOperation(operation) {
    return await OperationRepository.updateOperation(operation)
}

async function getOperations() {
    return await OperationRepository.getOperations()
}

async function getOperation(operation_id) {
    return await OperationRepository.getOperation(operation_id)
}

export default {
    createOperation,
    updateOperation,
    getOperations,
    getOperation
}