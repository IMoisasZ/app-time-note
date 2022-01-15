import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'

const Operation = db.define('operation', {
    operation_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    operation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'operation'} )

export default Operation