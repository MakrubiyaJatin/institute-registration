const express = require('express');
const router = express.Router();
const controller = require('../controllers/BoardController');

router.get('/', controller.getAllBoards);
router.get('/:id', controller.getBoardById);
router.post('/', controller.createBoard);

module.exports = router;