const express = require('express');
const routerGenre = require('./genre.routers');
const routerActor = require('./actor.routers');
const routerDirector = require('./director.routers');
const routerMovie = require('./movie.routers');



const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre)
router.use('/actors', routerActor)
router.use('/directors', routerDirector)
router.use('/movies', routerMovie)



module.exports = router;