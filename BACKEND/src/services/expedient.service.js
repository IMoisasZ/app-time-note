import ExpedientRepository from '../repositories/expedient.repository.js'

async function createExpedient(expedient){
    return await ExpedientRepository.createExpedient(expedient)
}

async function updateExpedient(expedient){
    return await ExpedientRepository.updateExpedient(expedient)
}

async function getExpedients(){
    return await ExpedientRepository.getExpedients()
}

async function getExpedient(expedient_id){
    return await ExpedientRepository.getExpedient(expedient_id)
}

export default {
    createExpedient,
    updateExpedient,
    getExpedients,
    getExpedient
}