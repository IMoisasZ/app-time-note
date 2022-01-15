import SectorRepository from '../repositories/sector.repository.js'

async function createSector(sector){
    return await SectorRepository.createSector(sector)
}

async function updateSector(sector){
    return await SectorRepository.updateSector(sector)
}

async function getSectors(){
    return await SectorRepository.getSectors()
}

async function getSector(sector_id){
    return await SectorRepository.getSector(sector_id)
}

export default {
    createSector,
    updateSector,
    getSectors,
    getSector
}