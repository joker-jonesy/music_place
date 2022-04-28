const Sequelize = require('sequelize');
const db = require('./_db');
const Album = require('./album');

const Artist = db.define('artist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

Artist.getEverything = async function() {
  const artists = await Artist.findAll({
    include: Album
  });
  return artists;
}

// instance methods
Artist.prototype.nameStatement = function() {
  return `The artist is ${this.name}.`;
}


module.exports = Artist;
