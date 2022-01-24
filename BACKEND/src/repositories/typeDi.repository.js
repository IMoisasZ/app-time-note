import TypeDiModel from '../models/typeDi.model.js'

async function createTypeDi(typeDi){
    console.log(typeDi);
    try {
        const newTypeDi = await TypeDiModel.create(typeDi)
        console.log(newTypeDi);
        return await getTypeDi(newTypeDi.type_di_id)
    } catch (error) {
        throw error
    }
}

async function updateTypeDi(typeDi){
    try {
        await TypeDiModel.update(typeDi, {
            where: {
                type_di_id: typeDi.type_di_id
            }
        })
        return await getTypeDi(typeDi.type_di_id)
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

async function getTypeDi(type_di_id){
    try {
        return await TypeDiModel.findByPk(type_di_id)
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