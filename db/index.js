const db = require('./_db');
const Artist = require('./artist');
const Album = require('./album');

// 1 to many
Artist.hasMany(Album);
Album.belongsTo(Artist);

// student.getHouse(), house.getStudents()

// console.log(Object.keys(House.prototype));
// console.log(Object.keys(Student.prototype));

module.exports = {
  db,
  Album,
  Artist
};
