const boardService = require('../services/BoardService');

module.exports = {
    createBoard: async (req, res) => {
        const { name } = req.body;
        const board = await boardService.createBoard(name);
        res.status(201).json(board);
    },
    getAllBoards: async (req, res) => {
        const boards = await boardService.getAllBoards();
        res.json(boards);
    },
    getBoardById: async (req, res) => {
        const { id } = req.params;
        const board = await boardService.getBoardById(id);
        res.json(board);
    }
}