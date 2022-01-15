import PlaceWorkModel from '../models/placeWork.model.js'

async function createPlaceWork(placeWork){
    try {
        const newPlaceWork = await PlaceWorkModel.create(placeWork)
        return await getPlaceWork(newPlaceWork.place_work_id)
    } catch (error) {
        throw error
    }
}


async function updatePlaceWork(placeWork){
    try {
        await PlaceWorkModel.update(placeWork, {
            where: {
                place_work_id: placeWork.place_work_id
            }
        })
        return await getPlaceWork(placeWork.place_work_id)
    } catch (error) {
        throw error
    }
}


async function getAllPlaceWork(){
    try {
        return await PlaceWorkModel.findAll()
    } catch (error) {
        throw error
    }
}


async function getPlaceWork(place_work_id){
    try {
        return await PlaceWorkModel.findByPk(place_work_id)
    } catch (error) {
        throw error
    }
}

export default {
    createPlaceWork,
    updatePlaceWork,
    getAllPlaceWork,
    getPlaceWork
}