import StatusDiModel from '../models/statusDi.model.js'

async function createStatusDi(statusDi){
    try {
        const newStatusDi = await StatusDiModel.create(statusDi)
        return await getStatusDi(newStatusDi.statusDi_id)
    } catch (error) {
        throw error
    }
}

async function updatedStatusDi(statusDi){
    try {
        await StatusDiModel.update(statusDi, {
            where: {
                statusDi_id: statusDi.statusDi_id
            }
        })
        return await getStatusDi(statusDi.statusDi_id)
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

async function getStatusDi(statusDi_id){
    try {
        return await StatusDiModel.findByPk(statusDi_id)
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