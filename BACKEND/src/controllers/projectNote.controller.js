import ProjectNoteService from '../services/projectNote.service.js'

async function createProjectNote(req, res, next) {
    try {
        const projectNote = req.body
        if(!projectNote.date) res.status(400).json({msg: 'A data é obrigatória!'})
        if(!projectNote.code_reason_id) res.status(400).json({msg: 'O código motivo é obrigatório!'})
        if(!projectNote.description_reason_id) res.status(400).json({msg: 'A descrição do mótivo é obrigatória!'})
        if(!projectNote.expedient_id) res.status(400).json({msg: 'O expediente é obrigatório!'})
        if(!projectNote.start) res.status(400).json({msg: 'O inicio é obrigatório!'})
        if(!projectNote.pause) res.status(400).json({msg: 'O intervalo é obrigatório!'})
        if(!projectNote.finish) res.status(400).json({msg: 'O termino é obrigatório!'})
        const data = await ProjectNoteService.createProjectNote(projectNote)
        if(data.msg) res.status(400).send(data)
        res.send(data)
    } catch (error) {
        next(error)
    }
}

async function updateProjectNote(req, res, next){
    try {
        const projectNote = req.body
        if(!projectNote.date) res.status(400).json({msg: 'A data é obrigatória!'})
        if(!projectNote.code_reason_id) res.status(400).json({msg: 'O código motivo é obrigatório!'})
        if(!projectNote.description_reason_id) res.status(400).json({msg: 'A descrição do mótivo é obrigatória!'})
        if(!projectNote.expedient_id) res.status(400).json({msg: 'O expediente é obrigatório!'})
        if(!projectNote.start) res.status(400).json({msg: 'O inicio é obrigatório!'})
        if(!projectNote.pause) res.status(400).json({msg: 'O intervalo é obrigatório!'})
        if(!projectNote.finish) res.status(400).json({msg: 'O termino é obrigatório!'})

        res.send(await ProjectNoteService.updateProjectNote(projectNote))
    } catch (error) {
        next(error)
    }
}

async function getAllProjectNote(req, res, next){
    try {
        const {page, limit} = req.query

        res.send(await ProjectNoteService.getAllProjectNote(page, limit))
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
async function getProjectNoteByPeriod(req, res, next) {
    try {
        const {period} = req.query
        console.log(req.query);
        res.send(await ProjectNoteService.getProjectNoteByPeriod(period))
    } catch (error) {
        next(error)
    }
}

export default {
    createProjectNote,
    updateProjectNote,
    getAllProjectNote,
    getProjectNote,
    getProjectNoteByPeriod,
}