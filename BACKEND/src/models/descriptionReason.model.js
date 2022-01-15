import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'
import CodeReason from './codeReason.model.js'

const DescriptionReason = db.define('description_reason', {
    description_reason_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_reason_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description_reason: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'description_reason' })

export default DescriptionReason

DescriptionReason.belongsTo(CodeReason, { foreignKey: 'code_reason_id'})
