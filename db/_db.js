const Sequelize = require('sequelize');

//set up postgres
const db = new Sequelize('', { logging: false, define: {
        timestamps: false
    } });

module.exports = db;
