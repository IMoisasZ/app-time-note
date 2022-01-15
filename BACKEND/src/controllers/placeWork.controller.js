import PlaceWorkService from '../services/placeWork.service.js'

async function createPlaceWork(req, res, next) {
    try {
        const placeWork = req.body
        res.send(await PlaceWorkService.createPlaceWork(placeWork))
    } catch (error) {
        next(error)
    }
}

async function updatePlaceWork(req, res, next) {
    try {
        const placeWork = req.body
        res.send(await PlaceWorkService.updatePlaceWork(placeWork))
    } catch (error) {
        next(error)
    }
}

async function getAllPlaceWork(req, res, next) {
    try {
        res.send(await PlaceWorkService.getAllPlaceWork())
    } catch (error) {
        next(error)
    }
}

async function getPlaceWork(req, res, next) {
    try {
        res.send(await PlaceWorkService.getPlaceWork(req.params.place_work_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createPlaceWork,
    updatePlaceWork,
    getAllPlaceWork,
    getPlaceWork
}