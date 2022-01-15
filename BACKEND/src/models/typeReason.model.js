import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'

const TypeReason = db.define('type_reason', {
    type_reason_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'type_reason' })

export default TypeReason