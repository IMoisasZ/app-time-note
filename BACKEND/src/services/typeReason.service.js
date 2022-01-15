import TypeReasonRepository from '../repositories/typeReason.repository.js'

async function createTypeReason(typeReason){
    return await TypeReasonRepository.createTypeReason(typeReason)
}

async function updateTypeReason(typeReason){
    return await TypeReasonRepository.updateTypeReason(typeReason)
}

async function getAllTypeReason(){
    return await TypeReasonRepository.getAllTypeReason()
}

async function getTypeReason(type_reason_id){
    return await TypeReasonRepository.getTypeReason(type_reason_id)
}

export default {
    createTypeReason,
    updateTypeReason,
    getAllTypeReason,
    getTypeReason
}