const express = require('express');
const app = express();
const PORT = 8089;
const morgan = require('morgan');
const artistRouter = require('./routes/artists');
const albumRouter = require('./routes/albums');
const { db } = require('./db'); // db the folder if you don't provide a filename, it will look automatically for index.js

const setup = async () => {
  try {
    // logging middleware

    //routing

    // custom 404 response
    // at the very bottom of your code so that any url that DOES NOT get hit will land here.
    // there is no error that happened, I just could not find your route so I want to customize my response to you.


    // error handling middleware: (err, req, res, next) => {}
    // regular middleware: (req, res, next) => {}


    // syncing the database before listening to the port!

  } catch(e) {
    console.log(e);
  }
}

setup();
