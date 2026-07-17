const Game = require('../models/game.model');

// POST /game 
async function createGame(req, res, next) {
  try {
    const { name, description, genre, platform } = req.body;

    // validacion
    if (!name || !description || !genre || !platform) {
      return res.status(400).json({ error: 'All fields are required: name, description, genre, platform' });
    }

    const newGame = await Game.create({ name, description, genre, platform });
    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
}

// GET /game/:id 
async function getGameById(req, res, next) {
  try {
    const game = await Game.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
}

// PUT /game/:id 
async function updateGame(req, res, next) {
  try {
    const game = await Game.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    const { name, description, genre, platform } = req.body;

    if (!name || !description || !genre || !platform) {
      return res.status(400).json({ error: 'All fields are required for PUT: name, description, genre, platform' });
    }

    await game.update({ name, description, genre, platform });
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
}

// PATCH /game/:id 
async function patchGame(req, res, next) {
  try {
    const game = await Game.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }


    await game.update(req.body);
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
}

// DELETE /game/:id 
async function deleteGame(req, res, next) {
  try {
    const game = await Game.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    await game.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = { createGame, getGameById, updateGame, patchGame, deleteGame };
