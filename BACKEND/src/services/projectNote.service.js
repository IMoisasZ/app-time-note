import ProjectNoteRepository from '../repositories/projectNote.repository.js'

async function createProjectNote(projectNote){
    return ProjectNoteRepository.createProjectNote(projectNote)
}

async function updateProjectNote(projectNote) {
    return await ProjectNoteRepository.updateProjectNote(projectNote)
}

async function getAllProjectNote(){
    return await ProjectNoteRepository.getAllProjectNote()
}

async function getProjectNote(note_id){
    return await ProjectNoteRepository.getProjectNote(note_id)
}

export default {
    createProjectNote,
    updateProjectNote,
    getAllProjectNote,
    getProjectNote
}