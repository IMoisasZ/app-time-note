import StatusDiModel from '../models/statusDi.model.js'

async function createStatusDi(statusDi){
    try {
        const newStatusDi = await StatusDiModel.create(statusDi)
        return await getStatusDi(newStatusDi.status_di_id)
    } catch (error) {
        throw error
    }
}

async function updatedStatusDi(statusDi){
    try {
        await StatusDiModel.update(statusDi, {
            where: {
                status_di_id: statusDi.status_di_id
            }
        })
        return await getStatusDi(statusDi.status_di_id)
    } catch (error) {
        throw error
    }
}

async function getAllStatusDi(){
    try {
        return await StatusDiModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getStatusDi(status_di_id){
    try {
        return await StatusDiModel.findByPk(status_di_id)
    } catch (error) {
        throw error
    }
}

export default {
    createStatusDi,
    updatedStatusDi,
    getAllStatusDi,
    getStatusDi
}