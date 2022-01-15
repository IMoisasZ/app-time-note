import express from 'express'
import ProjectNoteController from '../controllers/projectNote.controller.js'

const route = express.Router()

route.post('/', ProjectNoteController.createProjectNote)
route.put('/', ProjectNoteController.updateProjectNote)
route.get('/', ProjectNoteController.getAllProjectNote)
route.get('/:note_id', ProjectNoteController.getProjectNote)

export default route