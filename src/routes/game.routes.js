const express = require('express');
const router = express.Router();
const {
  createGame,
  getGameById,
  updateGame,
  patchGame,
  deleteGame,
} = require('../controllers/game.controller');

// rutas  del juego
router.post('/', createGame);
router.get('/:id', getGameById);
router.put('/:id', updateGame);
router.patch('/:id', patchGame);
router.delete('/:id', deleteGame);

module.exports = router;
