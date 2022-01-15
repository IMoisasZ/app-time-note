import Sequelize from "sequelize"
import db from '../connectionDb/db.ConnectionDb.js'

const StatusDi = db.define('statusDi', {
    statusDi_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'statusDi' })

export default StatusDi