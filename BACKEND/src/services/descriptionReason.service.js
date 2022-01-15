import DescriptionReasonRepository from '../repositories/descriptionReason.repository.js'

async function createDescriptionReason(descriptionReason){
    return await DescriptionReasonRepository.createDescriptionReason(descriptionReason)
}

async function updateDescriptionReason(descriptionReason){
    return await DescriptionReasonRepository.updateDescriptionReason(descriptionReason)
}

async function getAllDescriptionReason(){
    return await DescriptionReasonRepository.getAllDescriptionReason()
}

async function getDescriptionReason(description_reason_id){
    return await DescriptionReasonRepository.getDescriptionReason(description_reason_id)
}

export default {
    createDescriptionReason,
    updateDescriptionReason,
    getAllDescriptionReason,
    getDescriptionReason
}