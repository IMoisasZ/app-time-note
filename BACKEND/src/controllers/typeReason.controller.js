import TypeReasonService from '../services/typeReason.service.js'

async function createTypeReason(req, res, next) {
    try {
        const typeReason = req.body
        res.send(await TypeReasonService.createTypeReason(typeReason))
    } catch (error) {
        next(error)
    }
}

async function updateTypeReason(req, res, next) {
    try {
        const typeReason = req.body
        res.send(await TypeReasonService.updateTypeReason(typeReason))
    } catch (error) {
        next(error)
    }
}

async function getAllTypeReason(req, res, next) {
    try {
        res.send(await TypeReasonService.getAllTypeReason())
    } catch (error) {
        next(error)
    }
}

async function getTypeReason(req, res, next) {
    try {
        res.send(await TypeReasonService.getTypeReason(req.params.type_reason_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createTypeReason,
    updateTypeReason,
    getAllTypeReason,
    getTypeReason
}