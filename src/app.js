require('dotenv').config();
const express = require('express');

const logger = require('./middlewares/logger.middleware');
const errorHandler = require('./middlewares/error.middleware');
const homeRoutes = require('./routes/home.routes');
const gameRoutes = require('./routes/game.routes');

const app = express();

// Middlewares globales
app.use(express.json());
app.use(logger);

// Rutas
app.use('/', homeRoutes);
app.use('/game', gameRoutes);

// Middleware de errores — SIEMPRE va al final, después de las rutas
app.use(errorHandler);

module.exports = app;