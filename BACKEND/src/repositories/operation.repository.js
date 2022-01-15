import OperationModel from '../models/operation.model.js'

async function createOperation(operation){
    try {
        const newOperation = await OperationModel.create(operation)
        return await getOperation(newOperation.operation_id)
    } catch (error) {
        throw error
    }
}

async function updateOperation(operation){
    try {
        const newOperation = await OperationModel.update(operation, {
            where: {
                operation_id: operation.operation_id
            }
        })
        return await getOperation(operation.operation_id)
    } catch (error) {
        throw error
    }
}

async function getOperations(){
    try {
        return await OperationModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getOperation(operation_id){
    try {
        return await OperationModel.findByPk(operation_id)
    } catch (error) {
        throw error
    }
}

export default {
    createOperation,
    updateOperation,
    getOperations,
    getOperation
}