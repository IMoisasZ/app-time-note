import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'
import CodeReasonModel from './codeReason.model.js'
import DescriptionReasonModel from './descriptionReason.model.js'
import DIModel from './di.model.js'
import PlaceWorkModel from './placeWork.model.js'
import OperationModel from './operation.model.js'
import ExpedientModel from './expedient.model.js'

const ProjectNote = db.define(
	'project_note',
	{
		note_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		date: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		code_reason_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		description_reason_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		di_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		os_id: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		task_description: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		place_work_id: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		operation_id: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		expedient_id: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		start: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		pause: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		finish: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		notice: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		note_status: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{ tableName: 'project_note' },
)

export default ProjectNote

ProjectNote.belongsTo(CodeReasonModel, { foreignKey: 'code_reason_id' })
ProjectNote.belongsTo(DescriptionReasonModel, {
	foreignKey: 'description_reason_id',
})
ProjectNote.belongsTo(DIModel, { foreignKey: 'di_id' })
ProjectNote.belongsTo(PlaceWorkModel, { foreignKey: 'place_work_id' })
ProjectNote.belongsTo(OperationModel, { foreignKey: 'operation_id' })
ProjectNote.belongsTo(ExpedientModel, { foreignKey: 'expedient_id' })
