import CodeReasonService from '../services/codeReason.service.js'

async function createCodeReason(req, res, next) {
    try {
        const codeReason = req.body
        res.send(await CodeReasonService.createCodeReason(codeReason))
    } catch (error) {
        next(error)
    }
}

async function updateCodeReason(req, res, next) {
    try {
        const codeReason = req.body
        res.send(await CodeReasonService.updateCodeReason(codeReason))
    } catch (error) {
        next(error)
    }
}

async function getAllCodeReason(req, res, next) {
    try {
        res.send(await CodeReasonService.getAllCodeReason())
    } catch (error) {
        next(error)
    }
}

async function getCodeReason(req, res, next) {
    try {
        res.send(await CodeReasonService.getCodeReason(req.params.code_reason_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createCodeReason,
    updateCodeReason,
    getAllCodeReason,
    getCodeReason
}