import PlaceWorkRepository from '../repositories/placeWork.repository.js'

async function createPlaceWork(placeWork){
    return await PlaceWorkRepository.createPlaceWork(placeWork)
}

async function updatePlaceWork(placeWork){
    return await PlaceWorkRepository.updatePlaceWork(placeWork)
}

async function getAllPlaceWork(){
    return await PlaceWorkRepository.getAllPlaceWork()
}

async function getPlaceWork(place_work_id){
    return await PlaceWorkRepository.getPlaceWork(place_work_id)
}

export default {
    createPlaceWork,
    updatePlaceWork,
    getAllPlaceWork,
    getPlaceWork
}