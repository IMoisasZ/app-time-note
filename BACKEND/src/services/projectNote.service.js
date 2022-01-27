import ProjectNoteRepository from '../repositories/projectNote.repository.js'
import validation from '../utils/validation.utils.js'

async function createProjectNote(projectNote){
    try {
        const message = validation(projectNote)
        if(message) {
            return message
        }
    
        return ProjectNoteRepository.createProjectNote(projectNote)
    } catch (error) {
        throw error    
    }

}

async function updateProjectNote(projectNote) {
    return await ProjectNoteRepository.updateProjectNote(projectNote)
}

async function getAllProjectNote(page, limit){
    return await ProjectNoteRepository.getAllProjectNote(page, limit)
}

async function getProjectNote(note_id){
    return await ProjectNoteRepository.getProjectNote(note_id)
}

async function getProjectNoteByPeriod(period){
    return await ProjectNoteRepository.getProjectNoteByPeriod(period)
}

export default {
    createProjectNote,
    updateProjectNote,
    getAllProjectNote,
    getProjectNote,
    getProjectNoteByPeriod
}