import CodeReasonModel from '../models/codeReason.model.js'
import DescriptionReasonModel from '../models/descriptionReason.model.js';

async function createCodeReason(codeReason){
    try {
        console.log(codeReason);
        const newCodeReason = await CodeReasonModel.create(codeReason)
        return await getCodeReason(newCodeReason.code_reason_id)
    } catch (error) {
        throw error
    }
}

async function updateCodeReason(codeReason){
    try {
        await CodeReasonModel.update(codeReason, {
            where: {
                code_reason_id: codeReason.code_reason_id
            }
        })
        return await getCodeReason(codeReason.code_reason_id)
    } catch (error) {
        throw error
    }
}

async function getAllCodeReason(){
    try {
        return await CodeReasonModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getCodeReason(code_reason_id){
    try {
        return await CodeReasonModel.findByPk(code_reason_id)
    } catch (error) {
        throw error
    }
}

export default {
    createCodeReason,
    updateCodeReason,
    getAllCodeReason,
    getCodeReason
}

