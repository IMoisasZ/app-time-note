import TypeReasonModel from '../models/typeReason.model.js'

async function createTypeReason(typeReason){
    try {
        const newTypeReason = await TypeReasonModel.create(typeReason)
        return await getTypeReason(newTypeReason.type_reason_id)
    } catch (error) {
        throw error
    }
}

async function updateTypeReason(typeReason){
    try {
        await TypeReasonModel.update(typeReason, {
            where: {
                type_reason_id: typeReason.type_reason_id
            }
        })
        return await getTypeReason(typeReason.type_reason_id)
    } catch (error) {
        throw error
    }
}

async function getAllTypeReason(){
    try {
        return await TypeReasonModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getTypeReason(type_reason_id){
    try {
        return await TypeReasonModel.findByPk(type_reason_id)
    } catch (error) {
        throw error
    }
}

export default {
    createTypeReason,
    updateTypeReason,
    getAllTypeReason,
    getTypeReason
}