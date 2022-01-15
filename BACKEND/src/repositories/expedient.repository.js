import ExpedientModel from '../models/expedient.model.js'

async function createExpedient(expedient){
    try {
        const newExpedient = await ExpedientModel.create(expedient)
        return await getExpedient(newExpedient.expedient_id)
    } catch (error) {
        throw error
    }
}

async function updateExpedient(expedient){
    try {
        await ExpedientModel.update(expedient, {
            where: {
                expedient_id: expedient.expedient_id
            }
        })
        return await getExpedient(expedient.expedient_id)
    } catch (error) {
        throw error
    }
}

async function getExpedients(){
    try {
        return await ExpedientModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getExpedient(expedient_id){
    try {
        return await ExpedientModel.findByPk(expedient_id)
    } catch (error) {
        throw error
    }
}

export default {
    createExpedient,
    updateExpedient,
    getExpedients,
    getExpedient
}