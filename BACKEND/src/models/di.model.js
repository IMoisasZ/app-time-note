import Sequelize from 'sequelize'
import db from '../connectionDb/db.ConnectionDb.js'
import ClientModel from './client.model.js'
import StatusDiModel from './statusDi.model.js'
import TypeDiModel from './typeDi.model.js'

const DI = db.define('di', {
    di_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    di: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    os: {
        type: Sequelize.STRING,
        allowNull: true
    },
    op: {
        type: Sequelize.STRING,
        allowNull: true
    },
    order_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    budget_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    die_description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    die_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name_piece: {
        type: Sequelize.STRING,
        allowNull: true
    },
    number_piece: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    start: {
        type: Sequelize.DATE,
        allowNull: true
    },
    deadline: {
        type: Sequelize.DATE,
        allowNull: true
    },
    progress: {
        type: Sequelize.STRING,
        allowNull: true
    },
    update_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    typeDi_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    statusDi_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    delivery: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, { tableName: 'di'})

export default DI

DI.belongsTo(ClientModel, { foreignKey: 'client_id' })
DI.belongsTo(StatusDiModel, { foreignKey: 'statusDi_id' })
DI.belongsTo(TypeDiModel, { foreignKey: 'typeDi_id' })