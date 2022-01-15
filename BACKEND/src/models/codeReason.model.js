import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'
import TypeReason from './typeReason.model.js'

const CodeReason = db.define('codeReason', {
    code_reason_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_reason: {
        type: Sequelize.CHAR,
        allowNull: false,
        unique: true
    },
    description_reason: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type_reason_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN,
    }
}, { tableName: 'code_reason' })

export default CodeReason

CodeReason.belongsTo(TypeReason, { foreignKey: 'type_reason_id' })


