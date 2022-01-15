import ExpedientService from '../services/expedient.service.js'

async function createExpedient(req, res, next) {
    try {
        const expedient = req.body
        res.send(await ExpedientService.createExpedient(expedient))
    } catch (error) {
        next(error)
    }
}

async function updateExpedient(req, res, next) {
    try {
        const expedient = req.body
        res.send(await ExpedientService.updateExpedient(expedient))
    } catch (error) {
        next(error)
    }
}

async function getExpedients(req, res, next) {
    try {
        res.send(await ExpedientService.getExpedients())
    } catch (error) {
        next(error)
    }
}

async function getExpedient(req, res, next) {
    try {
        res.send(await ExpedientService.getExpedient(req.params.expedient_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createExpedient,
    updateExpedient,
    getExpedients,
    getExpedient
}