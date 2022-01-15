import CodeReasonRepository from "../repositories/codeReason.repository.js"

async function createCodeReason(codeReason){
    return await CodeReasonRepository.createCodeReason(codeReason)
}

async function updateCodeReason(codeReason){
    return await CodeReasonRepository.updateCodeReason(codeReason)
}

async function getAllCodeReason(){
    return await CodeReasonRepository.getAllCodeReason()
}

async function getCodeReason(code_reason_id){
    return await CodeReasonRepository.getCodeReason(code_reason_id)
}

export default {
    createCodeReason,
    updateCodeReason,
    getAllCodeReason,
    getCodeReason
}
