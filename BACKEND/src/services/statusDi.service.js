import StatusDiRepository from '../repositories/statusDi.repository.js'

async function createStatusDi(statusDi){
    return await StatusDiRepository.createStatusDi(statusDi)
}

async function updatedStatusDi(statusDi){
    return await StatusDiRepository.updatedStatusDi(statusDi)
}

async function getAllStatusDi(){
    return await StatusDiRepository.getAllStatusDi()
}

async function getStatusDi(statusDi_id){
    return await StatusDiRepository.getStatusDi(statusDi_id)
}

export default {
    createStatusDi,
    updatedStatusDi,
    getAllStatusDi,
    getStatusDi
}