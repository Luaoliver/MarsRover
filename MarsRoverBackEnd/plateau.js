const Sequelize = require('sequelize');
const database = require('./db');

const Plateau = database.define('plateau', {
    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    eixoX: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    eixoY: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    busyPlaces: Sequelize.INTEGER
})

module.exports = Plateau;