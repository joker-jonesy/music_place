const Sequelize = require('sequelize');
const db = require('./_db');

const Album = db.define('album', {
    title:{
        type:Sequelize.STRING,
        allowNull:false,
        unique: true
    }
});

//you can add additional functions to reference your albums here

module.exports = Album;
