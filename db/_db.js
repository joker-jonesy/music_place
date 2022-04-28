const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/music_app', { logging: false, define: {
        timestamps: false
    } });

module.exports = db;
