import DiRepository from '../repositories/di.repository.js'

async function createDi(di){
    console.log(di);
    return await DiRepository.createDi(di)
}

async function updateDi(di){
    return await DiRepository.updateDi(di)
}

async function getAllDi(){
    return await DiRepository.getAllDi()
}

async function getDi(di_id){
    return await DiRepository.getDi(di_id)
}

export default {
    createDi,
    updateDi,
    getAllDi,
    getDi
}