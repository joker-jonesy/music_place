const db = require('./_db');
const Artist = require('./artist');
const Album = require('./album');

// 1 to many


module.exports = {
  db,
  Album,
  Artist
};
