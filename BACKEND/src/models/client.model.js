import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'

const Client = db.define('client', {
    client_id: {
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
}, { tableName: 'client' })

export default Client