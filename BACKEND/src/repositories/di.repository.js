import DiModel from '../models/di.model.js'
import ClientModel from '../models/client.model.js'

async function createDi(di){
    try {
        const newDi = await DiModel.create(di)
        return await getDi(newDi.di_id)
    } catch (error) {
        throw error
    }
}

async function updateDi(di){
    try {
        await DiModel.update(di, {
            where: {
                di_id: di.di_id
            }
        })
        return await getDi(di.di_id)
    } catch (error) {
        throw error
    }
}

async function getAllDi(){
    try {
        return await DiModel.findAll({
            include: [
                {
                    model: ClientModel,
                    as: 'clients',
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

async function getDi(di_id){
    try {
        return await DiModel.findByPk(di_id, {
            include: [
                {
                    model: ClientModel,
                    as: 'clients'

                }
            ]
        })
    } catch (error) {
        throw error
    }
}

export default {
    createDi,
    updateDi,
    getAllDi,
    getDi
}