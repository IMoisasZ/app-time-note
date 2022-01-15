import DiService from '../services/di.service.js'

async function createDi(req, res, next) {
    try {
        const di = req.body
        console.log(di);
        res.send(await DiService.createDi(di))
    } catch (error) {
        next(error)
    }
}

async function updateDi(req, res, next) {
    try {
        const di = req.body
        res.send(await DiService.updateDi(di))
    } catch (error) {
        next(error)
    }
}

async function getAllDi(req, res, next) {
    try {
        res.send(await DiService.getAllDi())
    } catch (error) {
        next(error)
    }
}

async function getDi(req, res, next) {
    try {
        res.send(await DiService.getDi(req.params.di_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createDi,
    updateDi,
    getAllDi,
    getDi
}