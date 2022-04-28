const Sequelize = require('sequelize');
const db = require('./_db');
const Album = require('./album');

const Artist = db.define('artist', {
// define artist
});

Artist.getEverything = async function() {
//  get all artists
}

// instance methods
Artist.prototype.nameStatement = function() {
//  return name of artist
}


module.exports = Artist;
