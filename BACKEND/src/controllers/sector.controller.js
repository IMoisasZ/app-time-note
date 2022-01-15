import SectorService from '../services/sector.service.js'

async function createSector(req, res, next){
    try {
        const sector = req.body
        res.send(await SectorService.createSector(sector))
    } catch (error) {
        next(error)
    }
}

async function updateSector(req, res, next) {
    try {
        const sector = req.body
        res.send(await SectorService.updateSector(sector))
    } catch (error) {
        next(error)
    }
}

async function getSectors(req, res, next) {
    try {
        res.send(await SectorService.getSectors())
    } catch (error) {
        next(error)
    }
}

async function getSector(req, res, next){
    try {
        res.send(await SectorService.getSector(req.params.sector_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createSector,
    updateSector,
    getSectors,
    getSector
}