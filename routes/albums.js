const router = require('express').Router();
const { Album, Artist} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll();
    res.send(albums);
  } catch (e) {
    next(e);
  }
});
// /students/:id
router.get('/:id', async (req, res, next) => {
  try {
    // const student = await Student.findByPk(req.params.id);
    // const studentsHouse = await House.findByPk(student.houseId);
    // const studentsHouse = await student.getHouse();
    // PROBLEM: We made 2 database calls, when we would much have rather made 1.
    // Let's solve that problem!!
    // 'eager-loading' --> I want to get the information I'm asking for AND if I have an association, I will want those instance(s) as well.

    // findById
    // 2nd argument: an object with an include key, and the model I want to include

    const album = await Album.findByPk(req.params.id, {
      include: Artist
    });


    // console.log('i have students house', studentsHouse);
    res.send(album);
  } catch(e) {
    next(e);
  }
});

module.exports = router;
