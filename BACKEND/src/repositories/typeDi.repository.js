import TypeDiModel from '../models/typeDi.model.js'

async function createTypeDi(typeDi){
    console.log(typeDi);
    try {
        const newTypeDi = await TypeDiModel.create(typeDi)
        console.log(newTypeDi);
        return await getTypeDi(newTypeDi.typeDi_id)
    } catch (error) {
        throw error
    }
}

async function updateTypeDi(typeDi){
    try {
        await TypeDiModel.update(typeDi, {
            where: {
                typeDi_id: typeDi.typeDi_id
            }
        })
        return await getTypeDi(typeDi.typeDi_id)
    } catch (error) {
        throw error
    }
}

async function getAllTypeDi(){
    try {
        return await TypeDiModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getTypeDi(typeDi_id){
    try {
        return await TypeDiModel.findByPk(typeDi_id)
    } catch (error) {
        throw error
    }
}

export default {
    createTypeDi,
    updateTypeDi,
    getAllTypeDi,
    getTypeDi
}