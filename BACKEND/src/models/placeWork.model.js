import Sequelize from "sequelize"
import db from '../connectionDb/db.ConnectionDb.js'
import Sector from './sector.model.js'

const PlaceWork = db.define('place_work', {
    place_work_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    place_work: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sector_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    actived: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'place_work'})

export default PlaceWork

PlaceWork.belongsTo(Sector, { foreignKey: 'sector_id' })

