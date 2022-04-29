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
    app.use(morgan('dev'));

    //routing
    app.use('/artists', artistRouter);

    // custom 404 response
    app.use((req,res)=>
      res.status(404).send("Nothing was found")
    )

    // at the very bottom of your code so that any url that DOES NOT get hit will land here.
    // there is no error that happened, I just could not find your route so I want to customize my response to you.


    // error handling middleware: (err, req, res, next) => {}
    // regular middleware: (req, res, next) => {}

    app.use((err, req,res)=>{
      const status = err.status || 500;
      res.status(status).send(err.message);
    })


    // syncing the database before listening to the port!

    await db.sync({force:true});
    app.listen(PORT, ()=>{
      console.log(`Blasting tunes at ${PORT}`);
    })

  } catch(e) {
    console.log(e);
  }
}

setup();
