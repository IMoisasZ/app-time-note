import StatusDiService from "../services/statusDi.service.js";

async function createStatusDi(req, res, next) {
    try {
        const statusDi = req.body
        res.send(await StatusDiService.createStatusDi(statusDi))
    } catch (error) {
        next(error)
    }
}

async function updatedStatusDi(req, res, next){
    try {
        const statusDi = req.body
        res.send(await StatusDiService.updatedStatusDi(statusDi))
    } catch (error) {
        next(error)
    }
}

async function getAllStatusDi(req, res, next){
    try {
        res.send(await StatusDiService.getAllStatusDi())
    } catch (error) {
        next(error)
    }
}

async function getStatusDi(req, res, next) {
    try {
        res.send(await StatusDiService.getStatusDi(req.params.statusDi_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createStatusDi,
    updatedStatusDi,
    getAllStatusDi,
    getStatusDi
}