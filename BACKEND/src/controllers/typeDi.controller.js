import TypeDiService from '../services/typeDi.service.js'

async function createTypeDi(req, res, next) {
    try {
        const typeDi = req.body
        console.log(typeDi);
        res.send(await TypeDiService.createTypeDi(typeDi))
    } catch (error) {
        next(error)
    }
}

async function updateTypeDi(req, res, next) {
    try {
        const typeDi = req.body
        res.send(await TypeDiService.updateTypeDi(typeDi))
    } catch (error) {
        next(error)
    }
}

async function getAllTypeDi(req, res, next) {
    try {
        res.send(await TypeDiService.getAllTypeDi())
    } catch (error) {
        next(error)
    }
}

async function getTypeDi(req, res, next) {
    try {
        res.send(await TypeDiService.getTypeDi(req.params.typeDi_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createTypeDi,
    updateTypeDi,
    getAllTypeDi,
    getTypeDi
}