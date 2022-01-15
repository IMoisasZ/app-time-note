import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'

const TypeDi = db.define('typeDi', {
    typeDi_id: {
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
}, { tableName: 'typeDi' })

export default TypeDi