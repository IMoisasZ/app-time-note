import ProjectNoteService from '../services/projectNote.service.js'

async function createProjectNote(req, res, next) {
    try {
        const projectNote = req.body
        res.send(await ProjectNoteService.createProjectNote(projectNote))
    } catch (error) {
        next(error)
    }
}

async function updateProjectNote(req, res, next){
    try {
        const projectNote = req.body
        res.send(await ProjectNoteService.updateProjectNote(projectNote))
    } catch (error) {
        next(error)
    }
}

async function getAllProjectNote(req, res, next){
    try {
        res.send(await ProjectNoteService.getAllProjectNote())
    } catch (error) {
        next(error)
    }
}

async function getProjectNote(req, res, next){
    try {
        res.send(await ProjectNoteService.getProjectNote(req.params.note_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createProjectNote,
    updateProjectNote,
    getAllProjectNote,
    getProjectNote
}