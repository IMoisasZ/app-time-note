import DescriptionReasonModel from '../models/descriptionReason.model.js'
import CodeReasonModel from'../models/codeReason.model.js'

async function createDescriptionReason(descriptionReason){
    try {
        const newDescriptionReason = await DescriptionReasonModel.create(descriptionReason)
        return await getDescriptionReason(newDescriptionReason.description_reason_id)
    } catch (error) {
        throw error
    }
}

async function updateDescriptionReason(descriptionReason){
    try {
        await DescriptionReasonModel.update(descriptionReason, {
            where: {
                description_reason_id: descriptionReason.description_reason_id
            }
        })
        return await getDescriptionReason(descriptionReason.description_reason_id)
    } catch (error) {
        throw error
    }
}

async function getAllDescriptionReason(){
    try {
        return await DescriptionReasonModel.findAll({
            include:[
                {
                    model: CodeReasonModel
                }
            ]
        })

    } catch (error) {
        throw error
    }
}

async function getDescriptionReason(description_reason_id){
    try {
        return await DescriptionReasonModel.findByPk(description_reason_id)

    } catch (error) {
        throw error
    }
}

export default {
    createDescriptionReason,
    updateDescriptionReason,
    getAllDescriptionReason,
    getDescriptionReason
}