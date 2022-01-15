import TypeDiRepository from '../repositories/typeDi.repository.js'

async function createTypeDi(typeDi){
    console.log(typeDi);
    return await TypeDiRepository.createTypeDi(typeDi)
}

async function updateTypeDi(typeDi){
    return await TypeDiRepository.updateTypeDi(typeDi)
}

async function getAllTypeDi(){
    return await TypeDiRepository.getAllTypeDi()
}

async function getTypeDi(typeDi_id){
    return await TypeDiRepository.getTypeDi(typeDi_id)
}

export default {
    createTypeDi,
    updateTypeDi,
    getAllTypeDi,
    getTypeDi
}