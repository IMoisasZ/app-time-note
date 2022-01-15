import DescriptionReasonService from '../services/descriptionReason.service.js'

async function createDescriptionReason(req, res, next) {
    try {
        const descriptionReason = req.body
        res.send(await DescriptionReasonService.createDescriptionReason(descriptionReason))
    } catch (error) {
        next(error)
    }
}

async function updateDescriptionReason(req, res, next) {
    try {
        const descriptionReason = req.body
        res.send(await DescriptionReasonService.updateDescriptionReason(descriptionReason))
    } catch (error) {
        next(error)
    }
}

async function getAllDescriptionReason(req, res, next) {
    try {
        res.send(await DescriptionReasonService.getAllDescriptionReason())
    } catch (error) {
        next(error)
    }
}

async function getDescriptionReason(req, res, next) {
    try {
        res.send(await DescriptionReasonService.getDescriptionReason(req.params.description_reason_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createDescriptionReason,
    updateDescriptionReason,
    getAllDescriptionReason,
    getDescriptionReason
}