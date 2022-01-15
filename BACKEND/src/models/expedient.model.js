import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'

const Expedient = db.define('expedient', {
    expedient_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    expedient: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'expedient'})

export default Expedient