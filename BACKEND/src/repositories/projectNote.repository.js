import ProjectNoteModel from '../models/projectNote.model.js'
import CodeReasonModel from '../models/codeReason.model.js'
import DescriptionReasonModel from '../models/descriptionReason.model.js'
import TypeReasonModel from '../models/typeReason.model.js'
import DIModel from '../models/di.model.js'
import PlaceWorkModel from '../models/placeWork.model.js'
import OperationModel from '../models/operation.model.js'
import ExpedientModel from '../models/expedient.model.js'


async function createProjectNote(projectNote){
    try {
        const newProjectNote =  await ProjectNoteModel.create(projectNote)
        return await getProjectNote(newProjectNote.note_id)
    } catch (error) {
        throw error
    }
}

async function updateProjectNote(projectNote){
    try {
        await ProjectNoteModel.update(projectNote, {
            where: {
                note_id: projectNote.note_id
            }            
        })
        return await getProjectNote(projectNote.note_id)
    } catch (error) {
        
    }
}

async function getAllProjectNote(){
    try {
        return await ProjectNoteModel.findAll({
            include: [
                {
                    model: CodeReasonModel,
                    include: [
                        {
                            model: TypeReasonModel
                        }
                    ]
                },
                {
                    model: DescriptionReasonModel
                },
                {
                    model: DIModel
                },
                {
                    model: PlaceWorkModel
                },
                {
                    model: OperationModel
                },
                {
                    model: ExpedientModel
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

async function getProjectNote(note_id){
    try {
        return await ProjectNoteModel.findByPk(note_id, 
            {
                include: [
                    {
                        model: CodeReasonModel,
                        include: [
                            {
                                model: TypeReasonModel
                            }
                        ]
                    },
                    {
                        model: DescriptionReasonModel
                    },
                    {
                        model: DIModel
                    },
                    {
                        model: PlaceWorkModel
                    },
                    {
                        model: OperationModel
                    },
                    {
                        model: ExpedientModel
                    }
                ]
            })
    } catch (error) {
        throw error
    }
}

export default {
    createProjectNote,
    updateProjectNote,
    getAllProjectNote,
    getProjectNote
}