import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'

const Sector = db.define('sector', {
    sector_id: {
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
}, { tableName: 'sector' })

export default Sector