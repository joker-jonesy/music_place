const router = require('express').Router();
const {Artist } = require('../db');
const {artistsView}= require("../views")


router.get('/', async (req, res, next) => {
  try {
  //  get all artists
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    // get individual artist
  } catch(e) {
    next(e);
  }
});

module.exports = router;
